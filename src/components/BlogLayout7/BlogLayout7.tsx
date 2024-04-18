import classNames from 'classnames';

import { BlogWrapper } from '@/components';
import { getBlogsRendered, handleClickAnchor } from '@/utils';

import { TBlogLayout7Props } from './BlogLayout7.types';

import './BlogLayout7.scss';

const BlogLayout7: React.FC<TBlogLayout7Props> = ({ title, blogs, className }) => {
  const blogsRendered = getBlogsRendered({ max: 10, blogs });

  return (
    <div className={classNames('BlogLayout7', className)}>
      <div className='BlogLayout7__container container'>
        <a onClick={handleClickAnchor} href={title.url} className='BlogLayout7__title'>
          {title.label}
        </a>
        <div className='BlogLayout7__divider' />
        <div className='BlogLayout7__wrapper'>
          {blogsRendered.map((blog, blogIdx) => (
            <BlogWrapper key={blogIdx} className={classNames('BlogLayout7__blog', { divider: blogIdx < blogs.length - 1 })} blog={blog}>
              {(blog) => (
                <>
                  <a onClick={handleClickAnchor} href={blog.url}>
                    <img src={blog.thumbnail} alt={blog.title} className='BlogLayout7__blog-thumbnail' />
                  </a>
                  <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout7__blog-title'>
                    {blog.title}
                  </a>
                  <p className='BlogLayout7__blog-summary'>{blog.summary?.includes('...') ? blog.summary : `${blog.summary}...`}</p>
                </>
              )}
            </BlogWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout7;
