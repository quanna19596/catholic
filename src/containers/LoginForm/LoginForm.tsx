import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import { storeAccessToken } from '@/utils';

import { TLoginFormProps } from './LoginForm.types';

import './LoginForm.scss';

const LoginForm: React.FC<TLoginFormProps> = () => {
  const submitForm = (): void => {
    storeAccessToken('hello');
    location.reload();
  };

  return (
    <div className='LoginForm'>
      <div className='surface-card p-4 shadow-2 border-round w-full lg:w-6'>
        <div className='text-center mb-5'>
          <div className='text-900 text-3xl font-medium mb-3'>Welcome Back</div>
        </div>
        <div>
          <label htmlFor='email' className='block text-900 font-medium mb-2'>
            Email
          </label>
          <InputText id='email' type='text' placeholder='Email address' className='w-full mb-3' />

          <label htmlFor='password' className='block text-900 font-medium mb-2'>
            Password
          </label>
          <InputText type='password' placeholder='Password' className='w-full mb-3' />

          <Button label='Sign In' icon='pi pi-user' className='w-full' onClick={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
