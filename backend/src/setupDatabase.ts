import mongoose, { mongo } from "mongoose";

function setupDatabase(): void {
  const connect = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/messaging-backend");
      console.log("Database connected");
    } catch (error) {
        console.log(`Database connection error: ${error}`);
        return process.exit(1);
    }
  };
  connect();

  mongoose.connection.on("disconnected", connect);
}

export default setupDatabase;
