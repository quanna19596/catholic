import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Fallback } from '@/components';
import { PATHS } from '@/router';

import { TDashboardLayoutDefaultProps } from './DashboardLayoutDefault.types';

import './DashboardLayoutDefault.scss';

const DashboardLayoutDefault: React.FC<TDashboardLayoutDefaultProps> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${PATHS.LAYOUT.DASHBOARD()}${PATHS.PAGE.PAGE_LAYOUT_MANAGEMENT()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='DashboardLayoutDefault'>
      <Fallback />
    </div>
  );
};

export default DashboardLayoutDefault;
