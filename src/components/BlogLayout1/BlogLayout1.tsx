import { TBlog } from '@/types';

import { TBlogLayout1Props } from './BlogLayout1.types';

import './BlogLayout1.scss';

const Blog1: React.FC<TBlog> = ({ title, url, thumbnail }) => {
  return (
    <div className='BlogLayout1__blog1'>
      <a className='BlogLayout1__blog1-linkWrapper' href={url}>
        <div className='BlogLayout1__blog1-thumbnail'>
          <img src={thumbnail} alt={title} />
        </div>
        <h3 className='BlogLayout1__blog1-title'>{title}</h3>
      </a>
    </div>
  );
};

const Blog2: React.FC<TBlog> = ({ title, url, thumbnail }) => {
  return (
    <div className='BlogLayout1__blog2'>
      <a className='BlogLayout1__blog2-linkWrapper' href={url}>
        <div className='BlogLayout1__blog2-thumbnail'>
          <img src={thumbnail} alt={title} />
        </div>
        <h3 className='BlogLayout1__blog2-title'>{title}</h3>
      </a>
    </div>
  );
};

const BlogLayout1: React.FC<TBlogLayout1Props> = ({ blogs }) => {
  return (
    <div className='BlogLayout1'>
      <div className='BlogLayout1__container container'>
        <div className='BlogLayout1__leftColumn'>
          <Blog1 {...blogs[0]} />
          <div className='BlogLayout1__divider' />
          <Blog1 {...blogs[1]} />
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
