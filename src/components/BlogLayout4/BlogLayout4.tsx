import classNames from 'classnames';

import { BlogWrapper } from '@/components';
import { getBlogsRendered, handleClickAnchor } from '@/utils';

import { TBlogLayout4Props } from './BlogLayout4.types';

import './BlogLayout4.scss';

const BlogLayout4: React.FC<TBlogLayout4Props> = ({ title, blogs }) => {
  const blogsRendered = getBlogsRendered({ max: 7, blogs });
  const blog1 = blogsRendered[0];
  const middleBlogs = [blogsRendered[1], blogsRendered[2], blogsRendered[3]];
  const rightBlogs = [blogsRendered[4], blogsRendered[5], blogsRendered[6]];

  return (
    <div className='BlogLayout4'>
      <div className='BlogLayout4__container container'>
        <a onClick={handleClickAnchor} href={title.url} className='BlogLayout4__title'>
          {title.label}
        </a>
        <div className='BlogLayout4__divider' />
        <div className='BlogLayout4__wrapper'>
          <div className='BlogLayout4__leftColumn'>
            <BlogWrapper className='BlogLayout4__blog1' blog={blog1}>
              {(blog) => (
                <>
                  <a onClick={handleClickAnchor} href={blog.url}>
                    <img src={blog.thumbnail} alt={blog.title} className='BlogLayout4__blog1-thumbnail' />
                  </a>
                  <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout4__blog1-title'>
                    {blog.title}
                  </a>
                  <p className='BlogLayout4__blog1-summary'>{blog.summary?.includes('...') ? blog.summary : `${blog.summary}...`}</p>
                </>
              )}
            </BlogWrapper>
          </div>
          <div className='BlogLayout4__middleColumn'>
            {middleBlogs.map((blog, blogIdx) => (
              <BlogWrapper
                blog={blog}
                key={blogIdx}
                className={classNames('BlogLayout4__blog2', { divider: blogIdx < middleBlogs.length - 1 })}
              >
                {(blog) => (
                  <>
                    <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout4__blog2-title'>
                      {blog.title}
                    </a>
                    <p className='BlogLayout4__blog2-summary'>{blog.summary?.includes('...') ? blog.summary : `${blog.summary}...`}</p>
                  </>
                )}
              </BlogWrapper>
            ))}
          </div>
          <div className='BlogLayout4__rightColumn'>
            {rightBlogs.map((blog, blogIdx) => (
              <BlogWrapper
                key={blogIdx}
                className={classNames('BlogLayout4__blog3', { divider: blogIdx < middleBlogs.length - 1 })}
                blog={blog}
              >
                {(blog) => (
                  <>
                    <a onClick={handleClickAnchor} href={blog.url}>
                      <img src={blog.thumbnail} alt={blog.title} className='BlogLayout4__blog3-thumbnail' />
                    </a>
                    <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout4__blog3-title'>
                      {blog.title}
                    </a>
                    <p className='BlogLayout4__blog3-summary'>{blog.summary?.includes('...') ? blog.summary : `${blog.summary}...`}</p>
                  </>
                )}
              </BlogWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout4;
