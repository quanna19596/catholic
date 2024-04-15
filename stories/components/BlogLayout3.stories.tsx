import { Story, Meta } from '@storybook/react';

import { BlogLayout3, TBlogLayout3Props } from '@/components';

type TBlogLayout3StoryProps = TBlogLayout3Props;

export default {
  title: 'Components/BlogLayout3',
  component: BlogLayout3,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TBlogLayout3StoryProps> = ({ ...rest }) => <BlogLayout3 {...rest} />;

export const Primary = Template.bind({});
