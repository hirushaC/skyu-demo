const sendgridMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
sendgridMail.setApiKey(SENDGRID_API_KEY);

export default async function handler(req, res) {
    const { formData, sendgridTemplateId, senderNamePlaceholder } = req.body;

    const msg = {
        to: formData.email,
        from: 'hirusha.c@insighture.com',
        templateId: sendgridTemplateId,
        dynamic_template_data: {
            [senderNamePlaceholder.replace('{{', '').replace('}}', '')]: formData.firstname,
        },
    };

    try {
        await sendgridMail.send(msg);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email via SendGrid:', error);
        if (error.response) {
            console.error(error.response.body);
        }
        res.status(error.statusCode || 500).json({ error: 'Failed to send email' });
    }
};