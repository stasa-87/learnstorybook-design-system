import React from "react";

import { AvatarList } from "./AvatarList";

export default {
  title: "Design System/AvatarList",
  parameters: {
    componentSubtitle:
      "Use buttons for actions in forms, dialogs, and more with support for multiple sizes, states, and more.",
    docs: {
      description: {
        component: "Some component _markdown_",
      },
    },
  },
  args: {
    size: "medium",
    loading: false,
  },
  argTypes: {
    loading: {
      description: "State of the avatar list",
    },
    size: {
      description: "Size of the avatars",
      control: {
        type: "select",
      },
      options: ["large", "medium", "small", "tiny"],
      mapping: {
        default: "medium",
      },
    },
  },
};

const Template = (args) => <AvatarList {...args} />;

export const Short = Template.bind({});
Short.args = {
  users: [
    {
      id: "1",
      name: "Dominic Nguyen",
      avatarUrl: "https://avatars2.githubusercontent.com/u/263385",
    },
    {
      id: "2",
      name: "Tom Coleman",
      avatarUrl: "https://avatars2.githubusercontent.com/u/132554",
    },
  ],
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  users: Short.args.users,
  size: "small",
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Ellipsized = Template.bind({});
Ellipsized.args = {
  users: [
    ...Short.args.users,
    {
      id: "3",
      name: "Zoltan Olah",
      avatarUrl: "https://avatars0.githubusercontent.com/u/81672",
    },
    {
      id: "4",
      name: "Tim Hingston",
      avatarUrl: "https://avatars3.githubusercontent.com/u/1831709",
    },
  ],
};

export const BigUserCount = Template.bind({});
BigUserCount.args = {
  users: Ellipsized.args.users,
  userCount: 100,
};

export const Empty = Template.bind({});
Empty.args = {
  users: [],
};
