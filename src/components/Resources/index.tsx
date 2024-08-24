"use client";

import { GridPattern } from "@/components/GridPattern";
import { Heading } from "@/components/Heading";
import {
  ChatBubbleIcon,
  EnvelopeIcon,
  UserIcon,
  UsersIcon,
} from "@/icons";
import {
  motion,
  type MotionValue,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";

interface IResource {
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  name: string
  pattern: Omit<
    React.ComponentPropsWithoutRef<typeof GridPattern>,
    "height" | "width" | "x"
  >
}

const resources: IResource[] = [
  {
    description:
      "Learn about the contact model and how to create, retrieve, update, delete, and list contacts.",
    href: "/contacts",
    icon: UserIcon,
    name: "Contacts",
    pattern: {
      squares: [
        [ 0, 1 ],
        [ 1, 3 ],
      ],
      y: 16,
    },
  },
  {
    description:
      "Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.",
    href: "/conversations",
    icon: ChatBubbleIcon,
    name: "Conversations",
    pattern: {
      squares: [
        [ -1, 2 ],
        [ 1, 3 ],
      ],
      y: -6,
    },
  },
  {
    description:
      "Learn about the message model and how to create, retrieve, update, delete, and list messages.",
    href: "/messages",
    icon: EnvelopeIcon,
    name: "Messages",
    pattern: {
      squares: [
        [ 0, 2 ],
        [ 1, 4 ],
      ],
      y: 32,
    },
  },
  {
    description:
      "Learn about the group model and how to create, retrieve, update, delete, and list groups.",
    href: "/groups",
    icon: UsersIcon,
    name: "Groups",
    pattern: {
      squares: [ [ 0, 1 ] ],
      y: 22,
    },
  },
];

function ResourceIcon( { icon: Icon }: { icon: IResource["icon"] } ) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400" />
    </div>
  );
}

function ResourcePattern( {
  mouseX,
  mouseY,
  ...gridProps
}: {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
} & IResource["pattern"] ) {
  const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          height={56}
          width={72}
          x="50%"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          height={56}
          width={72}
          x="50%"
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}

function Resource( { resource }: { resource: IResource } ) {
  const mouseX = useMotionValue( 0 );
  const mouseY = useMotionValue( 0 );

  function onMouseMove( {
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent<HTMLDivElement> ) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set( clientX - left );
    mouseY.set( clientY - top );
  }

  return (
    <div
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
      key={resource.href}
      onMouseMove={onMouseMove}
    >
      <ResourcePattern
        {...resource.pattern}
        mouseX={mouseX}
        mouseY={mouseY}
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ResourceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  );
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading
        id="resources"
        level={2}
      >
        Resources
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {resources.map( ( resource ) => (
          <Resource
            key={resource.href}
            resource={resource}
          />
        ) )}
      </div>
    </div>
  );
}
