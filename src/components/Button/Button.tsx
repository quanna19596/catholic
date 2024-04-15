import classNames from 'classnames';

import { TButtonProps } from './Button.types';

import './Button.scss';

const Button: React.FC<TButtonProps> = ({ label, onClick, className }) => {
  return (
    <button className={classNames('Button', className)} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
