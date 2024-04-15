import { BlogLayout1, BlogLayout2, BlogLayout3, BlogLayout4, BlogLayout5, BlogLayout6 } from '@/components';
import { getArrayFrom0To } from '@/utils';

import { THomeProps } from './Home.types';

import './Home.scss';

const Home: React.FC<THomeProps> = () => {
  return (
    <div className='Home'>
      <BlogLayout1
        blogs={getArrayFrom0To(5).map(() => ({
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet',
          thumbnail: 'https://via.placeholder.com/210x150',
          url: 'https://google.com',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet Lorem ipsum dolor sit amet'
        }))}
      />
      <BlogLayout2
        title={{ label: 'Title', url: 'https://google.com' }}
        blogs={getArrayFrom0To(4).map(() => ({
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet',
          thumbnail: 'https://via.placeholder.com/210x150',
          url: 'https://google.com',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet Lorem ipsum dolor sit amet'
        }))}
      />
      <BlogLayout3
        title={{ label: 'Title', url: 'https://google.com' }}
        blogs={getArrayFrom0To(8).map(() => ({
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet',
          thumbnail: 'https://via.placeholder.com/210x150',
          url: 'https://google.com',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet Lorem ipsum dolor sit amet'
        }))}
      />
      <BlogLayout4
        title={{ label: 'Title', url: 'https://google.com' }}
        blogs={getArrayFrom0To(7).map(() => ({
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          thumbnail: 'https://via.placeholder.com/210x150',
          url: 'https://google.com',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }))}
      />
      <BlogLayout2
        title={{ label: 'Title', url: 'https://google.com' }}
        blogs={getArrayFrom0To(4).map(() => ({
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet',
          thumbnail: 'https://via.placeholder.com/210x150',
          url: 'https://google.com',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet Lorem ipsum dolor sit amet'
        }))}
      />
      <BlogLayout3
        title={{ label: 'Title', url: 'https://google.com' }}
        blogs={getArrayFrom0To(8).map(() => ({
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet',
          thumbnail: 'https://via.placeholder.com/210x150',
          url: 'https://google.com',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet Lorem ipsum dolor sit amet'
        }))}
      />
      <BlogLayout4
        title={{ label: 'Title', url: 'https://google.com' }}
        blogs={getArrayFrom0To(7).map(() => ({
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          thumbnail: 'https://via.placeholder.com/210x150',
          url: 'https://google.com',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }))}
      />
      <BlogLayout5
        title={{ label: 'Title', url: 'https://google.com' }}
        blogs={getArrayFrom0To(14).map(() => ({
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          thumbnail: 'https://via.placeholder.com/210x150',
          url: 'https://google.com',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }))}
      />
      <BlogLayout6
        title={{ label: 'Title', url: 'https://google.com' }}
        blogs={getArrayFrom0To(6).map(() => ({
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          thumbnail: 'https://via.placeholder.com/210x150',
          url: 'https://google.com',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }))}
      />
    </div>
  );
};

export default Home;
