import mongoose from "mongoose";

const MessagesSchema = mongoose.Schema({
  name: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Messages = mongoose.model("Messages", MessagesSchema);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/messages");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
const obt = {
  connectDB,
  Messages,
};

export default obt;
