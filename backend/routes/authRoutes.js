const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Task = require('../models/Task');

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check for Admin (Fixed Credentials)
        if (email === 'admin5@gmail.com' && password === '1234') {
            return res.json({
                success: true,
                role: 'admin',
                data: { name: 'Super Admin', email: 'admin5@gmail.com' }
            });
        }

        // Check for Employee in Database
        const user = await User.findOne({ email }).lean();

        if (user && user.password === password) {
            // Find tasks for this user
            const tasks = await Task.find({ employeeId: user._id });
            return res.json({
                success: true,
                role: 'employee',
                data: { ...user, tasks }
            });
        }

        return res.status(401).json({ success: false, message: 'Invalid Credentials' });

    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
