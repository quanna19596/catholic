import { useEffect } from 'react';

import Router from '@/router';

import { uiSlice } from './redux/slices/ui';
import { useAppDispatch } from './redux';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updateSize = (): void => {
      dispatch(uiSlice.actions.setDevice(window.innerWidth));
    };

    window.addEventListener('resize', updateSize);
    return (): void => window.removeEventListener('resize', updateSize);
  }, [dispatch]);

  return <Router />;
};

export default App;
