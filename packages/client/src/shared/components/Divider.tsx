import { cn } from "../lib/tailwind.ts";

interface IDividerProps {
  className?: string;
  children?: preact.VNode;
}

export default function Divider(props: IDividerProps) {
  return (
    <figure className={"relative self-stretch"} role="separator">
      <span
        className={cn(
          "basis-2px self-center content-visible flex-1 bg-muted",
          props.className,
        )}
      />
      {props.children}
    </figure>
  );
}
