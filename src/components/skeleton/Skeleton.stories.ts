import { StoryFn, Meta } from '@storybook/vue3';
import Skeleton from './Skeleton.vue';

export default {
  title: 'Skeleton',
  component: Skeleton

} as Meta<typeof Skeleton>;

export const DefaultSkeleton: StoryFn<typeof Skeleton> = (args) => ({
  components: { Skeleton },
  setup() {
    return { args };
  },
  template: '<Skeleton v-bind="args" />'
});