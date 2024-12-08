type ProtocolName =
  | "web+example"
  | "web+jngl"
  | "web+jnglstore"
  | "web+service"
  | "web+app"
  | "web+music"
  | (string & NonNullable<unknown>);

export interface ProtocolHandler {
  protocol: ProtocolName;
  url: string;
}
