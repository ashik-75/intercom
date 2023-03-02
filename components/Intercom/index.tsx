import { Plus, Podcast } from "lucide-react";
import Ping from "../Ping";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Account from "./Accout";
import LowerComponent from "./Music/LowerComponent";
import UpperComponent from "./Music/UpperComponent";

export function InterCom() {
  return (
    <Tabs defaultValue="music" className="w-full relative">
      <Account />

      <TabsList>
        <TabsTrigger value="music">Music</TabsTrigger>
        <TabsTrigger value="podcast">
          <span className="mr-2">Podcast</span>

          <Ping />
        </TabsTrigger>
        <TabsTrigger value="live" disabled>
          Live
        </TabsTrigger>
      </TabsList>
      <TabsContent value="music">
        <div>
          <div>
            <h1 className="font-bold text-2xl">Listen Now</h1>
            <p className=" text-gray-500">Top picks for you. Update daily</p>
            <p className="bg-gray-200 h-[1px] w-full my-4"></p>
          </div>
          <UpperComponent />
          <div className="mt-5">
            <h1 className="font-bold text-2xl">Made for You</h1>
            <p className=" text-gray-500">
              Your personal playlists. Updated daily.
            </p>
            <p className="bg-gray-200 h-[1px] w-full my-4"></p>
          </div>
          <LowerComponent />
        </div>
      </TabsContent>
      <TabsContent value="podcast">
        <div>
          <h1 className="font-bold text-2xl">New Episodes</h1>
          <p className=" text-gray-500 mt-1">
            Your favourite podcast. Update daily
          </p>
          <p className="bg-gray-200 h-[1px] w-full my-4"></p>

          <div className="h-[400px] border-2 border-dashed rounded flex justify-center items-center">
            <div className="flex flex-col items-center space-y-2 p-3">
              <Podcast className="h-8 w-8" />
              <h2 className="text-xl font-bold">No episodes added</h2>
              <p className="text-gray-500 text-center">
                You have not added any podcasts. Add one below.
              </p>

              <button className="flex gap-x-2 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 items-center bg-black text-white px-2 py-1 rounded-lg">
                <Plus className="h-5 w-5" />
                <span className="font-medium ">Add Podcast</span>
              </button>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
