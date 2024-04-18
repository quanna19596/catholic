import { useState } from 'react';
import classNames from 'classnames';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { TabPanel, TabView } from 'primereact/tabview';

import { BlogLayout1, BlogLayout2, BlogLayout3, BlogLayout4, BlogLayout5, BlogLayout6, BlogLayout7 } from '@/components';
import { TBlog } from '@/types';
import { dummyBlog, getArrayFrom0To } from '@/utils';

import { layouts } from './EditPageLayout.data';
import { TEditPageLayoutProps } from './EditPageLayout.types';

import './EditPageLayout.scss';

const EditPageLayout: React.FC<TEditPageLayoutProps> = () => {
  const [activeDialogCreateLayout, setActiveDialogCreateLayout] = useState<boolean>(false);
  const [selectedLayout, setSelectedLayout] = useState<{ layoutName: string; layoutValue: string; maxNews: number }>();
  const [layoutTitle, setLayoutTitle] = useState<{ label: string; path: string }>({ label: '', path: '' });
  const [news, setNews] = useState<(TBlog | undefined)[]>([]);
  const updatingPageLayout = false;

  const createNewLayout = (): void => {
    setActiveDialogCreateLayout(true);
  };

  const handleChangeSelectLayout = (e: DropdownChangeEvent): void => {
    const newLayout = e.value as { layoutName: string; layoutValue: string; maxNews: number };
    setSelectedLayout(newLayout);
    setNews(getArrayFrom0To(newLayout.maxNews).map(() => undefined));
  };

  const renderLayout = (layout?: { layoutName: string; layoutValue: string; maxNews: number }): React.ReactNode => {
    if (!layout) return <></>;

    const blogLayoutProps = {
      title: { label: layoutTitle.label.toUpperCase() || 'Tiêu đề', url: layoutTitle.path || '/' },
      blogs: news
    };

    switch (layout.layoutValue) {
      case 'layout-1':
        return <BlogLayout1 {...blogLayoutProps} />;
      case 'layout-2':
        return <BlogLayout2 {...blogLayoutProps} />;
      case 'layout-3':
        return <BlogLayout3 {...blogLayoutProps} />;
      case 'layout-4':
        return <BlogLayout4 {...blogLayoutProps} />;
      case 'layout-5':
        return <BlogLayout5 {...blogLayoutProps} />;
      case 'layout-6':
        return <BlogLayout6 {...blogLayoutProps} />;
      case 'layout-7':
        return <BlogLayout7 {...blogLayoutProps} />;

      default:
        return <></>;
    }
  };

  const handleChangeSelectNews = (e: DropdownChangeEvent, blogIdx: number): void => {
    const newBlog = e.value as TBlog;
    setNews(news.map((blog, idx) => (blogIdx !== idx ? blog : newBlog)));
  };

  return (
    <div className='EditPageLayout'>
      <Button label='Tạo bố cục mới' icon='pi pi-plus' className='mb-4' onClick={createNewLayout} />
      {/* <div className="EditPageLayout__main">
        
      </div> */}
      <Button type='submit' className='w-full mt-4' label='Cập nhật' severity='warning' loading={updatingPageLayout} />
      <Dialog
        visible={activeDialogCreateLayout}
        modal
        footer={
          <div className='pt-4'>
            <Button label='Hoàn thành' icon='pi pi-check' onClick={() => setActiveDialogCreateLayout(false)} />
          </div>
        }
        style={{ width: '50rem' }}
        onHide={() => setActiveDialogCreateLayout(false)}
      >
        <TabView>
          <TabPanel header='Bố cục'>
            <Dropdown
              value={selectedLayout}
              onChange={handleChangeSelectLayout}
              options={layouts}
              optionLabel='layoutName'
              placeholder='Chọn bố cục'
              className='w-full mb-2'
            />
            {selectedLayout && (
              <div className='flex mb-2'>
                <div className='pr-2 w-6'>
                  <InputText
                    value={layoutTitle.label}
                    onChange={(e): void => setLayoutTitle({ ...layoutTitle, label: e.target.value })}
                    placeholder='Tiêu đề'
                    className='w-full'
                  />
                </div>
                <div className='pl-2 w-6'>
                  <InputText
                    value={layoutTitle.path}
                    onChange={(e): void => setLayoutTitle({ ...layoutTitle, path: e.target.value })}
                    placeholder='Đường dẫn (Ví dụ: /thanh-le)'
                    className='w-full'
                  />
                </div>
              </div>
            )}
            {renderLayout(selectedLayout)}
          </TabPanel>
          <TabPanel header={`Bài viết ${selectedLayout ? `(Tối đa ${selectedLayout?.maxNews}) bài` : ''}`} disabled={!selectedLayout}>
            {selectedLayout &&
              getArrayFrom0To(selectedLayout.maxNews).map((numb) => (
                <div key={numb} className='flex align-items-center'>
                  <span className='font-bold mr-2'>{numb + 1}</span>
                  <Dropdown
                    value={news[numb]}
                    onChange={(e) => handleChangeSelectNews(e, numb)}
                    options={getArrayFrom0To(10).map((el) => ({ id: el.toString(), ...dummyBlog }))}
                    optionLabel='title'
                    placeholder='Chọn bài viết'
                    className={classNames('w-full', { 'mb-2': numb < getArrayFrom0To(selectedLayout.maxNews).length - 1 })}
                  />
                </div>
              ))}
          </TabPanel>
        </TabView>
      </Dialog>
    </div>
  );
};

export default EditPageLayout;
