const user = require('../models/users');

async function handleusersignup(req, res) {
    const { name, emailid, password } = req.body;
    try {
        await user.create({ name, emailid, password });
        res.redirect('/login');  // Redirect to login after signup
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).send("Error creating user");
    }
}

async function handleuserlogin(req, res) {
    const { name, password } = req.body;

    try {
        const foundUser = await user.findOne({ name });

        if (!foundUser || foundUser.password !== password) {
            return res.render('login', {
                error: "Invalid name or password"
            });
        }

        return res.redirect('/');
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    handleusersignup,
    handleuserlogin,
};
