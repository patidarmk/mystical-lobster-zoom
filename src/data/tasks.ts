export type Task = {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
};

export const initialTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Design the new landing page',
    description: 'Create mockups and prototypes for the new marketing landing page using Figma. Focus on a clean, modern design.',
    status: 'in-progress',
    priority: 'high',
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'task-2',
    title: 'Develop API for user authentication',
    description: 'Implement JWT-based authentication endpoints. Include registration, login, and password reset functionality.',
    status: 'todo',
    priority: 'high',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'task-3',
    title: 'Fix bug in payment processing',
    description: 'Users are reporting an issue where payments are being declined incorrectly. Investigate and deploy a hotfix.',
    status: 'in-progress',
    priority: 'medium',
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'task-4',
    title: 'Write documentation for the new feature',
    description: 'Create comprehensive documentation for the recently released "Project Templates" feature. Include examples and tutorials.',
    status: 'done',
    priority: 'low',
    dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'task-5',
    title: 'Set up CI/CD pipeline',
    description: 'Configure GitHub Actions to automatically build, test, and deploy the application to the staging environment.',
    status: 'todo',
    priority: 'medium',
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'task-6',
    title: 'Refactor legacy user profile component',
    description: 'The current user profile component is slow and hard to maintain. Refactor it to use modern React hooks and TypeScript.',
    status: 'todo',
    priority: 'low',
    dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'task-7',
    title: 'Conduct user testing for the mobile app',
    description: 'Organize and run a user testing session with 5 participants to gather feedback on the new mobile app design.',
    status: 'done',
    priority: 'medium',
    dueDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'task-8',
    title: 'Prepare Q3 marketing report',
    description: 'Analyze marketing campaign performance for the third quarter and create a presentation for the leadership team.',
    status: 'todo',
    priority: 'medium',
    dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
];