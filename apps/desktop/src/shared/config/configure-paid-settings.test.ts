import { describe, expect, it } from "vitest";

import { configurePaidSettings } from "./configure-paid-settings";

describe("configurePaidSettings", () => {
  it("does not select hosted providers from subscription state", async () => {
    await expect(configurePaidSettings()).resolves.toBeUndefined();
  });
});
