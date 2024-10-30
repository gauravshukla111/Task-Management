const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
  assignedTo: { type: String, required: false },
  comments: { type: String, required: false },
});

module.exports = mongoose.model('Task', taskSchema);
