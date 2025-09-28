'use client';

import { FC, ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';

import { THEME } from '@/shared/constants';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = props => {
  return (
    <MantineProvider theme={THEME} defaultColorScheme={'auto'}>
      {props.children}
    </MantineProvider>
  );
};
