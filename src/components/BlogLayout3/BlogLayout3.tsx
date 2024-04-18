import { BlogWrapper } from '@/components';
import { getBlogsRendered, handleClickAnchor } from '@/utils';

import { TBlogLayout3Props } from './BlogLayout3.types';

import './BlogLayout3.scss';

const BlogLayout3: React.FC<TBlogLayout3Props> = ({ title, blogs }) => {
  const blogsRendered = getBlogsRendered({ max: 8, blogs });
  const blogsWithoutThumbnail = blogsRendered.filter((_, blogIdx) => blogIdx > 1);

  return (
    <div className='BlogLayout3'>
      <div className='BlogLayout3__container container'>
        <a onClick={handleClickAnchor} href={title.url} className='BlogLayout3__title'>
          {title.label}
        </a>
        <div className='BlogLayout3__divider' />
        <div className='BlogLayout3__wrapper'>
          <div className='BlogLayout3__leftColumn'>
            <BlogWrapper className='BlogLayout3__blog1' blog={blogsRendered[0]}>
              {(blog) => (
                <>
                  <a onClick={handleClickAnchor} href={blog.url}>
                    <img src={blog.thumbnail} alt={blog.title} className='BlogLayout3__blog1-thumbnail' />
                  </a>
                  <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout3__blog1-title'>
                    {blog.title}
                  </a>
                  <p className='BlogLayout3__blog1-summary'>{blog.summary?.includes('...') ? blog.summary : `${blog.summary}...`}</p>
                </>
              )}
            </BlogWrapper>
          </div>
          <div className='BlogLayout3__middleColumn'>
            <BlogWrapper className='BlogLayout3__blog1' blog={blogsRendered[1]}>
              {(blog) => (
                <>
                  <a onClick={handleClickAnchor} href={blog.url}>
                    <img src={blog.thumbnail} alt={blog.title} className='BlogLayout3__blog1-thumbnail' />
                  </a>
                  <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout3__blog1-title'>
                    {blog.title}
                  </a>
                  <p className='BlogLayout3__blog1-summary'>{blog.summary?.includes('...') ? blog.summary : `${blog.summary}...`}</p>
                </>
              )}
            </BlogWrapper>
          </div>
          <div className='BlogLayout3__rightColumn'>
            {blogsWithoutThumbnail.map((blog, blogIdx) => (
              <BlogWrapper key={blogIdx} className='BlogLayout3__blog2' blog={blog}>
                {(blog) => (
                  <>
                    <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout3__blog2-title'>
                      {blog.title}
                    </a>
                    {blogIdx < blogsWithoutThumbnail.length - 1 && <div className='BlogLayout3__blog2-divider' />}
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

export default BlogLayout3;
