const express = require('express');
const Contact = require('../models/contact');
const router = express.Router();

router.post('/submit-contact-form', async (req, res) => {
  try {
    const { fullName, email, subject, message } = req.body;
    const newContact = new Contact({ fullName, email, subject, message });
    await newContact.save();
    res.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
});

module.exports = router;
