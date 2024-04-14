import { Outlet } from 'react-router-dom';

import { Header } from '@/components';

import { TLandingLayoutProps } from './LandingLayout.types';

import './LandingLayout.scss';

const LandingLayout: React.FC<TLandingLayoutProps> = () => {
  return (
    <div className='LandingLayout'>
      <Header />
      <Outlet />
    </div>
  );
};

export default LandingLayout;
