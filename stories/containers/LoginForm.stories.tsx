import { Story, Meta } from '@storybook/react';

import { LoginForm, TLoginFormProps } from '@/containers';

type TLoginFormStoryProps = TLoginFormProps;

export default {
  title: 'Containers/LoginForm',
  component: LoginForm,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TLoginFormStoryProps> = ({ ...rest }) => <LoginForm {...rest} />;

export const Primary = Template.bind({});
