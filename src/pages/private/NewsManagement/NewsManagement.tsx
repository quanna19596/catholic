import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { confirmDialog } from 'primereact/confirmdialog';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';

import { PATHS } from '@/router';
import { dummyBlog, getArrayFrom0To } from '@/utils';

import { TNewsManagementProps } from './NewsManagement.types';

import './NewsManagement.scss';

const NewsManagement: React.FC<TNewsManagementProps> = () => {
  const news = getArrayFrom0To(10).map((el) => ({ id: el.toString(), ...dummyBlog }));

  const navigate = useNavigate();
  const toast = useRef(null);
  const [newsPrepareToDelete, setNewsPrepareToDelete] = useState<{ [key: string]: any }>();

  const thumbnailTemplate = ({ thumbnail, title }: { [key: string]: any }): React.ReactNode => {
    return <img width={150} height={80} src={thumbnail} alt={title} />;
  };

  const summaryTemplate = ({ summary }: { [key: string]: any }): React.ReactNode => {
    return <span>{summary.slice(0, 50)}...</span>;
  };

  const actionsTemplate = (row: { [key: string]: any }): React.ReactNode => (
    <div className='flex'>
      <Button icon='pi pi-pencil' className='mr-2' severity='info' onClick={(): void => goToEditNewsPage(row)} />
      <Button icon='pi pi-trash' severity='danger' onClick={(): void => handleClickDeleteNews(row)} />
    </div>
  );

  const handleClickDeleteNews = (row?: any): void => {
    setNewsPrepareToDelete(row);
    openDialogConfirmDelete();
  };

  const openDialogConfirmDelete = (): void => {
    confirmDialog({
      message: 'Bạn có muốn xoá bài viết này?',
      header: 'Xoá bài viết',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'p-button-danger',
      acceptLabel: 'Xoá',
      rejectLabel: 'Không xoá',
      accept: () => {
        console.log(newsPrepareToDelete);
      },
      reject: () => {
        setNewsPrepareToDelete(undefined);
      }
    });
  };

  const goToCreateNewsPage = (): void => {
    navigate(`${PATHS.LAYOUT.DASHBOARD()}${PATHS.PAGE.CREATE_NEWS()}`);
  };

  const goToEditNewsPage = (row: any): void => {
    navigate(`${PATHS.LAYOUT.DASHBOARD()}${PATHS.PAGE.EDIT_NEWS({ newsId: row.id })}`);
  };

  return (
    <div className='NewsManagement'>
      <Button label='Tạo bài viết mới' icon='pi pi-plus' className='mb-4' onClick={goToCreateNewsPage} />
      <DataTable value={news} tableStyle={{ minWidth: '50rem' }}>
        <Column field='thumbnail' header='Ảnh đại diện' body={thumbnailTemplate} />
        <Column field='title' header='Tiêu đề' />
        <Column field='summary' header='Tóm tắt' body={summaryTemplate} />
        <Column field='url' header='Đường dẫn' />
        <Column field='' header='' body={actionsTemplate} />
      </DataTable>
      <Toast ref={toast} />
    </div>
  );
};

export default NewsManagement;
