import { InterCom } from "@/components/Intercom";
import MobileMenu from "@/components/MobileMenu";

import Sidebar from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

function Homepage() {
  return (
    <div className="p-1 h-screen">
      <div className=" h-[100%] max-w-7xl mx-auto flex flex-col rounded-lg shadow-sm md:overflow-hidden">
        <div className="h-auto flex justify-between items-center border rounded-t-lg">
          <Topbar />

          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
        <div className="flex-1 bg-gradient-to-b from-pink-700  to-purple-900 p-2 md:p-5">
          <div className="bg-white rounded-lg h-full grid grid-cols-12 divide-x">
            <div className="hidden md:block md:col-span-3 p-5">
              <Sidebar />
            </div>
            <div className="col-span-12 md:col-span-9 p-5">
              <InterCom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
