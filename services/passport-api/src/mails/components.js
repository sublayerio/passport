module.exports = {
    layout: (props, children) => `
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100% !important;">
    <tr>
        <td align="center">
            <table style="border:1px solid transparent;border-radius:5px;margin:0px 0;" width="600" border="0"
                   cellspacing="0" cellpadding="40">
                <tr>
                    <td align="center">
                        <div style="font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Lato&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif;text-align:left;width:465px;">
                            ${children}
                        </div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
    `,
    header: ({ url }) => `
<table width="100%" border="0" cellspacing="0" cellpadding="0"
       style="width:100% !important;">
    <tr>
        <td align="center">
            <div>
                <img
                    src="${url}/cosmos.png"
                    width="135" 
                    height="83" 
                    alt="Cosmos"
                    style="margin-bottom:40px"
                />
            </div>
        </td>
    </tr>
</table>
`,
    title: ({ title }) => `
    <table width="100%" border="0" cellspacing="0" cellpadding="0"
       style="width:100% !important;">
    <tr>
        <td align="left">
            <h1 style="font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Lato&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif;font-size:32px;font-weight:700;margin:20px 0;padding:0;">
                ${title}
            </h1>
        </td>
    </tr>
</table>
    `,
    paragraph: (props, children) => `
    <p style="font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Lato&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif;font-size:14px;line-height:28px;font-weight:300;">${children}</p>
    `,
    button: ({ url, title }) => `
    <table width="100%" border="0" cellspacing="0" cellpadding="0"
       style="width:100% !important;">
    <tr>
        <td>
            <div>
            <a href="${url}" style="text-decoration:none;display:inline-block;background-color:${process.env.COMPANY_PRIMARY_COLOR};border-radius:7px;width:auto;padding-top:10px;padding-bottom:10px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-align:center;word-break:keep-all;line-height:inherit;color:#fff!important;border:1px solid ${process.env.COMPANY_PRIMARY_COLOR}" target="_blank">             
                <span style="padding-left:30px;padding-right:30px;font-size:18px;display:inline-block;line-height:inherit;color:#fff!important">
                    <span style="font-size:16px;line-height:2;color:#fff!important"><span style="font-size:18px;line-height:36px;color:#fff!important"><strong style="line-height:inherit">${title}</strong></span></span>
                </span>
            </a>
            </div>
        </td>
    </tr>
</table>
    `,
    image: ({ src, width, height, companyName }) => `
    <table width="100%" border="0" cellspacing="0" cellpadding="0"
       style="width:100% !important;">
    <tr>
        <td>
            <div>
                <img
                    src="${src}"
                    width="${width}" 
                    height="${height}"
                    alt="${companyName}"
                />
            </div>
        </td>
    </tr>
</table>
    `,
    footer: () => `
    `
}