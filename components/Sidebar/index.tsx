"use client";

import {
  LayoutDashboard,
  Library,
  ListMusic,
  LucideIcon,
  Mic2,
  Music,
  Music2,
  PlayCircle,
  Radio,
  User,
} from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

function SidebarMenu({
  Icon,
  text,
  active = false,
}: {
  Icon: LucideIcon;
  text: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex space-x-2 items-center w-full px-3 py-2 rounded hover:bg-slate-100 ${
        active ? "bg-slate-100" : ""
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="text-[15px] text-gray-700 font-medium">{text}</span>
    </button>
  );
}

function Sidebar() {
  return (
    <div className="space-y-5">
      {/* logo with Title */}
      <div className="flex items-center gap-x-2">
        <Music className="w-7 h-7" />
        <span className="font-bold text-2xl">Music</span>
      </div>

      <div className="space-y-2">
        <h1 className="font-semibold text-lg ml-2">Discover</h1>

        <div className="space-y-1">
          <SidebarMenu Icon={PlayCircle} text="Listen Now" active={true} />
          <SidebarMenu Icon={LayoutDashboard} text="Browser" />
          <SidebarMenu Icon={Radio} text="Radio" />
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="font-semibold text-lg ml-2">Library</h1>

        <div className="space-y-1">
          <SidebarMenu Icon={ListMusic} text="Playlists" />
          <SidebarMenu Icon={Music2} text="Songs" />
          <SidebarMenu Icon={User} text="Made for You" />
          <SidebarMenu Icon={Mic2} text="Artist" />
          <SidebarMenu Icon={Library} text="Albums" />
        </div>
      </div>
      <div className="space-y-2 ">
        <h1 className="font-semibold text-lg ml-2">Playlists</h1>

        <ScrollArea className="h-60">
          <div className="space-y-1">
            <SidebarMenu Icon={ListMusic} text="Recently Added" />
            <SidebarMenu Icon={ListMusic} text="Recently Played" />
            <SidebarMenu Icon={ListMusic} text="Top Songs" />
            <SidebarMenu Icon={ListMusic} text="Top Albums" />
            <SidebarMenu Icon={ListMusic} text="Top Artists" />
            <SidebarMenu Icon={ListMusic} text="Bedtime Beats" />
            <SidebarMenu Icon={ListMusic} text="Feelings Happy" />
            <SidebarMenu Icon={ListMusic} text="I Miss Pop" />
            <SidebarMenu Icon={ListMusic} text="Hindi Song" />
            <SidebarMenu Icon={ListMusic} text="Malaylam Songs" />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default Sidebar;
