import { Node } from "./node";

export interface ITree {
  insert: (key: number, data: string) => void;
  remove: (key: number) => void;
  min: () => Node | null;
  max: () => Node | null;
  preorder: () => void;
}
