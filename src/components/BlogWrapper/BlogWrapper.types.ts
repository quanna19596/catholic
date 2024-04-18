import { TBlog } from '@/types';

export type TBlogWrapperProps = {
  blog?: TBlog;
  children(options: TBlog): React.ReactNode;
  className?: string;
};
