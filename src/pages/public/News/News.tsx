import { useLocation, useParams } from 'react-router-dom';

import { BlogLayout7, Breadcrumb } from '@/components';
import { PATHS } from '@/router';
import { capitalize, dummyBlog, getArrayFrom0To } from '@/utils';

import { TNewsProps } from './News.types';

import './News.scss';

const News: React.FC<TNewsProps> = () => {
  const { category } = useParams();
  const {
    state: { pageName }
  } = useLocation();

  const homeCrumb = { label: 'Trang chủ', url: PATHS.PAGE.HOME() };
  const pageCrumb = { label: capitalize(pageName.toLowerCase()), url: PATHS.PAGE.NEWS({ category: category || '' }) };

  return (
    <div className='News'>
      <Breadcrumb className='News__breadcrumb container' crumbs={[homeCrumb, pageCrumb]} />
      <BlogLayout7
        className='News__blogs'
        title={{ label: 'Title', url: 'https://google.com' }}
        blogs={getArrayFrom0To(10).map(() => dummyBlog)}
      />
    </div>
  );
};

export default News;
