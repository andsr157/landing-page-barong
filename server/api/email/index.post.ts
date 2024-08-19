import verifyEmailTemplate from '../../app/email/VerifyEmailTemplate';
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: process.env.NUXT_MAILER_USER,
        pass: process.env.NUXT_MAILER_PASS,
    },
});

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const template = verifyEmailTemplate(body.email, body.name, body.phone, body.message)
        const res = transporter.sendMail({
            from: body.email,
            to: process.env.NUXT_MAILER_USER,
            subject: 'Pertanyaan, Kritik dan Saran',
            html: template.html
        })
        return res
    } catch (error) {
        return { data: {}, status: 500, error: error }
    }
})