import { handleClickAnchor } from '@/utils';

import { TBlogLayout6Props } from './BlogLayout6.types';

import './BlogLayout6.scss';

const BlogLayout6: React.FC<TBlogLayout6Props> = ({ title, blogs }) => {
  return (
    <div className='BlogLayout6'>
      <div className='BlogLayout6__container container'>
        <a onClick={handleClickAnchor} href={title.url} className='BlogLayout6__title'>
          {title.label}
        </a>
        <div className='BlogLayout6__divider' />
        <div className='BlogLayout6__wrapper'>
          {blogs.map((blog) => (
            <div key={`${blog.title}-${blog.url}`} className='BlogLayout6__blog'>
              <a onClick={handleClickAnchor} href={blog.url}>
                <img src={blog.thumbnail} alt={blog.title} className='BlogLayout6__blog-thumbnail' />
              </a>
              <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout6__blog-title'>
                {blog.title}
              </a>
              <p className='BlogLayout6__blog-summary'>{blog.summary?.includes('...') ? blog.summary : `${blog.summary}...`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout6;
