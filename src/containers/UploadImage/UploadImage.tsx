import { useRef } from 'react';
import { FileUpload } from 'primereact/fileupload';

import { TUploadImageProps } from './UploadImage.types';

import './UploadImage.scss';

const UploadImage: React.FC<TUploadImageProps> = () => {
  const fileUploadRef = useRef(null);

  return (
    <div className='UploadImage'>
      <div className='gap-2'>
        <FileUpload
          ref={fileUploadRef}
          name='demo[]'
          url={'/api/upload'}
          accept='image/*'
          maxFileSize={1000000}
          emptyTemplate={<p className='m-0'>Kéo và thả ảnh vào đây</p>}
          chooseLabel='Chọn ảnh'
          cancelLabel='Xoá ảnh'
        />
      </div>
    </div>
  );
};

export default UploadImage;
