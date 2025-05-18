
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import { Terminal } from "../components/Terminal";

const Layout = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <Outlet />
        </main>
        <Footer />
        <Terminal />
      </div>
    </ThemeProvider>
  );
};

export default Layout;

