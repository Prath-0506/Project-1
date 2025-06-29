import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTURANTT",
    })
    .then(() => {
      console.log("Connected to database sucessfully");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};