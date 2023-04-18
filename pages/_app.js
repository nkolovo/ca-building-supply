import React from 'react';

import Layout from '../src/components/layout/Layout';

export default function App({ Component, pageProps }) {
    return (
        <div className="ca-building-supply">
            <head>
                <title>CA Building Supply</title>
                <meta name="description" content="Generated by create next app"></meta>
                <link rel="icon" href="/favicon.ico"></link>
            </head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}