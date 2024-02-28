// post.model.ts
import { Schema, Document } from 'mongoose';

export interface Post extends Document {
  title: string;
  content: string;
}

export const PostSchema = new Schema<Post>(
  {
    _id: { type: Schema.Types.ObjectId, auto: true }, 
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
); 