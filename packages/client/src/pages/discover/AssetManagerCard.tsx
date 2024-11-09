import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";
import { Avatar } from "../../shared/components/radix.ts";
import RequestAssetManagementDrawer from "../../shared/components/RequestAssetManagementDrawerTrigger.tsx";

interface IAssetManagerCardProps {
  thumbnail: string;
  managerName: string;
  totalClients: number;
}

export default function AssetManagerCard(props: IAssetManagerCardProps) {
  return (
    <div className="flex flex-col border p-2 rounded relative">
      <div className="flex">
        <Avatar.Root>
          <Avatar.Image
            className={"size-8 object-cover primary rounded-full"}
            src={props.thumbnail}
            alt={props.managerName}
          />
        </Avatar.Root>

        <FlexSeparator size="sm" />

        <div className="flex flex-col">
          <p className={"font-medium text-sm tracking-tight"}>
            {props.managerName}
          </p>

          <p className={"text-xxs text-foreground/40 pt-px text-nowrap"}>
            Registered 273 Days ago
          </p>
        </div>
      </div>

      <FlexSeparator size="sm" />

      <div className="flex gap-x-2">
        <figure
          title="Total Clients"
          className={"flex items-center text-xxs muted w-max p-1 gap-x-1 rounded-sm"}
        >
          <Icon name="User" className="size-3" />
          <span>{props.totalClients}</span>
        </figure>

        <figure
          title="Positive feedback"
          className={"flex items-center text-xxs muted w-max p-1 gap-x-1 rounded-sm"}
        >
          <Icon name="ThumbsUp" className="size-3" />
          <span>92.4%</span>
        </figure>
      </div>

      <div className="flex pt-4">
        <div className="flex flex-col gap-y-1 items-center">
          <p className={"text-xs text-foreground/40"}>7D RoI</p>
          <p className={"text-xxs text-foreground/80"}>7.42%</p>
        </div>

        <FlexSeparator size="xl" />

        <div className="flex flex-col gap-y-1 items-center">
          <p className={"text-xs text-foreground/40"}>Profit Share</p>
          <p className={"text-xxs text-foreground/80"}>12.00%</p>
        </div>

        <FlexSeparator size="xl" />

        <div className="flex flex-col gap-y-1 items-center">
          <p className={"text-xs text-foreground/40"}>24h Volume</p>
          <p className={"text-xxs text-foreground/80"}>132k</p>
        </div>

        <FlexSeparator size="full" />

        <RequestAssetManagementDrawer>
          <div
            className={"btn-xs secondary self-center active:scale-90 duration-200 flex items-center"}
          >
            Request
          </div>
        </RequestAssetManagementDrawer>
      </div>

      <FlexSeparator size="full" />

      <div className="flex flex-col absolute right-2">
        <p className={"text-xxs"}>Most Traded</p>
        <div className="flex justify-end pt-1">
          <img
            className={"size-5 rounded-full absolute right-0"}
            src="https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png"
            alt="BNB"
          />
          <img
            className={"size-5 rounded-full absolute right-3"}
            src="https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png"
            alt="BNB"
          />
          <img
            className={"size-5 rounded-full absolute right-6"}
            src="https://img.freepik.com/premium-vector/pancake-swap-icon-logo-illustration_728139-123.jpg"
            alt="BNB"
          />
          <img
            className={"size-5 rounded-full absolute right-9"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsG_AW0Qb-FlSiKlnloEwJEBjQM0pvoyTfhQ&s"
            alt="BNB"
          />
        </div>
      </div>
    </div>
  );
}
