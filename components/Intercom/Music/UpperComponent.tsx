"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { data } from "./music.data";

function UpperComponent() {
  return (
    <ScrollArea orientation="horizontal" className=" w-[100%]">
      <div className="flex gap-5">
        {data.map((track) => (
          <div key={track.image} className="w-[200px] md:w-[250px]">
            <AspectRatio ratio={3 / 4} className="overflow-hidden rounded-lg">
              <Image
                src={track.image}
                fill
                alt={track.title}
                className="  object-center object-cover  hover:scale-110 transition-all"
              />
            </AspectRatio>

            <div className="mt-3">
              <h3 className="font-semibold text-sm">{track.title}</h3>
              <p className="text-sm text-gray-600">{track.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export default UpperComponent;
