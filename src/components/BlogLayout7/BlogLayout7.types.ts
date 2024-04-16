import { TBlog } from '@/types';

export type TBlogLayout7Props = {
  title: {
    label: string;
    url: string;
  };
  blogs: TBlog[];
  className?: string;
};
