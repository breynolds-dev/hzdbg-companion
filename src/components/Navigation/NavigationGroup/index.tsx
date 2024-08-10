"use client";

import {
  useIsInsideMobileNavigation,
  useSectionStore,
} from "@/context";
import { useInitialValue } from "@/hooks";
import clsx from "clsx";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { usePathname } from "next/navigation";

import { ActivePageMarker } from "../ActivePageMarker";
import { NavGroup } from "../constants";
import { NavLink } from "../NavLink";
import { VisibleSectionHighlight } from "../VisibleSectionHighlight";

export const NavigationGroup = ( {
  className,
  group,
}: {
  className?: string
  group: NavGroup
} ) => {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  const isInsideMobileNavigation = useIsInsideMobileNavigation();
  const [ pathname, sections ] = useInitialValue(
    [ usePathname(), useSectionStore( ( s ) => s.sections ) ],
    isInsideMobileNavigation,
  );

  const isActiveGroup =
    group.links.findIndex( ( link ) => link.href === pathname ) !== -1;

  return (
    <li className={clsx( "relative mt-6", className )}>
      <motion.h2
        className="text-xs font-semibold text-zinc-900 dark:text-white"
        layout="position"
      >
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight
              group={group}
              pathname={pathname}
            />
          )}
        </AnimatePresence>
        <motion.div
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
          layout
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker
              group={group}
              pathname={pathname}
            />
          )}
        </AnimatePresence>
        <ul
          className="border-l border-transparent"
          role="list"
        >
          {group.links.map( ( link ) => (
            <motion.li
              className="relative"
              key={link.href}
              layout="position"
            >
              <NavLink
                active={link.href === pathname}
                href={link.href}
              >
                {link.title}
              </NavLink>
              <AnimatePresence
                initial={false}
                mode="popLayout"
              >
                {link.href === pathname && sections.length > 0 && (
                  <motion.ul
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                    initial={{ opacity: 0 }}
                    role="list"
                  >
                    {sections.map( ( section ) => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          isAnchorLink
                          tag={section.tag}
                        >
                          {section.title}
                        </NavLink>
                      </li>
                    ) )}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ) )}
        </ul>
      </div>
    </li>
  );
};
