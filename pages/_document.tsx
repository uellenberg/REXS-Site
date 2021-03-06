import Document, { Html, Head, Main, NextScript } from "next/document";

class Doc extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"/>
                    <script src="https://cdn.jsdelivr.net/npm/rexs@1.0.3/dist/rexs.min.js" integrity="sha256-8XIqRX+GL9KhFO+934ikeCmO3TAm+TG5jkEsdewjaco=" crossOrigin="anonymous"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default Doc;