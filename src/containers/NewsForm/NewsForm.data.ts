import * as yup from 'yup';

export const fieldLabels = {
  url: 'Đường dẫn',
  title: 'Tiêu đề',
  summary: 'Tóm tắt',
  content: 'Nội dung',
  thumbnail: 'Ảnh đại diện'
};

export const fieldNames = {
  url: 'url',
  title: 'title',
  summary: 'summary',
  content: 'content',
  thumbnail: 'thumbnail'
};

export const initialValues = {
  url: '',
  title: '',
  summary: '',
  content: '',
  thumbnail: null
};

export const validationSchema = yup.object().shape({
  url: yup.string().required('Vui lòng nhập đường dẫn của bài viết.'),
  title: yup.string().required('Vui lòng nhập tiêu đề của bài viết.'),
  summary: yup.string().required('Vui lòng nhập nội dung tóm tắt của bài viết.'),
  content: yup.string().required('Vui lòng nhập nội dung của bài viết.'),
  thumbnail: yup.string().required('Vui lòng nhập ảnh đại diện của bài viết.')
});
