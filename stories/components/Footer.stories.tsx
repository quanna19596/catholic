import { Story, Meta } from '@storybook/react';

import { Footer, TFooterProps } from '@/components';

type TFooterStoryProps = TFooterProps;

export default {
  title: 'Components/Footer',
  component: Footer,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TFooterStoryProps> = ({ ...rest }) => <Footer {...rest} />;

export const Primary = Template.bind({});
