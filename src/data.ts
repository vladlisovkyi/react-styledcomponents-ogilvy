export interface GraphItem {
  id: number;
  title: string;
  percent: number;
}

export interface TabContent {
  id: number;
  title: string;
  text: string;
  image: string;
  graph: GraphItem[];
}

export interface Tab {
  id: number;
  title: string;
  content: TabContent[];
}

export const arrTabs: Tab[] = [
  {
    id: 0,
    title: "Summary",
    content: [
      {
        id: 0,
        title: "Content 1 for Summary",
        text: "View all the business sizes this agency current manages, as well as which business size they choose to work with the most.",
        image: "client.svg",
        graph: [
          {
            id: 0,
            title: "Small Business (Less than $1M in revenue)",
            percent: 0,
          },
          { id: 1, title: "Medium Business ($1M-$10M)", percent: 10 },
          { id: 2, title: "Large Business ($10M-$1B) ", percent: 70 },
          { id: 3, title: "Enterprise ($1B+) ", percent: 20 },
        ],
      },
      {
        id: 1,
        title: "Content 2 for Summary",
        text: "See which industries this agency has the most experience and expertise in.",
        image: "industry.svg",
        graph: [
          {
            id: 0,
            title: "Healthcare",
            percent: 50,
          },
          { id: 1, title: "Business Services", percent: 20 },
          { id: 2, title: "Automotive ", percent: 15 },
          { id: 3, title: "Financial Services", percent: 10 },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Performance",
    content: [
      {
        id: 0,
        title: "Content 1 for Performance",
        text: "Effort metrics help you understand how involved, and productive, the agency is with their brands on a daily basis.",
        image: "effort.svg",
        graph: [
          {
            id: 0,
            title: "Small Business (Less than $1M in revenue)",
            percent: 0,
          },
          { id: 1, title: "Medium Business ($1M-$10M)", percent: 10 },
          { id: 2, title: "Large Business ($10M-$1B) ", percent: 70 },
          { id: 3, title: "Enterprise ($1B+) ", percent: 20 },
        ],
      },
      {
        id: 1,
        title: "Content 2 for Performance",
        text: "Effort metrics help you understand how involved, and productive, the agency is with their brands on a daily basis.",
        image: "effort.svg",
        graph: [
          {
            id: 0,
            title: "Healthcare",
            percent: 50,
          },
          { id: 1, title: "Business Services", percent: 20 },
          { id: 2, title: "Automotive ", percent: 15 },
          { id: 3, title: "Financial Services", percent: 10 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Portfolio",
    content: [
      {
        id: 0,
        title: "Content 1 for Portfolio",
        text: "Leading digital campaign focused on acquisition of private equity clients in Switzeralnd.",
        image: "bank.svg",
        graph: [
          {
            id: 0,
            title: "Small Business (Less than $1M in revenue)",
            percent: 0,
          },
          { id: 1, title: "Medium Business ($1M-$10M)", percent: 10 },
          { id: 2, title: "Large Business ($10M-$1B) ", percent: 70 },
          { id: 3, title: "Enterprise ($1B+) ", percent: 20 },
        ],
      },
      {
        id: 1,
        title: "Content 2 for Portfolio",
        text: "Leading digital campaign focused on acquisition of private equity clients in Switzeralnd.",
        image: "bank.svg",
        graph: [
          {
            id: 0,
            title: "Healthcare",
            percent: 50,
          },
          { id: 1, title: "Business Services", percent: 20 },
          { id: 2, title: "Automotive ", percent: 15 },
          { id: 3, title: "Financial Services", percent: 10 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Reviews",
    content: [
      {
        id: 0,
        title: "Content 1 for Reviews",
        text: "Leading digital campaign focused on acquisition of private equity clients in Switzeralnd.",
        image: "effort.svg",
        graph: [
          {
            id: 0,
            title: "Small Business (Less than $1M in revenue)",
            percent: 0,
          },
          { id: 1, title: "Medium Business ($1M-$10M)", percent: 10 },
          { id: 2, title: "Large Business ($10M-$1B) ", percent: 70 },
          { id: 3, title: "Enterprise ($1B+) ", percent: 20 },
        ],
      },
      {
        id: 1,
        title: "Content 2 for Reviews",
        text: "Leading digital campaign focused on acquisition of private equity clients in Switzeralnd.",
        image: "effort.svg",
        graph: [
          {
            id: 0,
            title: "Healthcare",
            percent: 50,
          },
          { id: 1, title: "Business Services", percent: 20 },
          { id: 2, title: "Automotive ", percent: 15 },
          { id: 3, title: "Financial Services", percent: 10 },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Latest",
    content: [
      {
        id: 0,
        title: "Content 1 for Latest",
        text: "Leading digital campaign focused on acquisition of private equity clients in Switzeralnd.",
        image: "effort.svg",
        graph: [
          {
            id: 0,
            title: "Small Business (Less than $1M in revenue)",
            percent: 0,
          },
          { id: 1, title: "Medium Business ($1M-$10M)", percent: 10 },
          { id: 2, title: "Large Business ($10M-$1B) ", percent: 70 },
          { id: 3, title: "Enterprise ($1B+) ", percent: 20 },
        ],
      },
      {
        id: 1,
        title: "Content 2 for Latest",
        text: "Leading digital campaign focused on acquisition of private equity clients in Switzeralnd.",
        image: "effort.svg",
        graph: [
          {
            id: 0,
            title: "Healthcare",
            percent: 50,
          },
          { id: 1, title: "Business Services", percent: 20 },
          { id: 2, title: "Automotive ", percent: 15 },
          { id: 3, title: "Financial Services", percent: 10 },
        ],
      },
    ],
  },
];

export default arrTabs;
