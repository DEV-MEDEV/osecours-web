'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Icon360View,
  // IconAlarm,
  IconAlpha,
  IconChartArea,
  // IconCamera,
  // IconChartBar,
  // IconDashboard,
  IconDatabase,
  // IconFileAi,
  // IconFileDescription,
  IconFileWord,
  IconMap,
  //IconFolder,
  // IconHelp,
  // IconListDetails,
  IconReport,
  //  IconSearch,
  // IconSettings,
  // IconUsers,
} from '@tabler/icons-react';

import { NavDocuments } from '@/components/nav-menu';
import { NavDocuments2 } from '@/components/nav-menu-2';
import { NavDocuments3 } from '@/components/nav-menu-3';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },

  citoyennes: [
    {
      name: 'Nouvelles alertes',
      url: '/fr/tableau-de-bord',
      icon: IconDatabase,
    },
    {
      name: 'Reports',
      url: '#',
      icon: IconReport,
    },
    {
      name: 'Word Assistant',
      url: '#',
      icon: IconFileWord,
    },
  ],
  zones: [
    {
      name: 'Carte Interactive',
      url: '#',
      icon: IconMap,
    },
  ],
  interventions: [
    {
      name: 'En cours',
      url: '#',
      icon: Icon360View,
    },
    {
      name: 'Equipes disponibles',
      url: '#',
      icon: IconAlpha,
    },
    {
      name: 'Statistiques',
      url: '#',
      icon: IconChartArea,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!px-1 py-8"
            >
              <a href="#" className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="O'Secours Logo"
                  width={40}
                  height={40}
                  className="dark:invert"
                />
                <span className="text-xl font-black">O&apos;Secours</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavDocuments items={data.citoyennes} />
        <NavDocuments2 items={data.zones} />
        <NavDocuments3 items={data.interventions} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
