const nodemailer = require("nodemailer");
const { log4js } = require("../logger");
const emailConfig = require("./email");

const logger = log4js.getLogger("push");
logger.addContext("user", "push");

const pushEmail = (title, desp) => {
  if (!emailConfig.host || !emailConfig.user || !emailConfig.pass || !emailConfig.to) {
    return;
  }
  const transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure,
    auth: { user: emailConfig.user, pass: emailConfig.pass },
  });
  const mailOptions = {
    from: emailConfig.from,
    to: emailConfig.to,
    subject: title,
    text: desp,
  };
  transporter.sendMail(mailOptions)
    .then(() => logger.info("邮件推送成功"))
    .catch((err) => logger.error(`邮件推送失败:${err.message}`));
};

module.exports = pushEmail;
