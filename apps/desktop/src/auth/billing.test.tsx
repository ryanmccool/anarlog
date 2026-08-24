import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BillingProvider } from "./billing";
import { useBillingAccess } from "./billing-context";

function Access() {
  const billing = useBillingAccess();

  return (
    <div>
      {String(billing.isReady)}:{String(billing.isPro)}:{String(billing.isPaid)}
      :{billing.plan}
    </div>
  );
}

describe("BillingProvider", () => {
  it("makes former Pro features available without an account", () => {
    render(
      <BillingProvider>
        <Access />
      </BillingProvider>,
    );

    expect(screen.getByText("true:true:true:pro")).toBeTruthy();
  });
});
