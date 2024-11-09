import { createDomSignal } from "../../shared/lib/preact.ts";

const hideBalance = createDomSignal<boolean>(false);

export { hideBalance };
