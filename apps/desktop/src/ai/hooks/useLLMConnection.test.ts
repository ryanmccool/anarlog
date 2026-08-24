import { describe, expect, it } from "vitest";

import { normalizeLLMProviderId } from "./useLLMConnection";

describe("normalizeLLMProviderId", () => {
  it("preserves configured provider ids", () => {
    expect(normalizeLLMProviderId("openai")).toBe("openai");
  });
});
