import classNames from 'classnames';
import { Card } from 'primereact/card';

import { BlogLayout1, BlogLayout2, BlogLayout3, BlogLayout4, BlogLayout5, BlogLayout6, BlogLayout7 } from '@/components';
import { dummyBlog, getArrayFrom0To } from '@/utils';

import { TNewsLayoutManagementProps } from './NewsLayoutManagement.types';

import './NewsLayoutManagement.scss';

const NewsLayoutManagement: React.FC<TNewsLayoutManagementProps> = () => {
  const blogLayoutComponents = [
    {
      LayoutComponent: BlogLayout1,
      numberOfBlogs: 5
    },
    {
      LayoutComponent: BlogLayout2,
      numberOfBlogs: 4
    },
    {
      LayoutComponent: BlogLayout3,
      numberOfBlogs: 8
    },
    {
      LayoutComponent: BlogLayout4,
      numberOfBlogs: 7
    },
    {
      LayoutComponent: BlogLayout5,
      numberOfBlogs: 14
    },
    {
      LayoutComponent: BlogLayout6,
      numberOfBlogs: 6
    },
    {
      LayoutComponent: BlogLayout7,
      numberOfBlogs: 10
    }
  ];
  return (
    <div className='NewsLayoutManagement'>
      {blogLayoutComponents.map(({ LayoutComponent, numberOfBlogs }, layoutIdx) => (
        <Card
          className={classNames({ 'mb-8': layoutIdx !== blogLayoutComponents.length - 1 })}
          title={`Bố cục loại ${layoutIdx + 1}`}
          key={layoutIdx}
        >
          <LayoutComponent title={{ label: 'Tiêu đề', url: '/' }} blogs={getArrayFrom0To(numberOfBlogs).map(() => dummyBlog)} />
        </Card>
      ))}
    </div>
  );
};

export default NewsLayoutManagement;
