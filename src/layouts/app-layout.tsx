import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import congreataiLogo from "@/assets/congreatai.png";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
const AppLayout = ({ children }: { children: ReactNode }) => {
  const isMobile = useIsMobile();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[#FAFAFA]">
        {isMobile && (
          <header className="px-10 py-2 flex items-center justify-between">
            <Link to={"/"}>
              <img
                className="h-8"
                src={congreataiLogo}
                alt="congreat ai logo"
              />
            </Link>
            <Link to={"/login"} className="">
              <Button className="rounded-full" variant={"outline"}>
                Login
              </Button>
            </Link>
          </header>
        )}
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
