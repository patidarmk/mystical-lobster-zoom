import { Outlet } from '@tanstack/react-router';
import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <MadeWithApplaa />
      </footer>
    </div>
  );
};

export default Layout;