import { StoryFn, Meta } from '@storybook/vue3';
import Label from './Label.vue';

export default {
  title: 'Label',
  component: Label,
  argTypes: {
    labelClass: {
      control: 'text',
    },
  },

} as Meta<typeof Label>;

export const DefaultLabel: StoryFn<typeof Label> = (args) => ({
  components: { Label },
  setup() {
    return { args };
  },
  template: '<Label :class="args.labelClass" v-bind="args">Label of vortexui</Label>'
});