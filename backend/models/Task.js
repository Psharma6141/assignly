const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    date: { type: String, required: true },
    category: { type: String, required: true },
    active: { type: Boolean, default: false },
    newTask: { type: Boolean, default: true },
    completed: { type: Boolean, default: false },
    failed: { type: Boolean, default: false },
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
