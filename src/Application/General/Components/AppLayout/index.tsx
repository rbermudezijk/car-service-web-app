import React, { ReactFragment, ReactNode } from 'react';
import './AppLayout.scss';

type AppLayoutProps = {
  children: ReactNode | ReactFragment
};

export const AppLayout = ({children}: AppLayoutProps) => 
  <main className="app-grid">
    {children}
  </main>;