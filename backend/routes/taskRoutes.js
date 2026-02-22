const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const User = require('../models/User');

// Assign a task
router.post('/', async (req, res) => {
    const { title, description, date, category, email } = req.body;
    try {
        const employee = await User.findOne({ email });
        if (!employee) return res.status(404).json({ message: 'Employee not found' });

        const task = new Task({
            title, description, date, category,
            employeeId: employee._id
        });
        await task.save();

        // Update employee counts
        employee.taskNumbers.newTask += 1;
        await employee.save();

        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update task status
router.patch('/:id', async (req, res) => {
    const { status } = req.body; // 'active', 'completed', 'failed'
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        const employee = await User.findById(task.employeeId);

        // Reset flags
        const oldStatus = task.active ? 'active' : (task.newTask ? 'newTask' : (task.completed ? 'completed' : 'failed'));

        task.active = status === 'active';
        task.newTask = status === 'newTask';
        task.completed = status === 'completed';
        task.failed = status === 'failed';

        await task.save();

        // Update counts
        employee.taskNumbers[oldStatus] -= 1;
        employee.taskNumbers[status] += 1;
        await employee.save();

        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            const employee = await User.findById(task.employeeId);
            const status = task.active ? 'active' : (task.newTask ? 'newTask' : (task.completed ? 'completed' : 'failed'));
            employee.taskNumbers[status] -= 1;
            await employee.save();
            await Task.findByIdAndDelete(req.params.id);
        }
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
