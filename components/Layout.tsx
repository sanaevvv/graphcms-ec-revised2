import { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { MainNav } from './MainNav';
import { MenuList } from './MenuList';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <MainNav />
      <aside><MenuList /></aside>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
