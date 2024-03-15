import moment from "moment";
import mongoose, { Schema, SchemaTypes } from "mongoose";

// const currentDate = moment().unix();
export const unixTimeInMillis = moment().valueOf();



const CV = new mongoose.Schema({
  file: {
    type: SchemaTypes.String,
    require: true,
    trim: true,
  },
  create_at: {
    type: SchemaTypes.Number,
  },
  date: {
    type: SchemaTypes.String,
  }
},{ versionKey: false });
// export const DownloadCVModel = mongoose.model("cvs", CV);
export const DownloadCVModel = mongoose.models.cvs || mongoose.model("cvs", CV);
