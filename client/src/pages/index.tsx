import React from "react";
import { useProducts, useStores } from "../hooks";

export default function Home() {
  const { data: stores } = useStores();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">Stores</h1>
      {stores?.map((store) => {
        return <Store store={store} key={store} />;
      })}
    </div>
  );
}

function Store({ store }: { store: string }) {
  const { data: products } = useProducts(store);

  return (
    <div>
      <h2>{store}</h2>
      {products?.map((product) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
}
