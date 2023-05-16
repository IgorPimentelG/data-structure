import { Node } from "./node";
import { Page } from "./page";

export type SearchNearestResult = {
  nearestPage: Page | null;
  nearestNode: Node | null;
}

export interface Tree {
  insert: (key: number, data: string) => void;
  searchNearest: (key: number) => SearchNearestResult;
  print: () => void;
}

export interface IPage {
  add: (nodes: Node[]) => void;
}
