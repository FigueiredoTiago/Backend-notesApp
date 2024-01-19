import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  favorite: {
    type: Boolean,
    required: false,
  },
  updatedAt: { type: Date, default: Date.now },
});

const Note = mongoose.model("Note", NoteSchema);

export default Note;
