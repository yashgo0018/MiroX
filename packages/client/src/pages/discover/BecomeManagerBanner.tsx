import FlexSeparator from "../../shared/components/FlexSeparator.tsx";

export default function BecomeManagerBanner() {
  return (
    <a
      href="/new-manager"
      className="flex text-xxs p-2 primary rounded-sm items-center relative mt-1 active:scale-105 duration-150"
    >
      <img
        src="/images/manager.webp"
        alt="asset manager"
        className={"size-10 absolute left-2 bottom-1 object-contain"}
      />

      <FlexSeparator size="full" />

      <span className={"pr-2"}>
        Become an asset manager, enjoy upto 15% Profit share
      </span>
    </a>
  );
}
