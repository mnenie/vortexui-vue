import { StoryFn, Meta } from '@storybook/vue3';
import Spinner from './Spinner.vue';

export default {
  title: 'Spinner',
  component: Spinner

} as Meta<typeof Spinner>;

export const DefaultSpinner: StoryFn<typeof Spinner> = (args) => ({
  components: { Spinner },
  setup() {
    return { args };
  },
  template: '<Spinner v-bind="args" />'
});

export const SpinnerLarge: StoryFn<typeof Spinner> = (args) => ({
  components: { Spinner },
  setup() {
    return { args };
  },
  template: '<Spinner class="w-28 h-28" v-bind="args" />'
});