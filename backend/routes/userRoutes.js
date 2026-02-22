const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Task = require('../models/Task');

// Get all employees with their tasks
router.get('/', async (req, res) => {
    try {
        const employees = await User.find({ role: 'employee' }).lean();

        // For each employee, find their tasks
        const employeesWithTasks = await Promise.all(employees.map(async (emp) => {
            const tasks = await Task.find({ employeeId: emp._id });
            return { ...emp, tasks };
        }));

        res.json(employeesWithTasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new employee
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password, role: 'employee' });
        await newUser.save();
        res.status(201).json({ ...newUser.toObject(), tasks: [] });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete employee
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        // also delete their tasks
        await Task.deleteMany({ employeeId: req.params.id });
        res.json({ message: 'Employee and their tasks deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
