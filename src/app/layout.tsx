import type { Metadata } from "next";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    default: "Horizon Zero Dawn: The Board Game - Companion App",
    template: "%s - HZDBG Companion App",
  },
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html
      className="h-full"
      lang="en"
      suppressHydrationWarning>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
