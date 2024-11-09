import Icon from "./Icon.tsx";
import { useLocation } from "preact-iso";
import type { IconName } from "./Icon.tsx";

export default function Navigation() {
  const location = useLocation();

  return (
    <div
      className={"fixed bottom-0 w-full flex base z-[9999] px-3 py-2 justify-between"}
    >
      <NavItem icon="DoorClosed" title="Discover" href="/discover" />
      <NavItem icon="ChartNoAxesColumn" title="Markets" href="/discover" />

      <button
        className={"flex flex-col items-center gap-y-1"}
        onClick={() => location.route("/mirox")}
      >
        <img
          src="/logo.png"
          alt="MiroX"
          className={"size-6 object-contain"}
        />
        <p className={"text-xs text-foreground/50"}>You</p>
      </button>

      <NavItem icon="BriefcaseBusiness" title="Manager" href="/manager" />
      <NavItem icon="Wallet" title="Portfolio" href="/portfolio" />
    </div>
  );
}

interface INavItem {
  icon: IconName;
  title: string;
  href: string;
}

function NavItem(props: INavItem) {
  const location = useLocation();

  return (
    <button
      className={"flex flex-col items-center gap-y-1 text-foreground/50"}
      onClick={() => location.route(props.href)}
    >
      <Icon name={props.icon} className={"size-6"} />
      <span className={"text-xs"}>
        {props.title}
      </span>
    </button>
  );
}
