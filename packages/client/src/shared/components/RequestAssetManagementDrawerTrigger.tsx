import { parseFormEventData } from "../lib/utils.ts";
import type { Children, FormSubmitEvent } from "../types/utils.d.ts";
import DepositTokenSelect from "./DepositTokenSelect.tsx";
import { Drawer } from "./Drawer.tsx";
import { Form } from "./radix.ts";

interface IRequestAssetManagementDrawerProps {
  children: Children;
}

export default function RequestAssetManagementDrawer(
  props: IRequestAssetManagementDrawerProps,
) {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        {props.children}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed z-[99999] inset-0 backdrop-blur-sm" />
        <Drawer.Content className="h-fit fixed bottom-0 left-0 right-0 outline-none z-[99999]">
          <div className="p-4 base flex flex-col items-center">
            <Drawer.Handle />

            <Drawer.Title className={"mt-2"}>
              Request Asset Management
            </Drawer.Title>

            <Form.Root
              onSubmit={(
                event: FormSubmitEvent,
              ) => {
                const data = parseFormEventData(event);

                if (!data.email) throw new Error("Invalid email");

                event.preventDefault();
              }}
            >
              <Form.Field name="email">
                <div className={"flex justify-between mt-2"}>
                  <Form.Label>
                    Enter the amount to be allocated
                  </Form.Label>

                  <Form.Message
                    className="text-error"
                    match="valueMissing"
                  >
                    Please Enter Initial Amount
                  </Form.Message>

                  <Form.Message
                    className="text-error"
                    match="typeMismatch"
                  >
                    Please provide a valid amount
                  </Form.Message>
                </div>

                <Form.Control asChild>
                  <div className="flex gap-x-3">
                    <DepositTokenSelect />

                    <input
                      type="number"
                      placeholder="Enter Amount"
                      required
                    />
                  </div>
                </Form.Control>
              </Form.Field>

              <Form.Submit asChild>
                <button className={"btn primary w-full mt-4"}>
                  Next
                </button>
              </Form.Submit>
            </Form.Root>
          </div>
        </Drawer.Content>

        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
}
