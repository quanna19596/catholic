import { Story, Meta } from '@storybook/react';

import { NewsForm, TNewsFormProps } from '@/containers';

type TNewsFormStoryProps = TNewsFormProps;

export default {
  title: 'Containers/NewsForm',
  component: NewsForm,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TNewsFormStoryProps> = ({ ...rest }) => <NewsForm {...rest} />;

export const Primary = Template.bind({});
