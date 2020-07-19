module.exports = {
    layout: (props, children) => `
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width:100% !important;">
    <tr>
        <td align="center">
            <table style="border:1px solid #eaeaea;border-radius:5px;margin:40px 0;" width="600" border="0"
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
            <h1 style="font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Lato&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif;font-size:32px;font-weight:700;margin:30px 0;padding:0;">
                ${title}
            </h1>
        </td>
    </tr>
</table>
    `,
    paragraph: (props, children) => `
    <p style="font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Lato&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif;font-size:16px;line-height:32px;font-weight:300;">${children}</p>
    `,
    button: ({ url, title }) => `
    <table width="100%" border="0" cellspacing="0" cellpadding="0"
       style="width:100% !important;">
    <tr>
        <td align="center">
            <div>
                <!--[if mso]>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                             xmlns:w="urn:schemas-microsoft-com:office:word"
                             href="${url}"
                             style="height:50px;width:200px;v-text-anchor:middle;"
                             arcsize="10%" stroke="f" fillcolor="#0022fd">
                    <w:anchorlock/>
                    <center>
                <![endif]-->
                <a href="${url}"
                   target="_blank"
                   style="background-color:#0022fd;color:#ffffff;display:block;font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Lato&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif;font-size:16px;font-weight:500;line-height:50px;text-align:center;text-decoration:none;-webkit-text-size-adjust:none;">${title}</a>
                <!--[if mso]>
                </center>
                </v:roundrect>
                <![endif]-->
            </div>
        </td>
    </tr>
</table>
<br/>
<p style="font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Lato&quot;, &quot;Oxygen&quot;, &quot;Ubuntu&quot;, &quot;Cantarell&quot;, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif;font-size:14px;line-height:24px;">
    <a href="${url}"
       target="_blank" 
       style="color:#0022fd;text-decoration:none;">
       Of kopieer en plak deze URL in je browser: <br/>
        ${url}
    </a>
</p>
    `,
    image: ({ src, width, height }) => `
    <table width="100%" border="0" cellspacing="0" cellpadding="0"
       style="width:100% !important;">
    <tr>
        <td align="center">
            <div>
                <img
                    src=${src}
                    width=${width} 
                    height=${height}
                    alt="Sublayer"
                />
            </div>
        </td>
    </tr>
</table>
    `,
    footer: () => `
    `
}