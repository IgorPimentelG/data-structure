import { Node } from "./node";

export type PrintMethod = "PRE_ORDER" | "IN_ORDER" | "POST_ORDER";

export interface ITree {
  insert: (data: number) => void;
  remove: () => void;
  search: (data: number) => Node | null;
  print: (type: PrintMethod) => void;
  max: () => Node | null;
  min: () => Node | null;
}