# Agent Sprint

**Sales Preparation Agent / 销售拜访准备 Agent**

14 天 Agent 应用开发冲刺项目。

## 项目结构

```
├─ apps/
│  ├─ web/                         # Next.js 前端
│  └─ api/                         # 独立 Node API（Hono）
├─ packages/
│  ├─ agent-core/                  # Agent 运行时核心
│  │  ├─ src/raw-agent/            # 原生 Tool Calling Loop
│  │  ├─ src/sdk-agent/            # Agents SDK 版本
│  │  ├─ src/tools/
│  │  ├─ src/runtime/
│  │  ├─ src/guardrails/
│  │  └─ src/events/
│  ├─ knowledge/                   # RAG 知识库
│  ├─ mcp-client/                  # MCP Client 适配器
│  ├─ shared/                      # 共享类型与工具
│  └─ observability/               # Tracing、日志、指标
├─ services/
│  └─ sales-tools-mcp/             # MCP Server
├─ database/
│  ├─ migrations/
│  └─ seed/
├─ evals/
│  ├─ cases/
│  ├─ runners/
│  └─ reports/
├─ docs/
│  ├─ daily/
│  ├─ weekly/
│  ├─ architecture/
│  ├─ decisions/
│  └─ backlog.md
├─ docker-compose.yml
└─ .env.example
```

## 快速开始

```bash
pnpm install
pnpm dev
```

## 命令

| 命令 | 说明 |
|---|---|
| `pnpm dev` | 启动所有开发服务 |
| `pnpm build` | 构建所有包 |
| `pnpm typecheck` | TypeScript 类型检查 |
| `pnpm test` | 运行所有测试 |
| `pnpm eval` | 运行 Agent 评测集 |
| `pnpm lint` | 代码检查 |

## 环境变量

复制 `.env.example` 为 `.env` 并填入配置。