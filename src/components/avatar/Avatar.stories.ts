import { StoryFn, Meta } from '@storybook/vue3'
import Avatar from './Avatar.vue'
import AvatarContent from './AvatarContent.vue'

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'extra'],
      defaultValue: 'medium'
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
      defaultValue: 'circle'
    }
  }
} as Meta<typeof Avatar>

export const TextAvatar: StoryFn<typeof Avatar> = (args) => ({
  components: { Avatar, AvatarContent },
  setup() {
    return { args }
  },
  template: `
  <Avatar v-bind="args">
    <AvatarContent v-bind="args">
      CN
    </AvatarContent>
  </Avatar>
`
})
export const ImgAvatar: StoryFn<typeof Avatar> = (args) => ({
  components: { Avatar, AvatarContent },
  setup() {
    return { args }
  },
  template: `
  <Avatar v-bind="args">
    <AvatarContent v-bind="args">
      <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />
    </AvatarContent>
  </Avatar>
`
})
