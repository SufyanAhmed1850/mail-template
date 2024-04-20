const htmlCode = `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sufyan Ahmed Newsletter</title>
    <style type="text/css">
        .ExternalClass {
            width: 100%;
        }


        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        .main-table {
            width: 100%;
            background-color: #1f1f1f;
            border-radius: 12px;
        }

        .header-parent {
            background-color: #303030;
            border-radius: 12px 12px 0 0;
            padding: 28px 0 26px 0;
        }

        .header {
            max-width: 1080px;
            width: 90%;
            margin: 0 auto;
        }

        .logo {
            font-size: 32px;
            font-weight: bold;
            color: #ffffff;
            text-decoration: none;
        }

        .logo a {
            text-decoration: none;
        }

        .logo .sufyan {
            color: #e6e6e6;
        }

        .logo .ahmed {
            color: #a58ae3;
        }

        .social-links {
            text-align: right;
            margin-top: 12px;
        }

        .social-links img {
            width: 25px;
            height: auto;
            margin: 0 10px;
        }

        .content {
            max-width: 600px;
            margin: 0 auto;
            padding: 32px 0 12px 0;
            text-align: center;
        }

        .heading {
            color: #e6e6e6;
            font-size: 24px;
            margin-bottom: 10px;
        }

        .para {
            color: #b3b6be;
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 20px;
        }

        @media screen and (max-width: 775px) {

            .header-parent {
                padding: 28px 0 22px 0;
            }

            .logo,
            .social-links {
                display: block;
                margin: auto;
                text-align: center;
            }

            .social-links img {
                margin-top: 10px;
                margin-bottom: 10px;
            }
        }
    </style>
</head>

<body>
    <table role="presentation" class="main-table">
        <tr>
            <td class="header-parent">
                <table role="presentation" class="header">
                    <tr>
                        <td class="logo">
                            <a href="https://sufyanahmed.vercel.app/" target="_blank">
                                <span class="sufyan">sufyan</span><span class="ahmed">ahmed</span>
                            </a>
                        </td>
                        <td class="social-links">
                        <a href="https://github.com/SufyanAhmed1850" target="_blank"><img src="cid:github" alt="GitHub"></a>
                        <a href="https://www.linkedin.com/in/sufyanahmed1850" target="_blank"><img src="cid:linkedin" alt="LinkedIn"></a>
                        <a href="https://wa.me/923327319831" target="_blank"><img src="cid:whatsapp" alt="WhatsApp"></a>
                        <a href="https://twitter.com/devsufyan" target="_blank"><img src="cid:twitter" alt="Twitter"></a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="content">
                <h2 class="heading">Welcome to Our Newsletter!</h2>
                <p class="para">Thank you for subscribing to our newsletter. Stay tuned for exciting updates and
                    offers!</p>
            </td>
        </tr>
    </table>
</body>
</html>`;

export default htmlCode;