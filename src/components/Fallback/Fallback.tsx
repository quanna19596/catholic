import { ProgressBar } from 'primereact/progressbar';

import { TFallbackProps } from './Fallback.types';

import './Fallback.scss';

const Fallback: React.FC<TFallbackProps> = () => {
  return (
    <div className='Fallback flex justify-content-center align-items-center h-screen'>
      <ProgressBar mode='indeterminate' className='w-full' style={{ height: '4px' }} />
    </div>
  );
};

export default Fallback;
