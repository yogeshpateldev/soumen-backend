import { Schema, model, Document } from "mongoose";

export interface IPost extends Document {
  author: string;
  authorTitle: string;
  authorAvatar: string;
  content: string;
  timestamp: Date;
  likes: number;
  commentsCount: number;
  shares: number;
  postUrl?: string;
  mediaUrl?: string;
  mediaType: "image" | "none";
  tag?: string;
  title?: string;
  readTime?: string;
}

const postSchema = new Schema<IPost>({
  author: { type: String, required: true },
  authorTitle: { type: String, required: true },
  authorAvatar: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, required: true },
  likes: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  postUrl: { type: String },
  mediaUrl: { type: String },
  mediaType: { type: String, enum: ["image", "none"], default: "none" },
  tag: { type: String },
  title: { type: String },
  readTime: { type: String },
});

export const Post = model<IPost>("Post", postSchema);
export default Post;
