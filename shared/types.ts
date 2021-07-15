export enum Store {
	EXAMPLE = 'example',
}

export const ONE_SIZE = 'o/s';

export interface Variant {
	id: string;
	name: string;
	size: string;
	price: number | string;
}

export interface GenericProduct {
	id: string;
	name: string;
	variants: Array<Partial<Variant>>;
}

export type FetchAllProducts = () => Promise<GenericProduct[]>;

export type StoreConfig = {
	fetchAllProducts: FetchAllProducts;
	interval: number;
	calculateDiff(
		oldProducts: GenericProduct[],
		newProducts: GenericProduct[],
	): Promise<GenericProduct[]>;
};
