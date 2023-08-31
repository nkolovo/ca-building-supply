import { mailOptions, transporter } from "@/config/nodemailer";

var count = 0;

const handler = async (req, res) => {
    count++;
    console.log("Count: " + count);
    if (req.method === "POST") {
        const data = req.body;
        console.log("Data: ", data);
        if (!data.Name || !data.Email || !data.Phone) {
            // Sends a HTTP bad request error code
            return res.status(400).json({ data: 'Name, Email, or Phone not found' })
        }
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "Online Lead " + count,
            text: "This is a test string",
            html: "<p>Name: " + req.body.Name + "</p>" + 
            "<p>Email: " + req.body.Email + "</p>" +
            "<p>Company Name: " + req.body.Company + "</p>" +
            "<p>Address: " + req.body.Address + "</p>" +
            "<p>City: " + req.body.City + "</p>" +
            "<p>Province: " + req.body.Province + "</p>" +
            "<p>Postal Code: " + req.body.PostalCode + "</p>" +
            "<p>Work Phone: " + req.body.Phone + "</p>" +
            "<p>Message: " + req.body.Message + "</p>",
        });

        return res.status(200).json({ success: true });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: error.message });
    }
}

export default handler;