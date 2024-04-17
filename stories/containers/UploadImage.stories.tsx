import { Story, Meta } from '@storybook/react';

import { UploadImage, TUploadImageProps } from '@/containers';

type TUploadImageStoryProps = TUploadImageProps;

export default {
  title: 'Containers/UploadImage',
  component: UploadImage,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TUploadImageStoryProps> = ({ ...rest }) => <UploadImage {...rest} />;

export const Primary = Template.bind({});
