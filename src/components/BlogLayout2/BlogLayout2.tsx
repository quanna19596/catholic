import { TBlogLayout2Props } from './BlogLayout2.types';

import './BlogLayout2.scss';

const BlogLayout2: React.FC<TBlogLayout2Props> = ({ title, blogs }) => {
  return (
    <div className='BlogLayout2'>
      <div className='BlogLayout2__container container'>
        <a href={title.url} className='BlogLayout2__title'>
          {title.label}
        </a>
        <div className='BlogLayout2__divider' />
        <div className='BlogLayout2__wrapper'>
          {blogs.map((blog) => (
            <div key={`${blog.title}-${blog.url}`} className='BlogLayout2__blog'>
              <a href={blog.url}>
                <img src={blog.thumbnail} alt={blog.title} className='BlogLayout2__blog-thumbnail' />
              </a>
              <a className='BlogLayout2__blog-title' href={blog.url}>
                {blog.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout2;
