import classNames from 'classnames';

import { dummyBlog, objectIsEmpty } from '@/utils';

import { TBlogWrapperProps } from './BlogWrapper.types';

import './BlogWrapper.scss';

const BlogWrapper: React.FC<TBlogWrapperProps> = ({ blog, className, children }) => {
  const noBlog = !blog || objectIsEmpty(blog);
  const blogRendered = noBlog ? dummyBlog : blog;

  return <div className={classNames('BlogWrapper', className, { hide: noBlog })}>{children(blogRendered)}</div>;
};

export default BlogWrapper;
