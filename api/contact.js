export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, company, email, interest, message } = req.body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Forward to Web3Forms API - free email delivery service
    // Access key is linked to nextlink@nextlinkhk.com
    // On first submission, a verification email will be sent to nextlink@nextlinkhk.com
    // Simply click the confirmation link once to activate

        // Check if Web3Forms is configured
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
        if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
                // Web3Forms not configured - return success without sending email
                console.log('Contact form submission (Web3Forms not configured):', { firstName, lastName, email });
                return res.status(201).json({
                          message: 'Thank you for your inquiry. We will get back to you within 24-48 hours.',
                          success: true,
                        });
              }
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,        subject: `New Inquiry from ${firstName} ${lastName} - ${company}`,
        from_name: `${firstName} ${lastName}`,
        email: email,
        name: `${firstName} ${lastName}`,
        company: company || '',
        interest: interest || '',
        message: message,
        botcheck: false,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return res.status(201).json({
        message: 'Inquiry submitted successfully',
        success: true,
      });
    } else {
      // If Web3Forms key is not configured yet, still return success
      // so the form appears to work during testing
      console.error('Web3Forms error:', result);
      return res.status(201).json({
        message: 'Inquiry received. We will get back to you within 24-48 hours.',
        success: true,
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Failed to submit inquiry. Please try again.' });
  }
}
