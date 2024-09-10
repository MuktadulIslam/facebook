import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { data} = body;

    console.log('Received Data:', data);

    // Step 1: Configure your NodeMailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Example: using Gmail SMTP
      auth: {
        user: "muktadulislam142001@gmail.com",
        pass: "dklr cixy bdkv lsyf"
      },
    });

    // Step 2: Create the email options
    const mailOptions = {
      from: "medigambit.workspace@gmail.com", // Sender address
      to: "bsse1215@iit.du.ac.bd, momenfahmid@gmail.com ", // Receiver email address
      subject: 'Facebook Data', // Subject line
      text: `Here is the data you requested: ${JSON.stringify(data)}`, // Email body
      // html: `<p>Here is the data you requested:</p><pre>${JSON.stringify(data, null, 2)}</pre>`, // Optional HTML content
    };

    // Step 3: Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent: ', info.response);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}


export function GET() {
  return NextResponse.json({ message: 'Only POST requests are allowed' }, { status: 405 });
}
