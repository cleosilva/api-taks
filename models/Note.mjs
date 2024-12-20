import mongoose from "mongoose";

const ckeckListItemSchema = new mongoose.Schema({
    item: { type: String, required: true },
    done: { type: Boolean, default: false }
})

const noteschema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: false },
    tags: [{ type: String }],
    color: { type: String, default: '#ffffff' },
    checklist: [ckeckListItemSchema],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isArchived: { type: Boolean, default: false },
    isPinned: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    reminder: Date,
    notified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const Note = mongoose.model('Note', noteschema);