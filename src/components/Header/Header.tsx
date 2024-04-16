import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { EDevice } from '@/enums';
import { useAppSelector } from '@/redux';
import { PATHS } from '@/router';
import { useResize } from '@/utils';

import { menuItems } from './Header.data';
import { THeaderProps } from './Header.types';

import './Header.scss';

const Header: React.FC<THeaderProps> = () => {
  const navigate = useNavigate();
  const { isMobileView } = useResize();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleClickBurgerMenu = (): void => {
    setIsOpenMenu(!isOpenMenu);
  };

  const goToNewsPage = ({ label, url }: { label: string; url: string }): void => {
    url ? navigate(PATHS.PAGE.NEWS({ category: url }), { state: { pageName: label } }) : navigate(PATHS.PAGE.HOME());
  };

  const goToHomePage = (): void => {
    navigate(PATHS.PAGE.HOME());
  };

  return (
    <div className='Header'>
      <div className='Header__images container-fluid'>
        <div className='Header__images-logo' onClick={goToHomePage}>
          <img src='https://via.placeholder.com/305x104' alt='Logo' />
        </div>
        <div className='Header__images-banner'>
          <img src='https://via.placeholder.com/728x90' alt='Logo' />
        </div>
      </div>
      <div className='Header__menu'>
        <div className='Header__menu-logo' onClick={goToHomePage}>
          <img src='https://via.placeholder.com/305x104' alt='Logo' />
        </div>
        <div className='Header__burgerMenu' onClick={handleClickBurgerMenu}>
          <div className='Header__burgerMenu-main' />
        </div>
        <div className={classNames('Header__menu-container container-fluid', { show: !isMobileView || isOpenMenu })}>
          <ul className='Header__menu-wrapper'>
            {menuItems.map((menuItem) => (
              <li className='Header__menuItem' key={`${menuItem.label} - ${menuItem.url}`}>
                <div className='Header__menuLink' onClick={(): void => goToNewsPage(menuItem)}>
                  {menuItem.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
