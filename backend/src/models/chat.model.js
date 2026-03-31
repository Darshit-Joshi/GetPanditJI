import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
    },

    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    message: {
      type: String,
    },

    messageType: {
      type: String,
      enum: ["text", "image"],
      default: "text",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Message", messageSchema);
