import { RouterType } from '@/modules/Routing/Routing.tsx';

import { TestHome } from '@/app/pages';

export const routes: RouterType[] = [
  { path: '/test-home', component: <TestHome /> },
];
