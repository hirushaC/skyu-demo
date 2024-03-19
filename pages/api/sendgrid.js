import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    const formData = req.body;
    await sendgrid.send({
      to: `${formData.email}`,
      from: "hirusha.c@insighture.com",
      subject: `${formData.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${formData.name}, their email is: ✉️${formData.email} </h3>
              <div style="font-size: 16px;">
              <p><strong>Message:</strong></p>
              <p>${formData.message}</p>
              <br>
              </div>
              <img src="https://sendgrid.com/content/dam/sendgrid/legacy/themes/sgdotcom/pages/resource/brand/2016/SG_Twilio_Lockup_RGBx1.png/_jcr_content/renditions/compressed-original.webp" class="logo-image" style="height: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Sent from<br>Insighture Dev Team<br>Colombo, Sri Lanka</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://www.insighture.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://instagram.com/insighture_/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://linkedin.com/company/insighture/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ success: "Email sent successfully" });
}

export default sendEmail;