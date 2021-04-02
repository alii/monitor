import useSWR from "swr";
import { GenericProduct } from "../../shared/types";

export function useStores() {
  return useSWR<string[]>("/stores");
}

export function useProducts(store: string) {
  return useSWR<GenericProduct[]>(`/products/${store}`);
}
