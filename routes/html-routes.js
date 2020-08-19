const path = require("path");
const nodemailer = require("nodemailer");

module.exports = app => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/portfolio", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
  });

  app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  })

  app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  })

  app.post("/contact", (req, res) => {
    const smtpTrans = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    });
  
    const mailOpts = {
      from: "Your sender info here",
      to: GMAIL_USER,
      subject: "New message from contact form at danielalexvega.com",
      text: `${req.body.name} (${req.body.email}) says ${req.body.message}`
    }
  
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        res.render("contact-failer")
      } else {
        res.render("contact-success")
      }
    });
  });
}