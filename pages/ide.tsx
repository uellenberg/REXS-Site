import Head from "next/head";
import Header from "../components/header";
import {Box, Button, chakra, Divider, useColorModeValue, HStack, Grid, Link, GridItem} from "@chakra-ui/react";
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

                <Grid
                    h="100%"
                    templateRows="repeat(8, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                    ml="2.5%"
                >
                    <GridItem rowSpan={8} colSpan={2}>
                        <Editor value="test"/>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={3}>
                        <chakra.div
                            mt="3.5%"
                            background={"#263238"}
                            borderRadius="25px"
                            width="90%"
                            height="90%"
                        >
                            //TODO: center text
                            <chakra.input
                                resize="none"
                                outline="none"
                                background={"#0000"}
                                width="100%"
                                mt="2.6%"
                                pl="5%"
                                pr="5%"
                            />
                        </chakra.div>
                    </GridItem>
                    <GridItem rowSpan={7} colSpan={3}>
                        <chakra.div
                            mt="3.5%"
                            background={"#263238"}
                            borderRadius="25px"
                            width="90%"
                            height="76.75%"
                        >
                            //TODO: center text
                            <chakra.input
                                resize="none"
                                outline="none"
                                background={"#0000"}
                                width="100%"
                                mt="2.6%"
                                pl="5%"
                                pr="5%"
                            />
                        </chakra.div>
                    </GridItem>
                </Grid>
            </chakra.div>
        </>
    );
}

export default IDEPage;