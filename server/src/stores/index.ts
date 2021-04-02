import { Store, StoreConfig } from "../types";

export const Stores: Record<Store, StoreConfig> = {
  [Store.EXAMPLE]: {
    interval: 1000,
    fetchAllProducts: () => Promise.resolve([]),
    calculateDiff: async () => {
      if (Math.random() > 0.8) {
        return [{ id: "", variants: [], name: "Yeezy Bred" }];
      } else {
        return [];
      }
    },
  },
};
