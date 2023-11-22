import { clsx } from "clsx";

interface ButtonProps {
  text?: string;
  secondary?: boolean;
}

export function Button({ text, secondary }: ButtonProps) {
  const classes = clsx(
    `h-8 px-6 font-light text-indigo-100 transition-colors duration-150 bg-slate-950 rounded-full focus:shadow-outline hover:opacity-75 `,
    { "border border-slate-950 bg-transparent text-slate-950": secondary }
  );
  return <button className={classes}>{text}</button>;
}
