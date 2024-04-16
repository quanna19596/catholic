import { Outlet } from 'react-router-dom';

import { Footer, Header, Icon } from '@/components';
import { EIconName } from '@/components/Icon';

import { TLandingLayoutProps } from './LandingLayout.types';

import './LandingLayout.scss';

const LandingLayout: React.FC<TLandingLayoutProps> = () => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='LandingLayout'>
      <div className='LandingLayout__onTopArrow' onClick={scrollToTop}>
        <Icon name={EIconName.UP_ARROW} size={20} />
      </div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingLayout;
