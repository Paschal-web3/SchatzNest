const express = require('express');
const user = require ('../models/user')
const bcrypt = require('bcrypt');


exports.register = async (req, res)=>{

    const { email, Fullname, Username, Password, confpassword, upline} = req.body;

    if (!email || !Fullname || !Username || !Password || !confpassword || !upline) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

   
    const existingUser = await user.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    if (Password != confpassword){
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const newUser = new user({
        email,
        Fullname,
        Username,
        Password: hashedPassword,
        upline
    });

    try {
        const savedUser = await newUser.save();
        res.json({ user: savedUser._id });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
 
}

