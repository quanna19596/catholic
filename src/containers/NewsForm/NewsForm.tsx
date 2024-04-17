import { UploadImage } from '@/containers';

import { TNewsFormProps } from './NewsForm.types';

import './NewsForm.scss';

const NewsForm: React.FC<TNewsFormProps> = () => {
  return (
    <div className='NewsForm'>
      <UploadImage />
    </div>
  );
};

export default NewsForm;
