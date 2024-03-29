import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // get the filename for the file that the user is trying to download
  const filename = req.query.filename;

  // external file URL
  const DUMMY_URL =
    "http://localhost:8700/download/cv-1710409623169.pdf";

  // use axios to get a Readable stream response
  const { data } = await axios.get<Readable>(DUMMY_URL, {
    responseType: "stream",
  });

  res.setHeader("content-disposition", `attachment; filename="${filename}"`);

  // pipe the data to the res object
  data.pipe(res);
}

export default handler;
