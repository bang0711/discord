import Sidebar from "@/components/navigation/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[4.5rem] z-30 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-[4.5rem] h-full">{children}</main>
    </div>
  );
}

export default MainLayout;
