import { BlogWrapper } from '@/components';
import { getBlogsRendered, handleClickAnchor, useResize } from '@/utils';

import { TBlogLayout1Props } from './BlogLayout1.types';

import './BlogLayout1.scss';

const BlogLayout1: React.FC<TBlogLayout1Props> = ({ blogs }) => {
  const { isMobileView } = useResize();
  const blogsRendered = getBlogsRendered({ max: 5, blogs });

  return (
    <div className='BlogLayout1'>
      <div className='BlogLayout1__container container'>
        <div className='BlogLayout1__leftColumn'>
          <BlogWrapper blog={blogsRendered[0]} className='BlogLayout1__blog1'>
            {({ title, url, thumbnail }) => (
              <div className='BlogLayout1__blog1-wrapper'>
                <a onClick={handleClickAnchor} className='BlogLayout1__blog1-thumbnail' href={url}>
                  <img src={thumbnail} alt={title} />
                </a>
                <a onClick={handleClickAnchor} className='BlogLayout1__blog1-title' href={url}>
                  {title}
                </a>
              </div>
            )}
          </BlogWrapper>
          <div className='BlogLayout1__divider' />
          <BlogWrapper blog={blogsRendered[1]} className='BlogLayout1__blog1'>
            {({ title, url, thumbnail }) => (
              <div className='BlogLayout1__blog1-wrapper'>
                <a onClick={handleClickAnchor} className='BlogLayout1__blog1-thumbnail' href={url}>
                  <img src={thumbnail} alt={title} />
                </a>
                <a onClick={handleClickAnchor} className='BlogLayout1__blog1-title' href={url}>
                  {title}
                </a>
              </div>
            )}
          </BlogWrapper>
          {isMobileView && <div className='BlogLayout1__divider' />}
        </div>
        <div className='BlogLayout1__middleColumn'>
          <BlogWrapper blog={blogsRendered[2]} className='BlogLayout1__blog2'>
            {({ title, url, thumbnail, summary }) => (
              <div className='BlogLayout1__blog2-wrapper'>
                <a onClick={handleClickAnchor} className='BlogLayout1__blog2-thumbnail' href={url}>
                  <img src={thumbnail} alt={title} />
                </a>
                <div className='BlogLayout1__blog2-content'>
                  <a onClick={handleClickAnchor} className='BlogLayout1__blog2-title' href={url}>
                    {title}
                  </a>
                  <h3 className='BlogLayout1__blog2-summary'>{summary}</h3>
                </div>
              </div>
            )}
          </BlogWrapper>
        </div>
        <div className='BlogLayout1__rightColumn'>
          <BlogWrapper blog={blogsRendered[3]} className='BlogLayout1__blog1'>
            {({ title, url, thumbnail }) => (
              <div className='BlogLayout1__blog1-wrapper'>
                <a onClick={handleClickAnchor} className='BlogLayout1__blog1-thumbnail' href={url}>
                  <img src={thumbnail} alt={title} />
                </a>
                <a onClick={handleClickAnchor} className='BlogLayout1__blog1-title' href={url}>
                  {title}
                </a>
              </div>
            )}
          </BlogWrapper>
          <div className='BlogLayout1__divider' />
          <BlogWrapper blog={blogsRendered[4]} className='BlogLayout1__blog1'>
            {({ title, url, thumbnail }) => (
              <div className='BlogLayout1__blog1-wrapper'>
                <a onClick={handleClickAnchor} className='BlogLayout1__blog1-thumbnail' href={url}>
                  <img src={thumbnail} alt={title} />
                </a>
                <a onClick={handleClickAnchor} className='BlogLayout1__blog1-title' href={url}>
                  {title}
                </a>
              </div>
            )}
          </BlogWrapper>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout1;
