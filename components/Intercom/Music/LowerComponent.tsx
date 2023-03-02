"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { moredata } from "./music.data";

function LowerComponent() {
  return (
    <ScrollArea orientation="horizontal" className="w-[100%]">
      <div className="flex gap-5">
        {moredata.map((track) => (
          <div key={track.image}>
            <div className="overflow-hidden rounded-lg h-40 w-40">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={track.image}
                  fill
                  alt={track.title}
                  className="w-full h-full object-center object-cover  hover:scale-110 transition-all"
                />
              </AspectRatio>
            </div>

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

export default LowerComponent;
