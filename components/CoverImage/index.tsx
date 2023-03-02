"use client";

import Image from "next/image";

import { AspectRatio } from "../ui/aspect-ratio";

export function CoverImage() {
  return (
    <div className="w-[500px]">
      <AspectRatio ratio={16 / 9} className="bg-slate-50 dark:bg-slate-800">
        <Image
          src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
          alt="Photo by Alvaro Pinot"
          fill
          className="rounded-lg object-cover"
        />
      </AspectRatio>
    </div>
  );
}
