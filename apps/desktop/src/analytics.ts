type JsonValue =
  | boolean
  | number
  | string
  | null
  | undefined
  | JsonValue[]
  | { [key: string]: JsonValue };

type AnalyticsEvent = { event: string; [key: string]: JsonValue };

export const analyticsCommands = {
  clearGroups: async () => undefined,
  event: async (_event: AnalyticsEvent) => undefined,
  eventFireAndForget: async (_event: AnalyticsEvent) => undefined,
  identify: async (_id: string, _properties: Record<string, JsonValue>) =>
    undefined,
  setDisabled: async (_disabled: boolean) => undefined,
  setProperties: async (_properties: Record<string, unknown>) => undefined,
};

export function trackAnalyticsEvent(
  _event: string,
  _properties: Record<string, JsonValue> = {},
) {}
