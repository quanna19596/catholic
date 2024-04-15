import { TBlogLayout3Props } from './BlogLayout3.types';

import './BlogLayout3.scss';

const BlogLayout3: React.FC<TBlogLayout3Props> = ({ title, blogs }) => {
  const blog1 = blogs[0];
  const blog2 = blogs[1];
  const blogsWithoutThumbnail = [blogs[2], blogs[3], blogs[4], blogs[5], blogs[6], blogs[7]];
  return (
    <div className='BlogLayout3'>
      <div className='BlogLayout3__container container'>
        <a href={title.url} className='BlogLayout3__title'>
          {title.label}
        </a>
        <div className='BlogLayout3__divider' />
        <div className='BlogLayout3__wrapper'>
          <div className='BlogLayout3__leftColumn'>
            <div className='BlogLayout3__blog1'>
              <a href={blog1.url}>
                <img src={blog1.thumbnail} alt={blog1.title} className='BlogLayout3__blog1-thumbnail' />
              </a>
              <a href={blog1.url} className='BlogLayout3__blog1-title'>
                {blog1.title}
              </a>
              <p className='BlogLayout3__blog1-summary'>{blog1.summary?.includes('...') ? blog1.summary : `${blog1.summary}...`}</p>
            </div>
          </div>
          <div className='BlogLayout3__middleColumn'>
            <div className='BlogLayout3__blog1'>
              <a href={blog2.url}>
                <img src={blog2.thumbnail} alt={blog2.title} className='BlogLayout3__blog1-thumbnail' />
              </a>
              <a href={blog2.url} className='BlogLayout3__blog1-title'>
                {blog2.title}
              </a>
              <p className='BlogLayout3__blog1-summary'>{blog1.summary?.includes('...') ? blog1.summary : `${blog1.summary}...`}</p>
            </div>
          </div>
          <div className='BlogLayout3__rightColumn'>
            {blogsWithoutThumbnail.map((blog, blogIdx) => (
              <div key={`${blog.title}-${blog.url}`} className='BlogLayout3__blog2'>
                <a href={blog.url} className='BlogLayout3__blog2-title'>
                  {blog.title}
                </a>
                {blogIdx < blogsWithoutThumbnail.length - 1 && <div className='BlogLayout3__blog2-divider' />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout3;
