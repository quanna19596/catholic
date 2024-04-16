import { Outlet } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';
import { PanelMenu } from 'primereact/panelmenu';
import { Sidebar } from 'primereact/sidebar';

import { TDashboardLayoutProps } from './DashboardLayout.types';

import 'primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import './DashboardLayout.scss';

const DashboardLayout: React.FC<TDashboardLayoutProps> = () => {
  const items: MenuItem[] = [
    {
      label: 'Bài viết',
      icon: 'pi pi-pencil',
      command: (): void => {
        console.log('Bài viết');
      }
    },
    {
      label: 'Đăng xuất',
      icon: 'pi pi-sign-out',
      command: (): void => {
        console.log('Đăng xuất');
      }
    }
  ];

  return (
    <div className='DashboardLayout'>
      <Sidebar
        className='DashboardLayout__sidebar'
        visible
        onHide={() => {}}
        modal={false}
        showCloseIcon={false}
        blockScroll
        header={false}
      >
        <PanelMenu model={items} className='w-full' />
      </Sidebar>
      <div className='DashboardLayout__main'>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
