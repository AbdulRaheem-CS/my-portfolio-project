import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Preloader from "@/components/ui/Preloader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SmoothScroll>
      <div id="top" className="relative flex flex-col min-h-screen bg-black text-white selection:bg-orange-500/40">
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default MainLayout;
