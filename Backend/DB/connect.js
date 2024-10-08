import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to Mongodb");
  } catch (error) {
    console.log("error connecting to MongoDb", error.message);
  }
};

export default connect;
