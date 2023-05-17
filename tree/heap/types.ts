import { Node } from "./node";

export type Course = "PRE_ORDER" | "IN_ORDER" | "POST_ORDER";

export interface ITree {
  insert: (key: number, data: string) => void;
  remove: (key: number) => void;
  min: () => Node | null;
  max: () => Node | null;
  inorder: () => void;
  preorder: () => void;
  postorder: () => void;
}
