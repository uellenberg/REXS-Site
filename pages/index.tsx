import Head from "next/head";
import Header from "../components/header";
import {Box, Button, chakra, Divider, useColorModeValue, HStack, Grid, Link} from "@chakra-ui/react";
import Prism from "prismjs";
import React from "react";
import NextLink from "next/link";
import SEO from "../components/seo";

const IndexPage = () => {
    const bg = useColorModeValue("gray.700", "gray.900");

    return (
        <>
            <SEO title="REXS" url="https://rexs.js.org"/>

            <Header/>

            <Box
                mt={{base: "10%", md: "5%"}}
                id="masthead"
            >
                <chakra.div id="masthead-container">
                    <chakra.header
                        fontFamily="open-sans"
                        fontSize={{base: "35", md: "50", lg: "60"}}
                        pl={{base: "15", md: "50", lg: "60"}}
                        pr={{base: "15", md: "50", lg: "60"}}
                        display="block"
                    >
                        Read and Write regular expressions faster.
                    </chakra.header>
                    <chakra.p
                        fontFamily="abhaya-libre"
                        fontSize={{base: "20", lg: "30"}}
                        pl={{base: "30", lg: "80"}}
                        pr={{base: "30", lg: "80"}}
                        pb={{base: "5"}}
                        display="block"
                        color="gray.400"
                    >
                        REXS is a language for writing regular expressions. It can make long and complicated regular expressions easier to write, and can even decompile existing regular expressions to make them easier to read or modify.
                    </chakra.p>
                    <Link href="/ide">
                        <Button colorScheme="blue" display="block" fontSize={{base: "20"}}>Get Started</Button>
                    </Link>
                </chakra.div>
            </Box>
        </>
    );
}

export default IndexPage;