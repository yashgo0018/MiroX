import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";
import { hideBalance } from "./signals.ts";

export default function Header() {
  return (
    <section className={"flex flex-col"}>
      <h1 className={""}>Overview</h1>

      <FlexSeparator size="md" />

      <p
        className={"text-xs text-foreground/60 font-light flex items-center gap-x-2"}
        onClick={() => hideBalance.value = !hideBalance.peek()}
      >
        Total Balance
        <button>
          <Icon
            name={!hideBalance.value ? "EyeOff" : "Eye"}
            className="size-3"
          />
        </button>
      </p>
      <FlexSeparator size="xs" />
      <p className={"font-medium text-lg"}>
        {hideBalance.value ? "******" : "808.9513"}
        <span className={"text-xxs ml-2 text-foreground/60"}>USD</span>
      </p>
    </section>
  );
}
