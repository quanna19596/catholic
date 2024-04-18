import { BlogWrapper } from '@/components';
import { getBlogsRendered, handleClickAnchor } from '@/utils';

import { TBlogLayout6Props } from './BlogLayout6.types';

import './BlogLayout6.scss';

const BlogLayout6: React.FC<TBlogLayout6Props> = ({ title, blogs }) => {
  const blogsRendered = getBlogsRendered({ max: 6, blogs });

  return (
    <div className='BlogLayout6'>
      <div className='BlogLayout6__container container'>
        <a onClick={handleClickAnchor} href={title.url} className='BlogLayout6__title'>
          {title.label}
        </a>
        <div className='BlogLayout6__divider' />
        <div className='BlogLayout6__wrapper'>
          {blogsRendered.map((blog, blogIdx) => (
            <BlogWrapper key={blogIdx} className='BlogLayout6__blog' blog={blog}>
              {(blog) => (
                <>
                  <a onClick={handleClickAnchor} href={blog.url}>
                    <img src={blog.thumbnail} alt={blog.title} className='BlogLayout6__blog-thumbnail' />
                  </a>
                  <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout6__blog-title'>
                    {blog.title}
                  </a>
                  <p className='BlogLayout6__blog-summary'>{blog.summary?.includes('...') ? blog.summary : `${blog.summary}...`}</p>
                </>
              )}
            </BlogWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout6;
