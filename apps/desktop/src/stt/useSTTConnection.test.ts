import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react";
import { createElement, type ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@anlg/plugin-local-stt", () => ({
  commands: {
    getServerForModel: vi.fn(),
    isModelDownloaded: vi.fn(),
  },
}));

vi.mock("~/settings/providers", () => ({
  useAiProvider: () => ({
    type: "stt",
    base_url: "https://api.deepgram.com/v1",
    api_key: "user-key",
  }),
}));

vi.mock("~/shared/config", () => ({
  useConfigValues: () => ({
    current_stt_provider: "deepgram",
    current_stt_model: "nova-3-general",
  }),
}));

vi.mock("~/stt/capabilities", () => ({
  isOnDeviceSttModel: () => false,
  isRealtimeLocalModel: () => false,
}));

import { useSTTConnection } from "./useSTTConnection";

describe("useSTTConnection", () => {
  it("uses an explicitly configured cloud provider", () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    const wrapper = ({ children }: { children: ReactNode }) =>
      createElement(QueryClientProvider, { client: queryClient }, children);

    const { result } = renderHook(() => useSTTConnection(), { wrapper });

    expect(result.current.conn).toEqual({
      provider: "deepgram",
      model: "nova-3-general",
      baseUrl: "https://api.deepgram.com/v1",
      apiKey: "user-key",
    });
  });
});
