import { cn } from "../lib/tailwind.ts";

interface ILoadingProps {
  className?: string;
}

export default function Loading(props: ILoadingProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center gap-y-5",
        props.className,
      )}
    >
      <span
        className={"font-bold text-xl"}
      >
        Loading
      </span>
    </div>
  );
}
