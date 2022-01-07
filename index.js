const express = require("express");
const app = express();
require("dotenv").config();
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT);


const contactEmail = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com',{
  service: 'interia',
  auth: {
    user: "magdalena.kroliczek@gmail.com",
    pass: "Romain1988@",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

 const images = [
    {  
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304363/DSC_0217_xqppm1.jpg" },
    {
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304379/DSC_0872_amkfeq.jpg",
    },
    {
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304335/abraxasCam_zeafil.jpg",
    },
    
  ];
  
 const images1 =[
    {  img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304368/domaine1_ggjuz6.jpg" },
    {
      
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304351/domaine2_l6dzsa.jpg",
    },
    {
      
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304358/domaine3_jpi17a.jpg",
    },
  ];
  
 const images3 = [
    {  img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304334/cementery1_tdgvtj.jpg" },
    {
      
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304341/cementery2_rp5aqk.jpg",
    },
    {
      
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304330/cementery3_dc4ftj.jpg",
    },
  ];
  
 const images4 =[
    {  img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304399/epernon1_t8sui7.jpg" },
    {
      
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304399/epernon2_ndywgc.jpg",
    },
    {
      
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304401/epernon3_zymhk3.jpg",
    },
  ];
  
  const images5 =[
    {  img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304382/hopital3_i4ktlh.jpg" },
    {
      
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304501/DSC_0260_l4dm6p.jpg",
    },
    {
      
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304384/hopital4_q4wcpp.jpg",
    },
  ];
  
 const images6 = [
    {  img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304423/senchal1_vv2ibu.jpg" },
    {
      
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304426/senchal2_nozert.jpg",
    },
    {
      
      img: "https://res.cloudinary.com/magdakroliczek/image/upload/v1641304442/senchal3_vcfimy.jpg",
    },
  ];

app.get("/images", function (req, res) {
  console.log("appel data yannick");
  res.json(images);
});

app.get("/images1", function (req, res) {
    console.log("appel data yannick");
    res.json(images1);
  });

  app.get("/images3", function (req, res) {
    console.log("appel data yannick");
    res.json(images3);
  });

  app.get("/images4", function (req, res) {
    console.log("appel data yannick");
    res.json(images4);
  });

  app.get("/images5", function (req, res) {
    console.log("appel data yannick");
    res.json(images5);
  });

  app.get("/images6", function (req, res) {
    console.log("appel data yannick");
    res.json(images6);
  });

app.get("/", function (req, res) {
  console.log("appel Home");
  res.json("HELLO");
});

// app.listen(process.env.PORT);


router.post("/contactform", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "parisinconnu@interia.eu",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error)
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    } 
  });
});