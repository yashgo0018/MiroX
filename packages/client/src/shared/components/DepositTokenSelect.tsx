import Icon from "./Icon.tsx";
import { Select } from "./radix.ts";

const allowedTokens = [
  { name: "BNB", icon: "https://cryptologos.cc/logos/bnb-bnb-logo.png" },
  { name: "USDT", icon: "https://cryptologos.cc/logos/tether-usdt-logo.png" },
  { name: "USDC", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png" },
  { name: "DOGE", icon: "https://cryptologos.cc/logos/dogecoin-doge-logo.png" },
];

export default function DepositTokenSelect() {
  return (
    <Select.Root>
      <Select.Trigger
        className="base invert rounded text-xs active:scale-75 duration-150"
        aria-label="Token"
      >
        <Select.Value placeholder="Select token" />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="">
          <Select.ScrollUpButton className="">
            <Icon name="ChevronUp" />
          </Select.ScrollUpButton>

          <Select.Viewport className="base p-2 rounded border flex flex-col gap-y-4">
            {allowedTokens.map((token, key) => (
              <Select.Item
                value={token.name}
                key={key}
              >
                <Select.ItemIndicator className="flex items-center gap-x-3">
                  <img
                    src={token.icon}
                    alt={token.name}
                    className={"size-8"}
                  />
                  <Select.ItemText>
                    {token.name}
                  </Select.ItemText>
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>

          <Select.ScrollDownButton className="SelectScrollButton">
            <Icon name="ChevronDown" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
