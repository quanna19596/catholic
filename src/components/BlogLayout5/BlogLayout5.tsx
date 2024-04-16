import { Button } from '@/components';
import { handleClickAnchor } from '@/utils';

import { TBlogLayout5Props } from './BlogLayout5.types';

import './BlogLayout5.scss';

const BlogLayout5: React.FC<TBlogLayout5Props> = ({ title, blogs }) => {
  const blog1 = blogs[0];
  const blogsWithSmallThumbnail = [blogs[1], blogs[2], blogs[3], blogs[4]];
  const blogsWithoutThumbnail = [blogs[5], blogs[6], blogs[7], blogs[8], blogs[9], blogs[10], blogs[11], blogs[12], blogs[13]];

  return (
    <div className='BlogLayout5'>
      <div className='BlogLayout5__container container'>
        <a onClick={handleClickAnchor} href={title.url} className='BlogLayout5__title'>
          {title.label}
        </a>
        <div className='BlogLayout5__divider' />
        <div className='BlogLayout5__wrapper'>
          <div className='BlogLayout5__leftColumn'>
            <div className='BlogLayout5__blog1'>
              <a onClick={handleClickAnchor} href={blog1.url} className='BlogLayout5__blog1-thumbnailLink'>
                <img src={blog1.thumbnail} alt={blog1.title} className='BlogLayout5__blog1-thumbnail' />
              </a>
              <div className='BlogLayout5__blog1-content'>
                <a onClick={handleClickAnchor} href={blog1.url} className='BlogLayout5__blog1-title'>
                  {blog1.title}
                </a>
                <p className='BlogLayout5__blog1-summary'>{blog1.summary?.includes('...') ? blog1.summary : `${blog1.summary}...`}</p>
                <Button
                  className='BlogLayout5__blog1-seeMoreBtn'
                  label='Xem chi tiết'
                  onClick={() => {
                    window.open(blog1.url);
                  }}
                />
              </div>
            </div>
            <div className='BlogLayout5__blogsWithSmallThumbnail'>
              {blogsWithSmallThumbnail.map((blog) => (
                <div key={`${blog.title}-${blog.url}`} className='BlogLayout5__blog2'>
                  <a onClick={handleClickAnchor} href={blog1.url}>
                    <img src={blog1.thumbnail} alt={blog1.title} className='BlogLayout5__blog2-thumbnail' />
                  </a>
                  <a onClick={handleClickAnchor} href={blog1.url} className='BlogLayout5__blog2-title'>
                    {blog1.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className='BlogLayout5__rightColumn'>
            {blogsWithoutThumbnail.map((blog, blogIdx) => (
              <div key={`${blog.title}-${blog.url}`} className='BlogLayout5__blog3'>
                <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout5__blog3-title'>
                  {blog.title}
                </a>
                {blogIdx < blogsWithoutThumbnail.length - 1 && <div className='BlogLayout5__blog3-divider' />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout5;
