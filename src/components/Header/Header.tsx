import { useState } from 'react';
import classNames from 'classnames';

import { EDevice } from '@/enums';
import { useAppSelector } from '@/redux';

import { menuItems } from './Header.data';
import { THeaderProps } from './Header.types';

import './Header.scss';

const Header: React.FC<THeaderProps> = () => {
  const isMobile = useAppSelector((state) => state.ui.device.type === EDevice.MOBILE);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleClickBurgerMenu = (): void => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className='Header'>
      <div className='Header__images container-fluid'>
        <div className='Header__images-logo'>
          <img src='https://via.placeholder.com/305x104' alt='Logo' />
        </div>
        <div className='Header__images-banner'>
          <img src='https://via.placeholder.com/728x90' alt='Logo' />
        </div>
      </div>
      <div className='Header__menu'>
        <div className='Header__menu-logo'>
          <img src='https://via.placeholder.com/305x104' alt='Logo' />
        </div>
        <div className='Header__burgerMenu' onClick={handleClickBurgerMenu} />
        <div className={classNames('Header__menu-container container-fluid', { show: !isMobile || isOpenMenu })}>
          <ul className='Header__menu-wrapper'>
            {menuItems.map((menuItem) => (
              <li className='Header__menuItem' key={`${menuItem.label} - ${menuItem.url}`}>
                <a className='Header__menuLink' href={menuItem.url}>
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
