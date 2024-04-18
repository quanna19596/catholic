import { BlogWrapper, Button } from '@/components';
import { getBlogsRendered, handleClickAnchor } from '@/utils';

import { TBlogLayout5Props } from './BlogLayout5.types';

import './BlogLayout5.scss';

const BlogLayout5: React.FC<TBlogLayout5Props> = ({ title, blogs }) => {
  const blogsRendered = getBlogsRendered({ max: 14, blogs });
  const blog1 = blogsRendered[0];
  const blogsWithSmallThumbnail = [blogsRendered[1], blogsRendered[2], blogsRendered[3], blogsRendered[4]];
  const blogsWithoutThumbnail = [
    blogsRendered[5],
    blogsRendered[6],
    blogsRendered[7],
    blogsRendered[8],
    blogsRendered[9],
    blogsRendered[10],
    blogsRendered[11],
    blogsRendered[12],
    blogsRendered[13]
  ];

  return (
    <div className='BlogLayout5'>
      <div className='BlogLayout5__container container'>
        <a onClick={handleClickAnchor} href={title.url} className='BlogLayout5__title'>
          {title.label}
        </a>
        <div className='BlogLayout5__divider' />
        <div className='BlogLayout5__wrapper'>
          <div className='BlogLayout5__leftColumn'>
            <BlogWrapper className='BlogLayout5__blog1' blog={blog1}>
              {(blog) => (
                <>
                  <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout5__blog1-thumbnailLink'>
                    <img src={blog.thumbnail} alt={blog.title} className='BlogLayout5__blog1-thumbnail' />
                  </a>
                  <div className='BlogLayout5__blog1-content'>
                    <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout5__blog1-title'>
                      {blog.title}
                    </a>
                    <p className='BlogLayout5__blog1-summary'>{blog.summary?.includes('...') ? blog.summary : `${blog.summary}...`}</p>
                    <Button
                      className='BlogLayout5__blog1-seeMoreBtn'
                      label='Xem chi tiết'
                      onClick={() => {
                        window.open(blog.url);
                      }}
                    />
                  </div>
                </>
              )}
            </BlogWrapper>
            <div className='BlogLayout5__blogsWithSmallThumbnail'>
              {blogsWithSmallThumbnail.map((blog, blogIdx) => (
                <BlogWrapper key={blogIdx} className='BlogLayout5__blog2' blog={blog}>
                  {(blog) => (
                    <>
                      <a onClick={handleClickAnchor} href={blog.url}>
                        <img src={blog.thumbnail} alt={blog.title} className='BlogLayout5__blog2-thumbnail' />
                      </a>
                      <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout5__blog2-title'>
                        {blog.title}
                      </a>
                    </>
                  )}
                </BlogWrapper>
              ))}
            </div>
          </div>
          <div className='BlogLayout5__rightColumn'>
            {blogsWithoutThumbnail.map((blog, blogIdx) => (
              <BlogWrapper key={blogIdx} className='BlogLayout5__blog3' blog={blog}>
                {(blog) => (
                  <>
                    <a onClick={handleClickAnchor} href={blog.url} className='BlogLayout5__blog3-title'>
                      {blog.title}
                    </a>
                    {blogIdx < blogsWithoutThumbnail.length - 1 && <div className='BlogLayout5__blog3-divider' />}
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

export default BlogLayout5;
