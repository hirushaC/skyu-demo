export default async function handler(req, res) {
  if (req.method === 'POST') {
    const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
    const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID;
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Form submitted successfully' });
      } else {
        res.status(response.status).json({ message: 'Error submitting form' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
