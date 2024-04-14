import { Story, Meta } from '@storybook/react';

import { Header, THeaderProps } from '@/components';

type THeaderStoryProps = THeaderProps;

export default {
  title: 'Components/Header',
  component: Header,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<THeaderStoryProps> = ({ ...rest }) => <Header {...rest} />;

export const Primary = Template.bind({});
