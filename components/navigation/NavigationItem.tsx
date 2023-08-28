"use client";
import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import ActionTooltip from "../ActionTooltip";
type Props = {
  id: string;
  imageUrl: string;
  name: string;
};

function NavigationItem({ id, imageUrl, name }: Props) {
  const params = useParams();
  const router = useRouter();

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button
        onClick={() => router.push(`/servers/${id}`)}
        className="group relative flex items-center"
      >
        <div
          className={`absolute left-0 bg-primary rounded-r-full transition-all duration-300 w-1 ${
            params?.id !== id ? "group-hover:h-[1.25rem] h-2" : "h-[2.25rem]"
          }`}
        />

        <div
          className={` relative group flex mx-3 h-12 w-12 group-hover:rounded-[1rem] overflow-hidden transition-all duration-300 ${
            params?.id === id
              ? "bg-primary/10 text-primary rounded-[1rem]"
              : "rounded-[1.5rem]"
          }`}
        >
          <Image fill src={imageUrl} alt={name} />
        </div>
      </button>
    </ActionTooltip>
  );
}

export default NavigationItem;
