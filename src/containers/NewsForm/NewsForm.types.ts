export type TNewsFormProps = {
  loading?: boolean;
  initialValues?: TNewsModifyValues<File | string>;
  onSubmit: (values: TNewsModifyValues<string>) => void;
};

export type TNewsModifyValues<TThumbnailImg = string> = {
  url: string;
  title: string;
  summary: string;
  content: string;
  thumbnail: TThumbnailImg | null;
};
