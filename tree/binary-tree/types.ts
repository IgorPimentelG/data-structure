export interface Tree {
  insert: (data: number) => void;
  remove: (data: number) => void;
  inorder: () => void;
  preorder: () => void;
  postorder: () => void;
  getHeight: () => number;
}

export type Print = "PRE_ORDER" | "IN_ORDER" | "POST_ORDER";