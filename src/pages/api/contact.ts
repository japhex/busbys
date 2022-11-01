import sendgrid from '@sendgrid/mail'
import mjml2html from 'mjml'
import type { NextApiRequest, NextApiResponse } from 'next'

const buildEmail = async ({ email, name, phone, message }) =>
  mjml2html(
    `
  <mjml>
    <mj-body>
      <mj-section background-color="#DE4917">
        <mj-text align="center" color="#fff" font-size="40px" font-family="Helvetica Neue">New contact form submission</mj-text>
      </mj-section>
      <mj-section>
        <mj-column>
          <mj-text font-size="18px">Name:</mj-text> <br /> 
          <mj-text font-size="22px" margin-bottom="20px">${name}</mj-text>
        </mj-column>
        <mj-column> 
          <mj-text font-size="18px">Email:</mj-text> <br />
          <mj-text font-size="22px" margin-bottom="20px"><a href="mailto:${email}">${email}</a></mj-text>
        </mj-column>
        <mj-column>
          <mj-text font-size="18px">Phone:</mj-text> <br />
          <mj-text font-size="22px"><a href="tel:${phone}">${phone}</a></mj-text>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-text font-size="18px">Message:</mj-text> <br />
        <mj-text font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">
          ${message}
        </mj-text>
      </mj-section>
    </mj-body>
  </mjml>
`
  )

export default async function contact(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { email, name, phone, message } = req.body

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

  const emailContent = await buildEmail({ email, name, phone, message })

  try {
    await sendgrid.send({
      to: 'jlawrencedev@gmail.com',
      from: 'j@japhex.net',
      subject: 'Busby enquiry',
      text: `${name} (${phone}) sent an enquiry: ${message}`,
      html: emailContent.html,
    })
  } catch (error) {
    console.error(error)
    console.error(error.response?.body)
    return res.status(error.statusCode || 500).json({ error: error.response?.body })
  }

  return res.status(200).json({ message: 'Email sent!' })
}
