import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "sample_mflix",
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    // connect database with name "sample_mflix"

    console.log(`MongoDB Database: ${conn.connection.db.databaseName}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);

    process.exit(1);
  }
};

export default connectDB;
