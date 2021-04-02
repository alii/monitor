import { Store, StoreConfig } from "../../../shared/types";

export const Stores: Record<Store, StoreConfig> = {
  [Store.EXAMPLE]: {
    interval: 1000,
    fetchAllProducts: async () => {
      if (Math.random() > 0.8) {
        return [{ id: "", variants: [], name: "Yeezy Bred" }];
      } else {
        return [];
      }
    },
    calculateDiff: async (oldProducts, newProducts) => {
      return newProducts;
    },
  },
};
