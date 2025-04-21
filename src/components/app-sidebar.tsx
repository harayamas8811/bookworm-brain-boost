
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ArrowRight, ArrowDown, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Book Upload",
    url: "/book",
    icon: ArrowUpIcon,
  },
  {
    title: "Mind Map",
    url: "/mindmap",
    icon: ArrowRight,
  },
  {
    title: "Quiz",
    url: "/quiz",
    icon: ArrowDown,
  },
];

function ArrowUpIcon(props: any) {
  // using allowed icon
  return <ArrowLeft {...props} style={{ transform: 'rotate(-90deg)' }} />;
}

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigate</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={`flex items-center gap-2 px-3 py-2 rounded transition hover:bg-blue-50 ${
                        location.pathname === item.url ? "bg-blue-100 font-bold" : ""
                      }`}
                    >
                      <item.icon className="text-blue-400" size={18} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
