import { StoryFn, Meta } from '@storybook/vue3';
import Button from './Button.vue';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
      defaultValue: 'default',
    },
  },
} as Meta<typeof Button>;

export const DefaultButton: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
  <div style="display: flex; flex-direction: row; gap: 12px;">
    <Button v-bind="args">Button</Button>
    <Button v-bind="args" variant="outline">Button</Button>
  </div>
`,
});