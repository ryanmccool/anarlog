# Static Notes Local-First Roadmap

## Principles

- Notes, recordings, templates, and settings remain local by default.
- Cloud STT and LLM services require an explicit user-selected external API key or subscription.
- No Anarlog account, managed provider, sync, telemetry, or Pro gate remains.
- Sidebar visibility changes only through a user action.
- Keep current upstream templates and macOS permissions unless verification proves they fail.

## Completed

- [x] Back up the pre-fork Static Notes repository and create the Anarlog fork.
- [x] Remove Pro transcription gating and automatic paid-cloud STT fallback.
- [x] Remove managed Anarlog STT and LLM providers from settings and connection paths.
- [x] Clear legacy Anarlog STT selections rather than routing them to cloud.
- [x] Stop recording, custom-tab, docked-chat, and resize behavior from changing sidebar visibility.
- [x] Remove the Account settings destination and navigation item.
- [x] Disable desktop analytics calls with a local no-op adapter.
- [x] Remove the Rust/desktop analytics plugin, Tauri registration, permissions, and notification/window emitters.

## Telemetry

- [ ] Remove the remaining desktop analytics adapter/callers and analytics test mocks.
- [x] Remove frontend Sentry/error-reporting transport and dependency.
- [x] Remove Tauri crash reporting, persisted consent commands, startup reporting, and minidump handling.
- [ ] Remove API Sentry middleware, OpenTelemetry/Honeycomb export, trace context, and observability configuration. In progress.
- [x] Remove CLI Sentry/error-reporting.
- [ ] Remove remaining Sentry dependencies in tracing and managed-service crates.
- [ ] Verify no telemetry endpoint or SDK remains in desktop production dependencies.

## Accounts and billing

- [ ] Remove `AuthProvider`, auth context, sign-in/sign-out, token storage, and account onboarding.
- [ ] Remove billing provider/context/shim, trials, paywalls, upgrade flows, and Pro locks/copy.
- [ ] Remove the unused Account settings module and tests.
- [ ] Replace or remove account-dependent calendar, GitHub/todo, automation, and enterprise paths.

## Sync and collaboration

- [ ] Read and follow `crates/cloudsync/AGENTS.md` before changing CloudSync.
- [ ] Remove CloudSync runtime, settings, status UI, credentials, database configuration, and attachment sync.
- [ ] Remove teams/workspaces, shared notes, session sharing, invitations, delivery, and comments.
- [ ] Remove related Rust crates/plugins, Tauri commands, workspace dependencies, and tests.

## Managed services and AI safety

- [ ] Clear legacy Anarlog LLM selections.
- [ ] Audit STT and LLM execution paths for explicit external credentials and no managed fallback.
- [ ] Remove managed Anarlog API/Supabase/proxy clients and their unused server crates.

## Identity, data, and retained functionality

- [ ] Rebrand bundle IDs, app copy, icons, updater, release configuration, and documentation to Static Notes.
- [ ] Implement and test migration from existing Static Notes data into the retained schema.
- [ ] Verify templates across create, edit, restart, and selection flows.
- [ ] Verify macOS permission behavior manually and with focused tests where needed.

## Final verification

- [ ] Run formatting, lint, TypeScript typecheck, Rust `cargo check`, relevant tests, and i18n checks.
- [ ] Audit production dependencies and runtime network paths for accounts, sync, telemetry, and managed APIs.
- [ ] Document migration/release steps only once implementation is complete.
