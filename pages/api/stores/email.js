require('dotenv').config();
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.EMAIL_API_KEY)

module.exports = class Email {
    constructor(store) {
        this.to = store.email
        this.fromEmail = 'raiyanpharon@gmail.com'
        this.fromName = store.name
    }

    async sendMagicLink() {
        const mailOptions = {
            to: this.to,
            from: {
                email: this.fromEmail,
                name: this.fromName
            },
            templateId: 'd-1a7901419a054c2da699cc75b0636ed3',
            dynamic_template_data: {
                name: this.fromName
            }
        }

        await sgMail.send(mailOptions).then(() => {}, console.error)
    }
}