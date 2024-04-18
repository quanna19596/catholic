import { NewsForm, TNewsModifyValues } from '@/containers';
import { dummyBlog } from '@/utils';

import { TEditNewsProps } from './EditNews.types';

import './EditNews.scss';

const EditNews: React.FC<TEditNewsProps> = () => {
  const updatingNews = false;
  const handleSubmitForm = (values: TNewsModifyValues): void => {
    // if (currentUser) {
    //   dispatch(
    //     wahamaSlices.articleSlice.actions.createArticleRequest({
    //       body: { ...values, author: currentUser?.name },
    //       successCb: openCreateArticleSuccessModal,
    //       failedCb: (err): void => openCreateArticleFailedModal(err?.statusCode === EStatusCode.INTERNAL_SERVER_ERROR ? '' : err?.message)
    //     })
    //   );
    // }
  };

  return (
    <div className='EditNews'>
      <NewsForm initialValues={dummyBlog} onSubmit={handleSubmitForm} loading={updatingNews} />
    </div>
  );
};

export default EditNews;
