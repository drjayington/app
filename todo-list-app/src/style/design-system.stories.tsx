import { ComponentStory, ComponentMeta } from '@storybook/react';
import DesignSystem from './design-system';

export default {
  title: 'Example/DesignSystem',
  component: DesignSystem,
} as ComponentMeta<typeof DesignSystem>;

const Template: ComponentStory<typeof DesignSystem> = (args) => <DesignSystem/>;

export const designSystem = Template.bind({});