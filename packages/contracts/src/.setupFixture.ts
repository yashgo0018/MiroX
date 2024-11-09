import runtime from "../runtime.local.ts";

export function setupFixture() {
  const [owner, acc1, acc2] = runtime.clients;

  // Everything to be done during integrated setup

  return {
    owner,
    acc1,
    acc2,
  };
}
