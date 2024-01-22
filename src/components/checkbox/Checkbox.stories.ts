import { StoryFn, Meta } from '@storybook/vue3';
import Checkbox from './Checkbox.vue';
import CheckboxWithLabel from './CheckboxWithLabel.vue';

export default {
  title: 'Checkbox',
  components: {Checkbox, CheckboxWithLabel},
  argTypes: {
    checked: {
      control: {type: 'radio'},
      options: [true, false],
      defaultValue: false
    },
    disabled: {
      control: {type: 'radio'},
      options: [true, false],
      defaultValue: false
    }
  },
} as Meta<typeof Checkbox>;

export const DefaultCheckbox: StoryFn<typeof Checkbox> = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: `<Checkbox v-bind="args" />`
});

export const DefaultCheckboxWithLabel: StoryFn<typeof CheckboxWithLabel> = (args) => ({
  components: { CheckboxWithLabel },
  setup() {
    return { args };
  },
  template: `<CheckboxWithLabel v-bind="args">Checked for test your checkbox</CheckboxWithLabel>`
});