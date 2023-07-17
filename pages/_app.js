import React from 'react';
import { useEffect } from "react";

import Layout from '../src/components/layout/Layout';

import "../styles/globals.css";

export default function App({ Component, pageProps }) {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div className="ca-building-supply">
            <title>CA Building Supply</title>
            <meta name="description" content="Generated by create next app"></meta>
            <link rel="icon" href="/favicon.ico"></link>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}