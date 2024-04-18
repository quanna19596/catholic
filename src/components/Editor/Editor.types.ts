export type TEditorProps = {
  data: string;
  error?: boolean;
  helperText?: string;
  onChange: (data: string) => void;
  onBlur?: (event: any, editor: any) => void;
};
