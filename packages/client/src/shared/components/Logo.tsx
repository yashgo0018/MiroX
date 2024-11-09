import { cn } from "../lib/tailwind.ts";

interface ILogo {
  className?: string;
}

export default function Logo(props: ILogo) {
  return (
    <img
      className={cn("", props.className)}
      src="/logo.png"
      alt="Logo"
      role="img"
    />
  );
}
