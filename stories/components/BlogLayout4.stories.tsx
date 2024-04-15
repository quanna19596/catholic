import { Story, Meta } from '@storybook/react';

import { BlogLayout4, TBlogLayout4Props } from '@/components';

type TBlogLayout4StoryProps = TBlogLayout4Props;

export default {
  title: 'Components/BlogLayout4',
  component: BlogLayout4,
  args: {},
  argTypes: {}
} as Meta;

const Template: Story<TBlogLayout4StoryProps> = ({ ...rest }) => <BlogLayout4 {...rest} />;

export const Primary = Template.bind({});
