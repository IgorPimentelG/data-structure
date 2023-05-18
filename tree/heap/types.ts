import { Node } from "./node";

export type SearchResult = {
  node: Node | null;
  index?: number;
}

export interface ITree {
  insert: (key: number, data: string) => void;
  remove: (key: number) => void;
  search: (key: number, index: number) => SearchResult;
  min: () => Node | null;
  max: () => Node | null;
  preorder: () => void;
}
