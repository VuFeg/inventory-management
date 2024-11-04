import React from "react";
import Navbar from "@/src/app/(component)/Navbar";
import Sidebar from "@/src/app/(component)/Sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardWrapper = ({ children }: Props) => {
  return (
    <div className="light flex bg-gray-50 text-gray-900 w-full min-h-screen">
      <Sidebar />
      <main className="flex flex-col w-full h-full bg-gray-50 px-9 py-7 md:pl-24">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
