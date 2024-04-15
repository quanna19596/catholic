import { Story, Meta } from '@storybook/react';

import { Breadcrumb, TBreadcrumbProps } from '@/components';

type TBreadcrumbStoryProps = TBreadcrumbProps;

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TBreadcrumbStoryProps> = ({ ...rest }) => <Breadcrumb {...rest} />;

export const Primary = Template.bind({});
