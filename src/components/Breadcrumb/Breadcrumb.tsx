import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { TBreadcrumbProps } from './Breadcrumb.types';

import './Breadcrumb.scss';

const Breadcrumb: React.FC<TBreadcrumbProps> = ({ className, crumbs }) => {
  console.log(crumbs);
  const navigate = useNavigate();

  const goToPage = (url: string, isCurrentPage: boolean): void => {
    if (!isCurrentPage) navigate(url);
  };

  return (
    <div className={classNames('Breadcrumb', className)}>
      {crumbs.map((crumb) => {
        const currentPathName = window.location.pathname;
        const isCurrentPage = currentPathName === crumb.url;
        return (
          <div key={`${crumb.label}-${crumb.url}`}>
            <span
              className={classNames('Breadcrumb__crumb-label', { current: isCurrentPage })}
              onClick={(): void => goToPage(crumb.url, isCurrentPage)}
            >
              {crumb.label}
            </span>
            {!isCurrentPage && <span className='Breadcrumb__crumb-arrow'>»</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
