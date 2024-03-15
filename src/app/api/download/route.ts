import moment from "moment";
import {DownloadCVModel} from "@/app/models/CVModels/DownloadCV"
import { NextResponse,NextRequest } from "next/server";
import { connect } from "@/app/utils/db";
import fs from "fs-extra"
import { Document, Page, pdfjs } from "react-pdf";


interface DynamicObject {
  [key: string]: any;
}

export const POST = async (request: NextRequest ) => {
  try{
    await connect();
    const unixTimeInMillis = moment().valueOf();
    const dateWithTime = moment(unixTimeInMillis);
    const formattedDate = dateWithTime.format('DD-MM-YYYY HH:mm:ss.SSS');
    
    const formData = await request.formData();

    let dynamicObj: DynamicObject = {};
    let nameURL:String = "";
    formData.forEach((val,key)=>{
      if (val instanceof File) {
        nameURL = `/download/${unixTimeInMillis}-${val.name}`
        dynamicObj["file"] = nameURL;
      }
    });
    console.log('nameURL: ', nameURL);
    dynamicObj["create_at"] = unixTimeInMillis;
    dynamicObj["date"] = formattedDate;

    const dir_file = `public${nameURL}`;
    console.log('dir_file: ', dir_file);
    console.log('dynamicObj: ', dynamicObj);

    if (!fs.existsSync(dir_file)){
      fs.createFile(dir_file);
    }
    const remove = await DownloadCVModel.deleteMany();
    let newCV:any = null;

    if (remove.acknowledged === true) {
      newCV = await new DownloadCVModel(dynamicObj);
      await newCV.save();
    }

    return NextResponse.json({
      status: true,
      cv: newCV,
    },{status: 200});
  }catch (e: any){
    return new Response(e,{status: 500});
  }
};

export const GET = async (req: Request) => {
  try {
    await connect();
    const CV = await DownloadCVModel.find({}).sort({ create_at: -1 }); 
    console.log('date: ', CV);
    // console.log('CV: ', CV);

  //   if (!res.status(200)) {
  //     res.status(400).json({
  //       status: false,
  //       message: "Vui lòng liêm hệ admin",
  //     });
  //   } else res.status(200).json({
  //     status: true,
  //     cv: CV,
  //   });
    return NextResponse.json({
      status: true,
      cv: CV,
    },{status: 200});
  } catch (e) {
    console.log('e: ', e);
    // res.status(409).json({ message: e.message });
    // res.status(400).json({
    //   status: false,
    //   message: "Vui lòng liêm hệ admin",
    // });
  }
}



export const DELETE = async (request: Request) => {
  try {
    // await DownloadCVModel.deleteMany();
    
    // if (!res.status(200)) {
    //   res.status(400).json({
    //     status: false,
    //     message: "Vui lòng liêm hệ admin",
    //   });
    // } else res.status(200).json({
    //   status: true,
    //   message: "Xóa sản phẩm thành công!",
    // });
  } catch (e) {
    console.log('e: ', e);
    // res.status(409).json({ message: e.message });
    // res.status(400).json({
    //   status: false,
    //   message: "Vui lòng liêm hệ admin",
    // });
  }
}

