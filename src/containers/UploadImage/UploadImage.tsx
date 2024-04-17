import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';

import { TUploadImageProps } from './UploadImage.types';

import './UploadImage.scss';

const UploadImage: React.FC<TUploadImageProps> = () => {
  return (
    <div className='UploadImage'>
      <div className='mb-3 gap-2'>
        <FileUpload
          name='demo[]'
          url={'/api/upload'}
          accept='image/*'
          maxFileSize={1000000}
          emptyTemplate={<p className='m-0'>Kéo và thả ảnh vào đây</p>}
        />
        <Message severity='error' text='Username is required' />
      </div>

      <div className='flex flex-wrap align-items-center mb-3 gap-2'>
        <label htmlFor='username' className='p-sr-only'>
          Username
        </label>
        <InputText id='username' placeholder='Username' className='p-invalid mr-2' />
        <Message severity='error' text='Username is required' />
      </div>

      <div className='flex flex-wrap align-items-center mb-3 gap-2'>
        <label htmlFor='username' className='p-sr-only'>
          Username
        </label>
        <InputText id='username' placeholder='Username' className='p-invalid mr-2' />
        <Message severity='error' text='Username is required' />
      </div>

      <div className='flex flex-wrap align-items-center mb-3 gap-2'>
        <label htmlFor='username' className='p-sr-only'>
          Username
        </label>
        <InputText id='username' placeholder='Username' className='p-invalid mr-2' />
        <Message severity='error' text='Username is required' />
      </div>
    </div>
  );
};

export default UploadImage;
