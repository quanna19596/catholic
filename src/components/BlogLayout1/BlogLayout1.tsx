import { TBlog } from '@/types';
import { handleClickAnchor, useResize } from '@/utils';

import { TBlogLayout1Props } from './BlogLayout1.types';

import './BlogLayout1.scss';

const Blog1: React.FC<TBlog> = ({ title, url, thumbnail }) => {
  return (
    <div className='BlogLayout1__blog1'>
      <div className='BlogLayout1__blog1-wrapper'>
        <a onClick={handleClickAnchor} className='BlogLayout1__blog1-thumbnail' href={url}>
          <img src={thumbnail} alt={title} />
        </a>
        <a onClick={handleClickAnchor} className='BlogLayout1__blog1-title' href={url}>
          {title}
        </a>
      </div>
    </div>
  );
};

const Blog2: React.FC<TBlog> = ({ title, url, summary, thumbnail }) => {
  return (
    <div className='BlogLayout1__blog2'>
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
    </div>
  );
};

const BlogLayout1: React.FC<TBlogLayout1Props> = ({ blogs }) => {
  const { isMobileView } = useResize();

  return (
    <div className='BlogLayout1'>
      <div className='BlogLayout1__container container'>
        <div className='BlogLayout1__leftColumn'>
          <Blog1 {...blogs[0]} />
          <div className='BlogLayout1__divider' />
          <Blog1 {...blogs[1]} />
          {isMobileView && <div className='BlogLayout1__divider' />}
        </div>
        <div className='BlogLayout1__middleColumn'>
          <Blog2 {...blogs[2]} />
        </div>
        <div className='BlogLayout1__rightColumn'>
          <Blog1 {...blogs[3]} />
          <div className='BlogLayout1__divider' />
          <Blog1 {...blogs[4]} />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout1;
