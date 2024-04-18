import { BlogWrapper } from '@/components';
import { getBlogsRendered, handleClickAnchor } from '@/utils';

import { TBlogLayout2Props } from './BlogLayout2.types';

import './BlogLayout2.scss';

const BlogLayout2: React.FC<TBlogLayout2Props> = ({ title, blogs }) => {
  const blogsRendered = getBlogsRendered({ max: 4, blogs });

  return (
    <div className='BlogLayout2'>
      <div className='BlogLayout2__container container'>
        <a onClick={handleClickAnchor} href={title.url} className='BlogLayout2__title'>
          {title.label}
        </a>
        <div className='BlogLayout2__divider' />
        <div className='BlogLayout2__wrapper'>
          {blogsRendered.map((blogRendered, blogIdx) => (
            <BlogWrapper key={blogIdx} className='BlogLayout2__blog' blog={blogRendered}>
              {({ title, thumbnail, url }) => (
                <>
                  <a onClick={handleClickAnchor} href={url}>
                    <img src={thumbnail} alt={title} className='BlogLayout2__blog-thumbnail' />
                  </a>
                  <a onClick={handleClickAnchor} className='BlogLayout2__blog-title' href={url}>
                    {title}
                  </a>
                </>
              )}
            </BlogWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout2;
