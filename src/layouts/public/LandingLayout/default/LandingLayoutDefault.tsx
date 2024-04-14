import { Home } from '@/pages';

import { TLandingLayoutDefaultProps } from './LandingLayoutDefault.types';

import './LandingLayoutDefault.scss';

const LandingLayoutDefault: React.FC<TLandingLayoutDefaultProps> = () => {
  return (
    <div className='LandingLayoutDefault'>
      <Home />
    </div>
  );
};

export default LandingLayoutDefault;
