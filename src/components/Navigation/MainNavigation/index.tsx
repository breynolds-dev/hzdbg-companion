"use client";

import { Button } from "@/components/Button";

import { navigationItems } from "../constants";
import { NavigationGroup } from "../NavigationGroup";
import { TopLevelNavItem } from "../TopLevelNavItem";

export const MainNavigation = ( props: React.ComponentPropsWithoutRef<"nav"> ) => {
  return (
    <nav {...props}>
      <ul role="list">
        <TopLevelNavItem href="/">API</TopLevelNavItem>
        <TopLevelNavItem href="#">Documentation</TopLevelNavItem>
        <TopLevelNavItem href="#">Support</TopLevelNavItem>
        {navigationItems.map( ( group, groupIndex ) => (
          <NavigationGroup
            className={groupIndex === 0 ? "md:mt-0" : ""}
            group={group}
            key={group.title}
          />
        ) )}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button
            className="w-full"
            href="#"
            variant="filled"
          >
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  );
};
