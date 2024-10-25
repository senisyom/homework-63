export interface INewPost {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface INewPostApi {
  [key: string]: {
    title: string;
    description: string;
    createdAt: string;
  };
}
