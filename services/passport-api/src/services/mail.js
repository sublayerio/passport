const axios = require('axios')

module.exports = ctx => {

    const mailjet = axios.create({
        baseURL: process.env.MAILJET_URL,
        auth: {
            username: process.env.MAILJET_USERNAME,
            password: process.env.MAILJET_PASSWORD
        }
    })

    return {
        send: async ({ to, subject, html }) => {
    
            try {
    
                await mailjet.request({
                    method: 'post',
                    data: {
                        "Messages": [
                            {
                                "From": {
                                    "Email": process.env.MAILJET_SENDER_EMAIL,
                                    "Name": process.env.MAILJET_SENDER_NAME
                                },
                                "To": [
                                    {
                                        "Email": to,
                                        "Name": to
                                    }
                                ],
                                "Subject": subject,
                                "TextPart": "text part",
                                "HTMLPart": html
                            }
                        ]
                    }
                })
            } catch (e) {
    
                console.log(e)
                //
            }
        }
    }
}