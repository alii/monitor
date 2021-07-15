import React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import 'tailwindcss/tailwind.css';
import {SWRConfig} from 'swr';

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>Restock Monitor</title>
			</Head>
			<SWRConfig
				value={{
					async fetcher(url: string) {
						return fetch(`http://localhost:8080${url}`).then(async res => res.json());
					},
				}}
			>
				<Component {...pageProps} />
			</SWRConfig>
		</>
	);
}
