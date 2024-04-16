import { Story, Meta } from '@storybook/react';

import { BlogLayout7, TBlogLayout7Props } from '@/components';

type TBlogLayout7StoryProps = TBlogLayout7Props;

export default {
  title: 'Components/BlogLayout7',
  component: BlogLayout7,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TBlogLayout7StoryProps> = ({ ...rest }) => <BlogLayout7 {...rest} />;

export const Primary = Template.bind({});
