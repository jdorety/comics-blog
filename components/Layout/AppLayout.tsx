import { ReactNode } from "react";
import TopBar from "../TopBar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <TopBar />
      <div className="container mx-auto px-8 pt-4">
      {children}
      </div>
    </>
  );
}
