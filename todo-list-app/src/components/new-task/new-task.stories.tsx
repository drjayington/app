import { ComponentStory, ComponentMeta } from '@storybook/react';
import NewTaskList from './new-task';

export default {
  title: 'Example/New-Task',
  component: NewTaskList,
  argTypes: {}
} as ComponentMeta<typeof NewTaskList>;

const Template: ComponentStory<typeof NewTaskList> = (args) => <NewTaskList {...args} />;

export const loading = Template.bind({});
loading.args = {
  loading: true,
  data: undefined,
  update: undefined,
};

export const data = Template.bind({});
data.args = {
  loading: false,
  data: { 
    id: '1',
    description: "test",
    iSComplete: false
  },
  update: (id: string,
    description: string,
    iSComplete: boolean) => {
      console.log(`id: ${id} description: ${description} iSComplete: ${iSComplete}` )
  }
};