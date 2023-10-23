export interface Content {
  id: string;
  abstract?: string;
  createdAt: Date;
  title: string;
  body: string;
}
export interface Post extends Content {
  tags: Array<string>;
}
export interface Proejct extends Content {
  stacks: Array<string>;
}

export interface Docs extends Content {
  category: Array<string>;
}
