import * as Effect from "effect/Effect";

export interface TelemetryOwner {
  readonly source: "connect" | "openai" | "claude" | "device";
  readonly ownerId: string;
}

export const getServerOwners: Effect.Effect<ReadonlyArray<TelemetryOwner>> = Effect.succeed([]);
