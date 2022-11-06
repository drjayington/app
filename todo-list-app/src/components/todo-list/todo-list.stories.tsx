import { ComponentStory, ComponentMeta } from '@storybook/react';
import IUpsertData from '../../interfaces/IUpsertData';
import TodoList from './todo-list';

export default {
  title: 'Example/Todo-List',
  component: TodoList,
  argTypes: {}
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;

export const loading = Template.bind({});
loading.args = {
  loading: true,
  title: "Pending",
  buttonText: "Complete",
  data: undefined,
  update:(
    upsertData: IUpsertData
  ) => {}
};

export const data = Template.bind({});
data.args = {
  title: "Pending",
  loading: false,
  data:[
    { id: '1', description: "set up project", isComplete: true },
    { id: '2', description: "create component/TodoList", isComplete: true },
    { id: '3', description: "create TaskManger page", isComplete: false },
    { id: '4', description: "create effect to get todo list", isComplete: false },
    { id: '5', description: "create effect to set todo list", isComplete: false },
    { id: '6', description: "create component/NewTask", isComplete: false }
  ],
  buttonText: "Complete",
  update:(
    upsertData: IUpsertData
  ) => {
    alert(`id: ${upsertData.id}   description: ${upsertData.description}   isComplete: ${upsertData.isComplete}    inProgress: ${upsertData.inProgress}`)
  }
};