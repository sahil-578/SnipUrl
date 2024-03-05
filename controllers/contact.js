const Contact = require("../models/contact");

async function handleContact(req, res) {
  const { firstName, lastName, email, message } = req.body;
  const contact = await new Contact({
    firstName,
    lastName,
    email,
    message,
  });
  contact.save((error) => {
    if (error) {
      console.error(error);
      res.render("contact", {
        message:
          "There was an error sending your message. Please try again later.",
      });
    } else {
      res.render("contact", {
        message: "Your message has been sent successfully!",
      });
    }
  });
  // return res.render('/');
}

module.exports = {
  handleContact,
};
