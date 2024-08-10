"use client";

import { remToPx } from "@/lib/remToPx";
import { motion } from "framer-motion";

import { NavGroup } from "../constants";

const itemHeight = remToPx( 2 );
const offset = remToPx( 0.25 );

export const ActivePageMarker = ( {
  group,
  pathname,
}: {
  group: NavGroup
  pathname: string
} ) => {
  const activePageIndex = group.links.findIndex( ( link ) => link.href === pathname );
  const top = offset + activePageIndex * itemHeight;

  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
        },
      }}
      className="absolute left-2 h-6 w-px bg-emerald-500"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      layout
      style={{ top }}
    />
  );
};
