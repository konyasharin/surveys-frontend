import { FC } from 'react';

import { Button } from '@/shared/ui';

const App: FC = () => {
  return (
    <div className="h-screen bg-black flex flex-col items-start gap-3 p-4">
      <Button size="md" variant="default" loading>
        Default
      </Button>
      <Button size="md" variant="filled">
        Filled
      </Button>
      <Button size="md" variant="outline">
        Outline
      </Button>
      <Button size="md" variant="light">
        Light
      </Button>
      <Button size="md" variant="subtle">
        Subtle
      </Button>
      <Button size="md" variant="transparent">
        Transparent
      </Button>

      <Button size="md" color="secondary" variant="default">
        Secondary Default
      </Button>
      <Button size="md" color="secondary" variant="filled">
        Secondary Filled
      </Button>
      <Button size="md" color="secondary" variant="outline">
        Secondary Outline
      </Button>
      <Button size="md" color="secondary" variant="light">
        Secondary Light
      </Button>
      <Button size="md" color="secondary" variant="subtle">
        Secondary Subtle
      </Button>
      <Button size="md" color="secondary" variant="transparent">
        Secondary Transparent
      </Button>
    </div>
  );
};

export default App;
