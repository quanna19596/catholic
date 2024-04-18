export type TBlog = {
  title: string;
  content?: string;
  url?: string;
  summary?: string;
  thumbnail?: string;
};

export type TBlogLayout = {
  title: {
    label: string;
    url: string;
  };
  blogs: (TBlog | undefined)[];
  className?: string;
};
