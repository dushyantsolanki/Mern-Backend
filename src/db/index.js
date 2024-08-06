import mongoose from "mongoose";

// Create a db connection function.
async function DBConnection() {
  try {
    const res = await mongoose.connect(
      `${process.env.DATABASE_URI}/${process.env.DATABASE_NAME}`
    );
    console.log(" Connected  --> db / index.js / DBConnection_Fn / try ::");
  } catch (error) {
    console.log(
      " Not Connected -->db / index.js / DBConnection_Fn / catch   ::",
      error
    );
    process.exit(1);
  }
}

export { DBConnection };
