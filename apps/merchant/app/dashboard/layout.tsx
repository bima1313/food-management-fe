import AppSidebar from "@/features/dashboard/components/AppSideBar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full relative">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
