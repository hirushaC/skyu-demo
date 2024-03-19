import React from 'react';

const EmailTemplate = ({ formData }) => (
  <div>
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> {formData.name}</p>
    <p><strong>Email:</strong> {formData.email}</p>
    <p><strong>Subject:</strong> {formData.subject}</p>
    <p><strong>Message:</strong> {formData.message}</p>
  </div>
);

export default EmailTemplate;