import mongoose from "mongoose";

export const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.GZFASHION_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    });
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};
