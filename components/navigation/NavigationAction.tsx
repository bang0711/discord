"use client";
import { Plus } from "lucide-react";
import React from "react";
import ActionTooltip from "../ActionTooltip";

type Props = {};

function NavigationAction({}: Props) {
  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button className="group flex items-center">
          <div className="flex mx-3 h-[3rem] w-[3rem] rounded-[1.5rem] group-hover:rounded-[1rem] transition-all duration-300 overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus
              className="group-hover:text-white transition-all duration-300 text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
}

export default NavigationAction;
