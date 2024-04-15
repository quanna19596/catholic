import { Story, Meta } from '@storybook/react';

import { BlogLayout2, TBlogLayout2Props } from '@/components';

type TBlogLayout2StoryProps = TBlogLayout2Props;

export default {
  title: 'Components/BlogLayout2',
  component: BlogLayout2,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TBlogLayout2StoryProps> = ({ ...rest }) => <BlogLayout2 {...rest} />;

export const Primary = Template.bind({});
