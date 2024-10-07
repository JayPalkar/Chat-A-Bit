import mongoose from "mongoose";
const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User",
      required: true,
    },
    message: { type: String, required: true },
  },
  { timestamp: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
