import { NewsForm, TNewsModifyValues } from '@/containers';

import { TCreateNewsProps } from './CreateNews.types';

import './CreateNews.scss';

const CreateNews: React.FC<TCreateNewsProps> = () => {
  const creatingNews = true;
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
    <div className='CreateNews'>
      <NewsForm onSubmit={handleSubmitForm} loading={creatingNews} />
    </div>
  );
};

export default CreateNews;
