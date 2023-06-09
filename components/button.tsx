'use client'
import * as React from "react";
import { cva } from "class-variance-authority";
import '@/styles/button.css'

const button = cva("button", {
  variants: { isBusy: { true: "is-busy" } },
  defaultVariants: {
    isBusy: false,
  },
});

export const ButtonUi = () => {
  const [isBusy, setIsBusy] = React.useState(false);
  const [aspectRatio, setAspectRatio] = React.useState(2);

  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      setAspectRatio(ref.current.clientWidth / ref.current.clientHeight);
    }
  }, []);

  return (
    <button
      ref={ref}
      className='disco'
      style={{
        ["--button-aspect-ratio" as string]: aspectRatio,
      }}
      onClick={() => setIsBusy((wasBusy) => !wasBusy)}
    >
      <span className="button__content">
        <span
          {...(isBusy ? { role: "progressbar" } : {})}
          aria-hidden={!isBusy}
        >
          {isBusy ? "Uploading" : "Upload"}
        </span>
      </span>
      <span aria-hidden className="button__disco" />
    </button>
  );
};
