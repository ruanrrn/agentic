# Agent Sprint

Agent 应用开发的 14 天冲刺项目。

## 项目结构

```
├─ apps/
│  ├─ web/           # Next.js 前端
│  └─ api/           # Hono API 服务
├─ packages/
│  ├─ agent-core/    # Agent 运行时核心
│  └─ shared/        # 共享类型与工具
├─ evals/            # 评测集与测试
└─ docs/             # 学习记录与文档
```

## 快速开始

```bash
pnpm install
pnpm dev
```

## 环境变量

复制 `.env.example` 为 `.env` 并填入配置。