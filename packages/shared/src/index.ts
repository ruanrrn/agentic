export type TokenUsage = {
  input: number;
  output: number;
  total: number;
};

export type AgentStatus =
  | "running"
  | "waiting_approval"
  | "completed"
  | "failed";