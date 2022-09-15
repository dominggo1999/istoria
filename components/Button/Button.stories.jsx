import Button from './Button';

const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'geawgewge',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  text: 'Super',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  text: 'This button is disabled',
};

export const meta = {
  title: 'Button',
  component: Button,
};
