import { ReactNode } from "react";
import TopBar from "../TopBar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
}
