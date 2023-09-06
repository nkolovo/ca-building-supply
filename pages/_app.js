import React from 'react';
import { useEffect } from "react";

import Layout from '../src/components/layout/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import "../styles/globals.css";

export default function App({ Component, pageProps }) {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div className="ca-building-supply">
            <title>CA Building Supply</title>
            <meta name="description" content="Created by Nikolas Kolovos"></meta>
            <link rel="icon" href="/favicon.ico"></link>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}