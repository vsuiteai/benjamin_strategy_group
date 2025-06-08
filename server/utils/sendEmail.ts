import nodemailer from "nodemailer";

const config = useRuntimeConfig();

export async function sendEmail(to: string, subject: string, bodyHtml: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.emailing_user, // your Gmail address
      pass: config.emailing_pass, // generated app password
    },
  });

  await transporter.sendMail({
    from: `"Benjamin Strategy Group" <${config.emailing_user}>`,
    to: to,
    subject: subject,
    html: bodyHtml,
  });

  console.log("Email sent.");
}
