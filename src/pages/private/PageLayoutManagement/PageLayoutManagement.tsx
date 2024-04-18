import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Card } from 'primereact/card';

import { headerMenuItems } from '@/components/Header/Header.data';
import { PATHS } from '@/router';

import { TPageLayoutManagementProps } from './PageLayoutManagement.types';

import './PageLayoutManagement.scss';

const PageLayoutManagement: React.FC<TPageLayoutManagementProps> = () => {
  const navigate = useNavigate();

  const goToEditPage = (pageUrl: string): void => {
    navigate(`${PATHS.LAYOUT.DASHBOARD()}${PATHS.PAGE.EDIT_PAGE_LAYOUT({ page: pageUrl || 'trang-chu' })}`);
  };

  return (
    <div className='PageLayoutManagement'>
      {headerMenuItems.map((menuItem, menuItemIdx) => (
        <Card
          className={classNames('cursor-pointer', { 'mb-4': menuItemIdx < headerMenuItems.length - 1 }, 'PageLayoutManagement__menuItem')}
          key={menuItem.label}
          title={menuItem.label}
          onClick={(): void => goToEditPage(menuItem.url)}
        >
          <span className='PageLayoutManagement__menuItem-detail'>8 bố cục, 24 bài viết</span>
        </Card>
      ))}
    </div>
  );
};

export default PageLayoutManagement;
