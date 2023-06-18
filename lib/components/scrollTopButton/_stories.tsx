import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ScrollTopButton } from './_template';
import { IScrollTopButton } from './_type';

const meta: Meta = {
  title: 'Scroll Top Button',
  component: ScrollTopButton
};

export default meta;

const Template: Story<IScrollTopButton> = (props: IScrollTopButton) => (
  <div style={{ height: '2000px' }}>
    <ScrollTopButton {...props}></ScrollTopButton>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  scroolY: 400
} as IScrollTopButton;
