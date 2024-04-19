// https://ckeditor.com/ckeditor-5/online-builder/
import { CKEditor } from '@ckeditor/ckeditor5-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import EditorBuild from 'ckeditor5-custom-build/build/ckeditor';
import classNames from 'classnames';
import { Message } from 'primereact/message';

// import env from '@/env';
// import { useAppDispatch } from '@/redux';
import { TEditorProps } from './Editor.types';

import './Editor.scss';

const Editor: React.FC<TEditorProps> = ({ data, onChange, error, helperText, ...rest }) => {
  // const dispatch = useAppDispatch();

  function uploadAdapter(loader: any): { upload: () => Promise<unknown> } {
    return {
      upload: (): Promise<unknown> => {
        return new Promise((resolve) => {
          console.log(resolve);
          const body = new FormData();
          loader.file.then((file: File) => {
            body.append('attachment', file);
            // dispatch(
            //   wahamaSlices.attachmentsSlice.actions.createAttachmentRequest({
            //     body: { attachment: file },
            //     successCb: (resp) => {
            //       if (resp) {
            //         resolve({
            //           default: `${env.rootUrl}/${resp.attachmentUrl}`
            //         });
            //       }
            //     }
            //   })
            // );
          });
        });
      }
    };
  }

  function uploadPlugin(editor: any): void {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any): { upload: () => Promise<unknown> } => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div className={classNames('Editor', { error })}>
      <CKEditor
        config={{
          extraPlugins: [uploadPlugin]
        }}
        editor={EditorBuild}
        data={data}
        onChange={(_: any, editor: any): void => {
          const data = editor.getData();
          onChange(data);
        }}
        onReady={(editor): void => {
          // You can store the "editor" and use when it is needed.
          // console.log("Editor is ready to use!", editor);
          editor.editing.view.change((writer: any) => {
            writer.setStyle('min-height', '300px', editor.editing.view.document.getRoot());
          });
        }}
        {...rest}
      />
      {helperText && <Message className='mt-2 w-full' severity='error' text={helperText} />}
    </div>
  );
};

export default Editor;
