type ErrorContextValue = null | boolean | number | string;
type SeverityLevel = "debug" | "error" | "fatal" | "info" | "log" | "warning";

const USER_ERROR_MARKERS = [
  "credit balance is too low",
  "incorrect api key",
  "insufficient_quota",
  "invalid api key",
  "not enough credits",
  "payment required",
  "quota exceeded",
];

function serialize(value: unknown): string {
  if (typeof value === "string") return value;
  if (value instanceof Error) return `${value.name}: ${value.message}`;

  try {
    return JSON.stringify(value) ?? "";
  } catch {
    return "";
  }
}

export function isUserError(value: unknown): boolean {
  const text = serialize(value).toLowerCase();
  return USER_ERROR_MARKERS.some((marker) => text.includes(marker));
}

export function operationalErrorMetadata(error: unknown) {
  const record =
    error && typeof error === "object"
      ? (error as Record<string, unknown>)
      : {};
  const statusValue = record.status ?? record.statusCode;

  return {
    type: typeof record.name === "string" ? record.name : "Error",
    code: typeof record.code === "string" ? record.code : undefined,
    stage: typeof record.stage === "string" ? record.stage : undefined,
    status: typeof statusValue === "number" ? statusValue : undefined,
  };
}

export function normalizeOperationalError(
  error: unknown,
  operation: string,
): Error {
  if (error instanceof Error) return error;
  return new Error(`${operation} failed: ${serialize(error).slice(0, 256)}`);
}

export function sanitizeErrorEvent<T>(event: T): T | null {
  return isUserError(event) ? null : event;
}

export function initializeErrorReporting() {}

export async function setErrorReportingEnabled(_enabled: boolean) {}

export function captureOperationalError(
  error: unknown,
  _options: {
    operation: string;
    level?: SeverityLevel;
    tags?: Record<string, ErrorContextValue>;
    context?: Record<string, ErrorContextValue>;
  },
) {
  if (isUserError(error)) return;
  return normalizeOperationalError(error, _options.operation);
}

export function setErrorReportingUser(_userId: string | null) {}
