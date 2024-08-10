"use client";

import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { forwardRef, useState } from "react";

function CheckIcon( props: React.ComponentPropsWithoutRef<"svg"> ) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      {...props}
    >
      <circle
        cx="10"
        cy="10"
        r="10"
        strokeWidth="0"
      />
      <path
        d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function FeedbackButton(
  props: Omit<React.ComponentPropsWithoutRef<"button">, "className" | "type">,
) {
  return (
    <button
      className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
      type="submit"
      {...props}
    />
  );
}

const FeedbackForm = forwardRef<
  React.ElementRef<"form">,
  React.ComponentPropsWithoutRef<"form">
>( function FeedbackForm( { className, onSubmit, ...props }, ref ) {
  return (
    <form
      {...props}
      className={clsx(
        className,
        "absolute inset-0 flex items-center justify-center gap-6 md:justify-start",
      )}
      onSubmit={onSubmit}
      ref={ref}
    >
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Was this page helpful?
      </p>
      <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
        <FeedbackButton data-response="yes">Yes</FeedbackButton>
        <div className="bg-zinc-900/10 dark:bg-white/10" />
        <FeedbackButton data-response="no">No</FeedbackButton>
      </div>
    </form>
  );
} );

const FeedbackThanks = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>( function FeedbackThanks( { className, ...props }, ref ) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "absolute inset-0 flex justify-center md:justify-start",
      )}
      ref={ref}
    >
      <div className="flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pl-1.5 pr-3 text-sm text-emerald-900 ring-1 ring-inset ring-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-200 dark:ring-emerald-500/30">
        <CheckIcon className="h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200" />
        Thanks for your feedback!
      </div>
    </div>
  );
} );

export function Feedback() {
  const [ submitted, setSubmitted ] = useState( false );

  function onSubmit( event: React.FormEvent<HTMLFormElement> ) {
    event.preventDefault();

    // event.nativeEvent.submitter.dataset.response
    // => "yes" or "no"

    setSubmitted( true );
  }

  return (
    <div className="relative h-8">
      <Transition show={!submitted}>
        <FeedbackForm
          className="duration-300 data-[leave]:pointer-events-none data-[closed]:opacity-0"
          onSubmit={onSubmit}
        />
      </Transition>
      <Transition show={submitted}>
        <FeedbackThanks className="delay-150 duration-300 data-[closed]:opacity-0" />
      </Transition>
    </div>
  );
}
