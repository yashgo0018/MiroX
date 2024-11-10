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
        className="rounded text-xs active:scale-75 duration-150"
        aria-label="Token"
      >
        <Select.Value placeholder="Select token" />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="base p-2 rounded border z-[99999]">
          <Select.ScrollUpButton className="">
            <Icon name="ChevronUp" />
          </Select.ScrollUpButton>

          <Select.Viewport className="flex flex-col gap-y-4">
            {allowedTokens.map((token, key) => (
              <Select.Item
                value={token.name}
                key={key}
              >
                <div className="flex gap-x-2">
                  <Select.ItemText>
                    <img
                      src={token.icon}
                      alt={token.name}
                      className={"size-8 object-contain aspect-square"}
                    />
                  </Select.ItemText>
                  <span>
                    {token.name}
                  </span>
                </div>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
