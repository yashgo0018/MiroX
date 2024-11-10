import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";
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
              {hideBalance.value ? "******" : "2132.9513"}
              <span className={"pl-1 text-foreground/60 text-xxs"}>USD</span>
            </p>

            <p className={"text-xs text-end text-gain"}>
              {hideBalance.value ? "******" : "+2.13%"}
            </p>
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="data-[state=open]:motion-preset-slide-down">
        <TokensList />
      </Accordion.Content>
    </Accordion.Item>
  );
}

const tokens = [
  {
    symbol: "SUI",
    name: "Sui Chain",
    image: "https://cryptologos.cc/logos/sui-sui-logo.png",
    balance: "1200.13",
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    balance: "152.13",
  },

  {
    symbol: "UNI",
    name: "Uniswap",
    image: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
    balance: "121.13",
  },
  {
    symbol: "DOT",
    name: "Polkadot",
    image: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    balance: "12.13",
  },
  {
    symbol: "PEPE",
    name: "Pepecoin",
    image: "https://cryptologos.cc/logos/pepe-pepe-logo.png",
    balance: "11.54",
  },
];

function TokensList() {
  return (
    <div className={"flex flex-col py-2 px-1 divide-y"}>
      {tokens.map((token, key) => (
        <div className={"flex items-center py-3"}>
          <img
            src={token.image}
            alt={token.name}
            className={"size-10 aspect-square bg-foreground rounded-full object-contain motion-preset-slide-down-sm"}
            style={{ "--motion-delay": `${75 * key}ms` }}
          />
          <div
            className="motion-preset-slide-down px-3 basis-1/3"
            style={{ "--motion-delay": `${95 * key}ms` }}
          >
            <p className={"text-sm font-semibold"}>
              {token.symbol}
            </p>
            <p className={"text-xxs text-foreground/60"}>
              {token.name}
            </p>
          </div>

          <div
            className="motion-preset-slide-down flex flex-col items-center"
            style={{ "--motion-delay": `${125 * key}ms` }}
          >
            <button
              className={"size-7 destructive aspect-square rounded-full flex items-center justify-center"}
            >
              <Icon name="SquareArrowUp" className="size-5" weight="light" />
            </button>
            <p className={"text-foreground/50 text-xxs"}>Withdraw</p>
          </div>

          <FlexSeparator size="full" />

          <div
            className="flex flex-col items-end motion-preset-slide-down"
            style={{ "--motion-delay": `${155 * key}ms` }}
          >
            <p className={"font-semibold text-sm"}>
              {hideBalance.value ? "******" : token.balance}
              <span className={"pl-1 text-foreground/60 text-xxs"}>USD</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
