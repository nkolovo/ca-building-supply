import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        console.log("Data: ", data);
        if (!data.Name || !data.Email) {
            // Sends a HTTP bad request error code
            return res.status(400).json({ data: 'Name or Email not found' })
        }
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "Quote",
            text: "This is a test string",
            html: "<h1>Test Title</h1><p>Some body text</p>",
        });

        return res.status(200).json({ success: true });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: error.message });
    }
}

export default handler;