import { StoryFn, Meta } from '@storybook/vue3'
import Menu from './Menu.vue'
import MenuItem from './MenuItem.vue'

export default {
  title: 'Menu',
  component: Menu
} as Meta<typeof Menu>

export const CardTemplate: StoryFn<typeof Menu> = (args) => ({
  components: { Menu, MenuItem},
  setup() {
    return { args }
  },
  template: 
  `<Menu v-bind="args">
    <MenuItem v-bind="args">
      Profile
    </MenuItem>
    <MenuItem v-bind="args">
      Edit
    </MenuItem>
    <MenuItem v-bind="args">
      Save
    </MenuItem>
    <MenuItem v-bind="args">
      Status
    </MenuItem>
  </Menu>`
})
