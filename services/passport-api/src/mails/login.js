const moment = require('moment')
const components = require('./components')

module.exports = ({ companyName, brandImageUrl, email, url, code, token }) => components.layout(null, `
${components.image({
    src: brandImageUrl,
    title: companyName,
    width: 80,
    height: 80
})}
${components.title({
    title: process.env.COMPANY_NAME
})}

${components.paragraph(null, `Klik op de knop om in te loggen bij <strong>${companyName}</strong>.<br />Deze knop verloopt in 10 minuten.`)}

<div style="margin: 30px 0;">
${components.button({
    url: `${url}/activate?token=${token}`,
    title: `Inloggen bij ${companyName}`
})}
</div>

${components.paragraph(null, `Door dit verzoek te bevestigen, log je veilig in namens <strong><a style="color: ${process.env.COMPANY_PRIMARY_COLOR}!important;">${email}</a></strong>.`)}
${components.paragraph(null, `Als je dit verzoek niet hebt ingediend op <strong>${moment().format('D MMMM YYYY')} om ${moment().format('HH:mm')}</strong>, maak je geen zorgen, het is veilig om deze e-mail te negeren.`)}
`)