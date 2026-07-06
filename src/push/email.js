module.exports = {
  host: process.env.EMAIL_SMTP_HOST || "",
  port: parseInt(process.env.EMAIL_SMTP_PORT || "465", 10),
  secure: process.env.EMAIL_SMTP_SECURE !== "false",
  user: process.env.EMAIL_USER || "",
  pass: process.env.EMAIL_PASS || "",
  to: process.env.EMAIL_TO || "",
  from: process.env.EMAIL_FROM || process.env.EMAIL_USER || "",
};
