import { StoryFn, Meta } from '@storybook/vue3';
import Input from './Input.vue';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      control: {type: 'select'},
      options: ['text', 'password'],
      defaultValue: 'text'
    }
  },
} as Meta<typeof Input>;

export const DefaultInput: StoryFn<typeof Input> = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />'
});