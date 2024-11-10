import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import { Accordion } from "../../shared/components/radix.ts";
import { hideBalance } from "./signals.ts";

export default function AssetManagerList() {
  return (
    <Accordion.Root
      className="flex flex-col gap-y-3"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Manager value="item-1" />
      <Manager value="item-2" />
      <Manager value="item-3" />
    </Accordion.Root>
  );
}

function Manager(props: { value: string }) {
  return (
    <Accordion.Item
      value={props.value}
      className="data-[state=open]:bg-muted/20 p-2 duration-300 rounded data-[state=open]:motion-preset-fade-md"
    >
      <Accordion.Header>
        <Accordion.Trigger className="flex w-full">
          <img
            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg"
            className={"rounded-lg object-cover size-10"}
            alt="manager"
          />
          <div className="px-2 text-left">
            <p className={"text-sm font-medium"}>
              Rowan McDonald{" "}
              <span className={"text-primary/60 pl-1 text-xs scale-90"}>
                {5.5}%
              </span>
            </p>
            <p className={"text-xxs text-foreground/60"}>Deposited 100k</p>
          </div>

          <FlexSeparator size="full" />

          <div className="">
            <p className={"font-semibold text-sm"}>
              {hideBalance.value ? "******" : "122.9513"}
              <span className={"pl-1 text-foreground/60 text-xxs"}>USD</span>
            </p>

            <p className={"text-xs text-end text-gain"}>
              {hideBalance.value ? "******" : "+2.13%"}
            </p>
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="data-[state=open]:motion-preset-slide-down">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quas
        quibusdam? Voluptas, ad illo. Sequi et, ullam autem aliquid dolor
        consectetur odit?
      </Accordion.Content>
    </Accordion.Item>
  );
}
