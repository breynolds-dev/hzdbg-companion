import { Button } from "../button";

const guides = [
  {
    description: "Learn how to authenticate your API requests.",
    href: "/authentication",
    name: "Authentication",
  },
  {
    description: "Understand how to work with paginated responses.",
    href: "/pagination",
    name: "Pagination",
  },
  {
    description:
      "Read about the different types of errors returned by the API.",
    href: "/errors",
    name: "Errors",
  },
  {
    description:
      "Learn how to programmatically configure webhooks for your app.",
    href: "/webhooks",
    name: "Webhooks",
  },
];

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      Guides
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map( ( guide ) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button
                arrow="right"
                href={guide.href}
                variant="text"
              >
                Read more
              </Button>
            </p>
          </div>
        ) )}
      </div>
    </div>
  );
}
