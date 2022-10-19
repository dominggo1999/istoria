import Card from './Card';

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Lorem Ipsum is simply dummy',
  description: 'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};

export const meta = {
  title: 'Card',
};
