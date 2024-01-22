import { StoryFn, Meta } from '@storybook/vue3'
import Card from './Card.vue'
import CardMainContent from './CardMainContent.vue'
import CardHeader from './CardHeader.vue'
import CardFooter from './CardFooter.vue'
import CardTitle from './CardTitle.vue'
import CardDescription from './CardDescription.vue'
import Button from '../button/Button.vue'

export default {
  title: 'Card',
  component: Card
} as Meta<typeof Card>

export const CardTemplate: StoryFn<typeof Card> = (args) => ({
  components: { Card, CardFooter, CardDescription, CardHeader, CardTitle, CardMainContent, Button },
  setup() {
    return { args }
  },
  template: 
  `<Card v-bind="args">
    <CardHeader>
      <CardTitle>Sign Up</CardTitle>
      <CardDescription>Sing up for entry to our project</CardDescription>
    </CardHeader>
    <CardMainContent>
      Main Content
    </CardMainContent>
    <CardFooter>
      <Button>SignUp</Button>
    </CardFooter>
  </Card>`
})
