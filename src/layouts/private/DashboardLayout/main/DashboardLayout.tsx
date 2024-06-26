import { Outlet, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Avatar } from 'primereact/avatar';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { MenuItem } from 'primereact/menuitem';

import { PATHS } from '@/router';
import { clearTokens } from '@/utils';

import { TDashboardLayoutProps } from './DashboardLayout.types';

import 'primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';
import './DashboardLayout.scss';

const DashboardLayout: React.FC<TDashboardLayoutProps> = () => {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: 'Bố cục trang',
      icon: 'pi pi-file',
      url: PATHS.PAGE.PAGE_LAYOUT_MANAGEMENT()
    },
    {
      label: 'Bố cục bài viết mẫu',
      icon: 'pi pi-objects-column',
      url: PATHS.PAGE.NEWS_LAYOUT_MANAGEMENT()
    },
    {
      label: 'Bài viết',
      icon: 'pi pi-file',
      url: PATHS.PAGE.NEWS_MANAGEMENT()
    },
    {
      label: 'Đăng xuất',
      icon: 'pi pi-sign-out'
    }
  ];

  const logout = (): void => {
    clearTokens();
    location.reload();
  };

  const handleClickMenuItem = (item: MenuItem): void => {
    if (!item.url) {
      openDialogConfirmLogout();
      return;
    }
    navigate(`${PATHS.LAYOUT.DASHBOARD()}${item.url}`);
  };

  const goToDashboardHome = (): void => {
    navigate(PATHS.LAYOUT.DASHBOARD());
  };

  const openDialogConfirmLogout = (): void => {
    confirmDialog({
      message: 'Bạn có muốn đăng xuất ra khỏi hệ thống?',
      header: 'Đăng xuất',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'p-button-danger',
      acceptLabel: 'Đăng xuất',
      rejectLabel: 'Tiếp tục sử dụng',
      accept: logout
    });
  };

  return (
    <div className='DashboardLayout'>
      <div className='DashboardLayout__sidebar'>
        <div className='flex relative lg:static surface-ground h-full'>
          <div
            id='app-sidebar-2'
            className='surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none'
            style={{ width: '100%' }}
          >
            <div className='flex flex-column h-full'>
              <div onClick={goToDashboardHome} className='flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0'>
                <span className='inline-flex align-items-center gap-2'>
                  <img src='https://via.placeholder.com/40x40' alt='Logo' />
                  <span className='font-semibold text-2xl text-primary'>Your Logo</span>
                </span>
              </div>
              <div className='overflow-y-auto'>
                <ul className='list-none p-3 m-0'>
                  <li>
                    <ul className='list-none p-0 m-0 overflow-hidden'>
                      {items.map((item) => (
                        <li key={item.label}>
                          <div
                            onClick={(): void => {
                              handleClickMenuItem(item);
                            }}
                            className={classNames(
                              'DashboardLayout__sidebar-menuItem',
                              'p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full',
                              { active: window.location.pathname === `${PATHS.LAYOUT.DASHBOARD()}${item.url}` }
                            )}
                          >
                            <i className={classNames('DashboardLayout__sidebar-menuItemIcon', item.icon, 'mr-2', { error: !item.url })}></i>
                            <span
                              className={classNames('DashboardLayout__sidebar-menuItemLabel', !item.url ? 'font-bold' : 'font-medium', {
                                error: !item.url
                              })}
                            >
                              {item.label}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
              <div className='mt-auto w-full flex-1 flex flex-column justify-content-end'>
                <hr className='mb-3 mx-3 border-top-1 border-none surface-border' />
                <div className='m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple'>
                  <Avatar image='https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png' shape='circle' />
                  <span className='font-bold'>Amy Elsner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='DashboardLayout__main'>
        <Outlet />
      </div>
      <ConfirmDialog />
    </div>
  );
};

export default DashboardLayout;
