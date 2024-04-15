import classNames from 'classnames';

import { TBlogLayout4Props } from './BlogLayout4.types';

import './BlogLayout4.scss';

const BlogLayout4: React.FC<TBlogLayout4Props> = ({ title, blogs }) => {
  const blog1 = blogs[0];
  const middleBlogs = [blogs[1], blogs[2], blogs[3]];
  const rightBlogs = [blogs[4], blogs[5], blogs[6]];

  return (
    <div className='BlogLayout4'>
      <div className='BlogLayout4__container container'>
        <a href={title.url} className='BlogLayout4__title'>
          {title.label}
        </a>
        <div className='BlogLayout4__divider' />
        <div className='BlogLayout4__wrapper'>
          <div className='BlogLayout4__leftColumn'>
            <div className='BlogLayout4__blog1'>
              <a href={blog1.url}>
                <img src={blog1.thumbnail} alt={blog1.title} className='BlogLayout4__blog1-thumbnail' />
              </a>
              <a href={blog1.url} className='BlogLayout4__blog1-title'>
                {blog1.title}
              </a>
              <p className='BlogLayout4__blog1-summary'>{blog1.summary?.includes('...') ? blog1.summary : `${blog1.summary}...`}</p>
            </div>
          </div>
          <div className='BlogLayout4__middleColumn'>
            {middleBlogs.map((blog, blogIdx) => (
              <div
                key={`${blog.title}-${blog.url}`}
                className={classNames('BlogLayout4__blog2', { divider: blogIdx < middleBlogs.length - 1 })}
              >
                <a href={blog.url} className='BlogLayout4__blog2-title'>
                  {blog.title}
                </a>
                <p className='BlogLayout4__blog2-summary'>{blog.summary?.includes('...') ? blog.summary : `${blog.summary}...`}</p>
              </div>
            ))}
          </div>
          <div className='BlogLayout4__rightColumn'>
            {rightBlogs.map((blog, blogIdx) => (
              <div
                key={`${blog.title}-${blog.url}`}
                className={classNames('BlogLayout4__blog3', { divider: blogIdx < middleBlogs.length - 1 })}
              >
                <a href={blog.url}>
                  <img src={blog1.thumbnail} alt={blog1.title} className='BlogLayout4__blog3-thumbnail' />
                </a>
                <a href={blog.url} className='BlogLayout4__blog3-title'>
                  {blog1.title}
                </a>
                <p className='BlogLayout4__blog3-summary'>{blog1.summary?.includes('...') ? blog1.summary : `${blog1.summary}...`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout4;
