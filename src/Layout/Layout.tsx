import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header className="bg-slate-700 p-10">
        <div className="mx-auto max-w-5xl">
            <h1 className="text-4xl font-bold text-white ">Administrador de Productos</h1>
        </div>
      </header>
        <main className="mt-10 mx-auto max-w-5xl bg-white rounded-sm p-10">
            <Outlet />
            
        </main>
      
    </>
  );
};

export default Layout;
