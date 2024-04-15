import { TBlog } from '@/types';

export type TBlogLayout2Props = {
  title: {
    label: string;
    url: string;
  };
  blogs: TBlog[];
};
