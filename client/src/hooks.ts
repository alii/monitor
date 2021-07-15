import useSWR from 'swr';
import {GenericProduct, Store} from '../../shared/types';

export function useStores() {
	return useSWR<Store[]>('/stores');
}

export function useProducts(store: Store) {
	return useSWR<GenericProduct[]>(`/products/${store}`);
}
