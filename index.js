import inquirer from "inquirer";
import nodemailer from "nodemailer";

import "dotenv/config";
import htmlCode from "./htmlCode.js";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASSWORD,
    },
});

const questions = [
    {
        type: "list",
        name: "fromName",
        message: "Please select the sender's name:",
        choices: [
            "Sufyan Ahmed",
            "Sufyan Ahmed (Caltec Instrument Services Co)",
            "Caltec Instrument Services Co",
        ],
        default: "Sufyan Ahmed",
    },
    {
        type: "input",
        name: "to",
        message: "Please enter the recipient's email address:",
        validate: function (value) {
            var pass = value.match(
                /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a valid email address";
        },
    },
];

inquirer.prompt(questions).then((answers) => {
    const mailOptions = {
        from: {
            name: answers.fromName,
            address: process.env.GOOGLE_USER,
        },
        to: answers.to,
        subject: "MERN Stack Developer (Specializing in Next.js, Node.js, and CRM) - Application",
        html: htmlCode,
        attachments: [
            {
                filename: "github.png",
                path: "./images/github.png",
                cid: "github",
            },
            {
                filename: "linkedin.png",
                path: "./images/linkedin.png",
                cid: "linkedin",
            },
            {
                filename: "whatsapp.png",
                path: "./images/whatsapp.png",
                cid: "whatsapp",
            },
            {
                filename: "twitter.png",
                path: "./images/twitter.png",
                cid: "twitter",
            },
            {
                filename: "SufyanResume.pdf",
                path: "./images/SufyanResume.pdf",
                cid: "resume",
            },
        ],
    };

    const sendMail = async (transporter, mailOptions) => {
        try {
            await transporter.sendMail(mailOptions);
            console.log("Email has been sent!");
        } catch (e) {
            console.error(e.message);
        }
    };

    sendMail(transporter, mailOptions);
});
