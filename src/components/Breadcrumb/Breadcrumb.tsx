import classNames from 'classnames';

import { TBreadcrumbProps } from './Breadcrumb.types';

import './Breadcrumb.scss';

const Breadcrumb: React.FC<TBreadcrumbProps> = ({ crumbs }) => {
  return (
    <div className='Breadcrumb'>
      {crumbs.map((crumb) => {
        const isCurrentPage = window.location.pathname.includes(crumb.url);
        return (
          <div key={`${crumb.label}-${crumb.url}`} className={classNames('Breadcrumb__crumb', { current: isCurrentPage })}>
            <a href={crumb.url}>{crumb.label}</a>
            {!isCurrentPage && <span className='Breadcrumb__crumb-arrow'>»</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
