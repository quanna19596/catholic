import { useEffect } from 'react';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';

import { Editor } from '@/components';
import { UploadImage } from '@/containers';

import { fieldLabels, fieldNames, initialValues, validationSchema } from './NewsForm.data';
import { TNewsFormProps, TNewsModifyValues } from './NewsForm.types';

import './NewsForm.scss';

const NewsForm: React.FC<TNewsFormProps> = ({ loading, initialValues: initialValuesFromProps, onSubmit }) => {
  const formik = useFormik<TNewsModifyValues<File | string>>({
    initialValues,
    validationSchema,
    onSubmit: (values): void => {
      if (values.thumbnail) {
        const thumbnailIsFile = typeof values.thumbnail !== 'string';

        if (thumbnailIsFile) {
          // dispatch(
          //   wahamaSlices.attachmentsSlice.actions.createAttachmentRequest({
          //     body: { attachment: values.thumbnail as File },
          //     successCb: (resp) => {
          //       if (resp) {
          //         onSubmit?.({ ...values, thumbnail: resp.attachmentUrl });
          //       }
          //     },
          //     failedCb: (err) => onUploadImagesFailed?.(err?.message)
          //   })
          // );
        } else {
          onSubmit?.({ ...values, thumbnail: values.thumbnail as string });
        }
      }
    }
  });

  const handleChangeThumbnail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = e.target.files?.[0] as File;
      formik.setFieldValue(fieldNames.thumbnail, file);
    }
  };

  useEffect(() => {
    if (initialValuesFromProps) {
      formik.setValues(initialValuesFromProps);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValuesFromProps]);

  return (
    <form className='NewsForm' onSubmit={formik.handleSubmit}>
      <div className='flex flex-column gap-2 mb-4'>
        <span className='NewsForm__inputLabel'>{fieldLabels.thumbnail}</span>
        <UploadImage />
        {!!formik.touched.thumbnail && !!formik.errors.thumbnail && <Message severity='error' text={formik.errors.thumbnail} />}
      </div>
      <div className='flex flex-column gap-2 mb-4'>
        <span className='NewsForm__inputLabel'>{fieldLabels.title}</span>
        <InputText
          invalid={!!formik.touched.title && !!formik.errors.title}
          name={fieldNames.title}
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {!!formik.touched.title && !!formik.errors.title && <Message severity='error' text={formik.errors.title} />}
      </div>
      <div className='flex flex-column gap-2 mb-4'>
        <span className='NewsForm__inputLabel'>{fieldLabels.url}</span>
        <InputText
          invalid={!!formik.touched.url && !!formik.errors.url}
          name={fieldNames.url}
          value={formik.values.url}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {!!formik.touched.url && !!formik.errors.url && <Message severity='error' text={formik.errors.url} />}
      </div>
      <div className='flex flex-column gap-2 mb-4'>
        <span className='NewsForm__inputLabel'>{fieldLabels.summary}</span>
        <InputText
          invalid={!!formik.touched.summary && !!formik.errors.summary}
          name={fieldNames.summary}
          value={formik.values.summary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {!!formik.touched.summary && !!formik.errors.summary && <Message severity='error' text={formik.errors.summary} />}
      </div>
      <Editor
        data={formik.values.content}
        onChange={(data): void => {
          formik.setFieldValue(fieldNames.content, data);
        }}
        onBlur={(): void => {
          formik.setTouched({ [fieldNames.content]: true });
        }}
        error={!!formik.touched.content && !!formik.errors.content}
        helperText={!!formik.touched.content && !!formik.errors.content ? formik.errors.content : ''}
      />
      <Button type='submit' className='w-full mt-4' label='Đăng bài' severity='warning' loading={loading} />
    </form>
  );
};

export default NewsForm;
