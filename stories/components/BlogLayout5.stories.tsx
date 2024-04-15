import { Story, Meta } from '@storybook/react';

import { BlogLayout5, TBlogLayout5Props } from '@/components';

type TBlogLayout5StoryProps = TBlogLayout5Props;

export default {
  title: 'Components/BlogLayout5',
  component: BlogLayout5,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TBlogLayout5StoryProps> = ({ ...rest }) => <BlogLayout5 {...rest} />;

export const Primary = Template.bind({});
