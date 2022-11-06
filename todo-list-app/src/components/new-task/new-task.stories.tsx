import { ComponentStory, ComponentMeta } from '@storybook/react';
import IUpsertData from '../../interfaces/IUpsertData';
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
  update: undefined,
};

export const data = Template.bind({});
data.args = {
  loading: false,
  update:(
    upsertData: IUpsertData
  ) => {
    alert(`id: ${upsertData.id}   description: ${upsertData.description}   isComplete: ${upsertData.isComplete}   inProgress: ${upsertData.inProgress}`)
  }
};