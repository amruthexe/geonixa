import nodemailer from 'nodemailer';

export const POST = async (req: Request) => {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    // Create a Nodemailer transporter with the correct typing
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string, // Cast to string to satisfy TypeScript
      port: parseInt(process.env.SMTP_PORT as string), // Parse port to integer
      secure: false, // Set to true if using port 465 for SSL
      auth: {
        user: process.env.SMTP_USER as string, // Cast to string to satisfy TypeScript
        pass: process.env.SMTP_PASS as string, // Cast to string to satisfy TypeScript
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER, // Sender's email
      to: 'aluriamruthrajit@gmail.com', // Replace with your recipient's email
      subject: `Message from ${firstName} ${lastName}: ${subject}`,
      text: `You have a new message from ${firstName} ${lastName} (${email}):\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
  }
};
