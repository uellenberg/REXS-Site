import Head from "next/head";

const SEO = (props: {url: string, title: string, description?: string, keywords?: string, author?: string}) => {
    const {url, title, description = "REXS is a language for writing regular expressions. It can make long and complicated regular expressions easier to write, and can even decompile existing regular expressions to make them easier to read or modify.", keywords = "rexs, regular, expression, expressions, regular expression, regular expressions, lang, language, compile, compiler, decompile, decompiler, write, easy, fast", author = "Jonah Uellenberg"} = props;

    return (
        <>
            <Head>
                <title>{title}</title>

                <meta property="og:type" content="website" />

                <meta property="description" content={description} />
                <meta property="og:description" content={description} />

                <meta property="og:title" content={title} />

                <meta property="og:url" content={url} />
                <link href={url} rel="canonical" />

                <meta name="author" content={author} />

                <meta name="keywords" content={keywords} />
            </Head>
        </>
    );
}

export default SEO;