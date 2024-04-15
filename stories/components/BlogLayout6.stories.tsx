import { Story, Meta } from '@storybook/react';

import { BlogLayout6, TBlogLayout6Props } from '@/components';

type TBlogLayout6StoryProps = TBlogLayout6Props;

export default {
  title: 'Components/BlogLayout6',
  component: BlogLayout6,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TBlogLayout6StoryProps> = ({ ...rest }) => <BlogLayout6 {...rest} />;

export const Primary = Template.bind({});
