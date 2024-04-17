import { NewsForm } from '@/containers';

import { TCreateNewsProps } from './CreateNews.types';

import './CreateNews.scss';

const CreateNews: React.FC<TCreateNewsProps> = () => {
  return (
    <div className='CreateNews'>
      <NewsForm />
    </div>
  );
};

export default CreateNews;
