import { Story, Meta } from '@storybook/react';

import { BlogLayout1, TBlogLayout1Props } from '@/components';

type TBlogLayout1StoryProps = TBlogLayout1Props;

export default {
  title: 'Components/BlogLayout1',
  component: BlogLayout1,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TBlogLayout1StoryProps> = ({ ...rest }) => <BlogLayout1 {...rest} />;

export const Primary = Template.bind({});
