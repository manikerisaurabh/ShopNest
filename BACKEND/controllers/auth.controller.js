import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        let { firstName, lastName, email, password, address } = req.body;
        let newUser = await User.findOne({ email: email });
        if (newUser) {
            return res.status(400).json({ error: "email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        let username = lastName + firstName;
        username = username.toLowerCase();

        newUser = new User({
            username: username,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            address
        });

        await newUser.save();
        generateTokenAndSetCookie(newUser._id, res); // Pass newUser._id to generateTokenAndSetCookie

        return res.status(201).json({
            _id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            username: newUser.username,
        });

    } catch (error) {
        console.log("Error in signup controller: " + error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
}


export const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ error: "invalid email or password" })
        }

        let isPasswordCorrect = await bcrypt.compare(password, user.password || "")

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "invalid username or password" })
        }

        generateTokenAndSetCookie(user._id, res);

        return res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username
        });

    } catch (error) {
        console.log("Error in login controller : " + error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
}



export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in login controller : " + error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
}