const express = require('express')
const bodyParser = require('body-parser')
require("dotenv").config();
const app = express();
const nodemailer = require('nodemailer')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     const error = new Error("Route not found");
//     error.status = 404;
//     next(error);
// });

app.post("/mail/:source", async (req, res) => {


    let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        auth: {
            user: process.env.EMAIL, // your gmail address
            pass: process.env.PASSWORD, // your gmail password
        },
    });
    let mailOptions = {
        subject: ``,
        to: "nousernameidea0709@gmail.com",
        from: `SMART CCTV`,
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Demystifying Email Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body style="margin: 0; padding: 0;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
                <tr>
                    <td style="padding: 10px 0 30px 0;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                            <tr>
                                <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                                    <img src="https://kaloory-dev.s3.ap-south-1.amazonaws.com/logo.png" alt="SMART CCTV" width="300" height="230" style="display: block;" />
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                                <b>Hello Jhanak!,  </b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                Your SMART CCTV (id=1321da2) has reported and emergency of category ${req.params.source}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td width="260" valign="top">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                <tr>
                                                                    <td>
                                                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/left.gif" alt="" width="100%" height="140" style="display: block;" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                                       Please check the surroundings of the camera and report.
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td style="font-size: 0; line-height: 0;" width="20">
                                                            &nbsp;
                                                        </td>
                                                        <td width="260" valign="top">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                <tr>
                                                                    <td>
                                                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/right.gif" alt="" width="100%" height="140" style="display: block;" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                                        Not an emergency? , report it to our team.
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ee4c50" style="padding: 30px 30px 30px 30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
                                                &reg; Smart CCTV , New York 2020<br/>
                                                <a href="#" style="color: #ffffff;"><font color="#ffffff">Unsubscribe</font></a> to this newsletter instantly
                                            </td>
                                            <td align="right" width="25%">
                                                <table border="0" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                            <a href="http://www.twitter.com/" style="color: #ffffff;">
                                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/tw.gif" alt="Twitter" width="38" height="38" style="display: block;" border="0" />
                                                            </a>
                                                        </td>
                                                        <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                                                        <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                            <a href="http://www.twitter.com/" style="color: #ffffff;">
                                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/fb.gif" alt="Facebook" width="38" height="38" style="display: block;" border="0" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
                  `,
    };
    try {
        transporter.sendMail(mailOptions, (error, response) => {
            if (error) {
                // res.status(500).json(("could not send "));
                console.log(error)
                res.status(400).json({
                    message: "unsuccessful"
                })
                console.log("fail ", mailOptions.to);
            } else {
                console.log("gg", mailOptions.to);
                res.status(200).json({
                    messgae: "success"
                })
            }
        });
    } catch (error) {
        res.status(500).send("could not send");
    }

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

