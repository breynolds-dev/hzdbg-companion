import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";
import { type Section } from "@/context";
import "@/styles/tailwind.css";
import glob from "fast-glob";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Horizon Zero Dawn: The Board Game - Companion App",
    template: "%s - HZDBG Companion App",
  },
};

export default async function RootLayout( {
  children,
}: {
  children: React.ReactNode
} ) {
  const pages = await glob( "**/*.mdx", { cwd: "src/app" } );
  const allSectionsEntries = ( await Promise.all(
    pages.map( async ( filename ) => [
      "/" + filename.replace( /(^|\/)page\.mdx$/, "" ),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ( await import( `./${filename}` ) ).sections,
    ] ),
  ) ) as [string, Section[]][];
  const allSections = Object.fromEntries( allSectionsEntries );

  return (
    <html
      className="h-full"
      lang="en"
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
