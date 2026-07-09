import { Schema, model } from "mongoose";

export interface IMessage {
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp: Date;
}

const messageSchema = new Schema<IMessage>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, default: "" },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Message = model<IMessage>("Message", messageSchema);
export default Message;
