import { BlogLayout1, BlogLayout2, BlogLayout3, BlogLayout4, BlogLayout5, BlogLayout6 } from '@/components';
import { dummyBlog, getArrayFrom0To } from '@/utils';

import { THomeProps } from './Home.types';

import './Home.scss';

const Home: React.FC<THomeProps> = () => {
  return (
    <div className='Home'>
      <BlogLayout1 title={{ label: 'Title', url: 'https://google.com' }} blogs={getArrayFrom0To(5).map(() => dummyBlog)} />
      <BlogLayout2 title={{ label: 'Title', url: 'https://google.com' }} blogs={getArrayFrom0To(4).map(() => dummyBlog)} />
      <BlogLayout3 title={{ label: 'Title', url: 'https://google.com' }} blogs={getArrayFrom0To(8).map(() => dummyBlog)} />
      <BlogLayout4 title={{ label: 'Title', url: 'https://google.com' }} blogs={getArrayFrom0To(7).map(() => dummyBlog)} />
      <BlogLayout2 title={{ label: 'Title', url: 'https://google.com' }} blogs={getArrayFrom0To(4).map(() => dummyBlog)} />
      <BlogLayout3 title={{ label: 'Title', url: 'https://google.com' }} blogs={getArrayFrom0To(8).map(() => dummyBlog)} />
      <BlogLayout4 title={{ label: 'Title', url: 'https://google.com' }} blogs={getArrayFrom0To(7).map(() => dummyBlog)} />
      <BlogLayout5 title={{ label: 'Title', url: 'https://google.com' }} blogs={getArrayFrom0To(14).map(() => dummyBlog)} />
      <BlogLayout6 title={{ label: 'Title', url: 'https://google.com' }} blogs={getArrayFrom0To(6).map(() => dummyBlog)} />
    </div>
  );
};

export default Home;
