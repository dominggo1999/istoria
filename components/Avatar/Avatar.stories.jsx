import Avatar from './Avatar';

const Template = (args) => <Avatar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  src: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg',
};

export const Square = Template.bind({});
Square.args = {
  variant: 'square',
  src: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg',
};

export const Border = Template.bind({});
Border.args = {
  variant: 'border',
  src: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg',
};

export const meta = {
  title: 'Avatar',
  component: Avatar,
};
