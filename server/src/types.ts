export enum Store {
  Amazon,
}

export interface Variant {
  id: string;
  name: string;
  size: string | "o/s";
  price: number | string;
}

export interface GenericProduct {
  id: string;
  name: string;
  variants: Partial<Variant>[];
}
