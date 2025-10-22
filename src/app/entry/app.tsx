import { FC } from 'react';

import { Routing } from '@/modules/Routing/Routing.tsx';

import { routes } from '@/app/constants';

const App: FC = () => {
  return <Routing routes={routes} />;
};

export default App;
