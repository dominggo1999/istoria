import Button from './Button';
import 'twin.macro';

export const List = () => {
  return (
    <div tw="flex gap-x-3">
      <Button>Default Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="green">Green Button</Button>
      <Button variant="purple">Purple Button</Button>
      <Button variant="yellow">Yellow Button</Button>
    </div>
  );
};

export const Default = () => <Button>Default</Button>;
export const Danger = (args) => <Button {...args}>Danger</Button>;
Danger.args = {
  variant: 'danger',
};

export const meta = {
  title: 'Button',
};
