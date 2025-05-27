const user = require('../models/users');
const bcrypt = require('bcrypt');

async function handleusersignup(req, res) {
    try {
        const { name, emailid, password } = req.body;

        // Validate required fields
        if (!name || !emailid || !password) {
            return res.status(400).json({ 
                error: 'Missing required fields',
                details: {
                    name: !name ? 'Name is required' : null,
                    emailid: !emailid ? 'Email is required' : null,
                    password: !password ? 'Password is required' : null
                }
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await user.create({
            name,
            emailid,
            password: hashedPassword,
        });

        // Remove password from response
        const userResponse = {
            name: newUser.name,
            emailid: newUser.emailid,
            createdAt: newUser.createdAt
        };

        return res.status(201).json({
            message: 'User created successfully',
            user: userResponse
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        console.error('Error in signup:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    handleusersignup,
};