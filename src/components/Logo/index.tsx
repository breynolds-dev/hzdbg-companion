export function Logo( props: React.ComponentPropsWithoutRef<"svg"> ) {
  return (
    <>
      <div className=" flex flex-col text-justify">
        <span className="font-bold text-4xl text-gray-700 dark:text-gray-400 -mb-3 text-justify">
          HORIZON
        </span>
        <span className="font-bold text-2xl text-sky-700 dark:text-sky-400 -mb-3 text-justify">
          ZERO DAWN
        </span>
        <span className="text-xs text-end">
          Board Game Companion
        </span>
      </div>
    </>
  );
}
