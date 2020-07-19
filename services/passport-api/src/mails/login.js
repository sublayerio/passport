const components = require('./components')

module.exports = ({ companyName, brandImageUrl, email, url, code, token }) => components.layout(null, `
${components.image({
    src: brandImageUrl,
    width: 120,
    height: 120
})}
${components.title({
    title: `Bevestig je e-mailadres om in te loggen bij ${companyName}`
})}
${components.paragraph(null, `Hi <b>${email}</b>,<br/>We hebben een inlog-verzoek ontvangen met de volgende code:`)}
<br/>

<table width="100%" border="0" cellspacing="0" cellpadding="0"
       style="width:100% !important;">
    <tr>
        <td align="center" bgcolor="#f6f6f6" valign="middle" height="40"
            style="font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Lato&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif;font-size:18px;line-height:40px;font-weight:bold;color:#000;">
            ${code}
        </td>
    </tr>
</table>

<br/>

${components.paragraph(null, `Klik op de knop hier beneden om te bevestigen dat jij het bent:`)}

<br/>

${components.button({
    url: `${url}/activate?token=${token}`,
    title: 'Bevestig'
})}

<br/>
<p style="color:#000;font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Lato&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif;font-size:12px;line-height:24px;">
Als je geen inlog-verzoek hebt gedaan en deze e-mail hebt ontvangen, negeer dan deze e-mail. Als je twijfelt aan de veiligheid van je account, neem dan contact met ons op door op deze e-mail te antwoorden.</p>
${components.image({
    src: 'https://user-images.githubusercontent.com/44947294/70694540-2d728580-1cc0-11ea-976d-03d5514c93be.png',
    width: 80,
    height: 80
})}
`)