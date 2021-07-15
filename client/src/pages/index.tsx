import React from 'react';
import {Store as EStore} from '../../../shared/types';
import {useProducts, useStores} from '../hooks';

export default function Home() {
	const {data: stores} = useStores();

	return (
		<div className="max-w-5xl mx-auto">
			<h1 className="text-3xl font-bold">Stores</h1>
			{stores?.map(store => (
				<Store key={store} store={store} />
			))}
		</div>
	);
}

function Store({store}: {store: EStore}) {
	const {data: products} = useProducts(store);

	return (
		<div>
			<h2>{store}</h2>
			{products?.map(product => (
				<div key={product.id}>{product.name}</div>
			))}
		</div>
	);
}
