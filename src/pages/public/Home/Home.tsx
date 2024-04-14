import { BlogLayout1 } from '@/components';

import { THomeProps } from './Home.types';

import './Home.scss';

const Home: React.FC<THomeProps> = () => {
  return (
    <div className='Home'>
      <BlogLayout1
        blogs={[
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet',
            thumbnail: 'https://via.placeholder.com/210x150'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet',
            thumbnail: 'https://via.placeholder.com/210x150'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet',
            thumbnail: 'https://via.placeholder.com/210x150'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet',
            thumbnail: 'https://via.placeholder.com/210x150'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet',
            thumbnail: 'https://via.placeholder.com/210x150'
          }
        ]}
      />
    </div>
  );
};

export default Home;
