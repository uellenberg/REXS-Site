import Head from "next/head";
import Header from "../components/header";
import {Box, Button, chakra, Divider, useColorModeValue, HStack, Grid, Link} from "@chakra-ui/react";
import Prism from "prismjs";
import React, {useEffect} from "react";
import NextLink from "next/link";
import SEO from "../components/seo";
import dynamic from "next/dynamic";

const Editor = dynamic(import('../components/editor'), {
    ssr: false
});

const IDEPage = () => {
    const bg = useColorModeValue("gray.700", "gray.900");

    return (
        <>
            <SEO title="REXS IDE" url="https://rexs.js.org/ide"/>

            <chakra.div id="editor-container">
                <Header/>

                <Editor value="test"/>
            </chakra.div>
        </>
    );
}

export default IDEPage;