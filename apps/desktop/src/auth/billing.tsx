import type { ReactNode } from "react";

import { type BillingAccess, BillingContext } from "./billing-context";

const localFirstAccess: BillingAccess = {
  entitlements: [],
  subscriptionStatus: null,
  isPro: true,
  isLite: false,
  isPaid: true,
  isTrialing: false,
  hasPaymentMethod: false,
  trialEnd: null,
  trialDaysRemaining: null,
  cancelAtPeriodEnd: false,
  currentPeriodEnd: null,
  plan: "pro",
  isReady: true,
  canStartTrial: { data: false, isPending: false },
  upgradeToPro: () => {},
  isUpgradingToPro: false,
};

export function BillingProvider({ children }: { children: ReactNode }) {
  return (
    <BillingContext.Provider value={localFirstAccess}>
      {children}
    </BillingContext.Provider>
  );
}
