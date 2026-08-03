# 补齐 `agent-sprint` Monorepo 目录骨架

## 技术选型

| 项目 | 选型 |
|------|------|
| 包管理器 | pnpm (workspaces) |
| API 框架 | Hono（apps/api） |
| 前端 | Next.js（apps/web）— 只搭占位不实现 |

## 文件结构

项目直接在 `E:\Develope\Agentic\` 下创建（`docs/` 已存在，保持不变）。

```
E:\Develope\Agentic\
├─ pnpm-workspace.yaml        # 声明 workspace 包
├─ package.json                # 根 workspace（private）
├─ tsconfig.base.json          # 共享 TS 配置（strict）
├─ .gitignore                  # node_modules, dist, .env
├─ .env.example                # 环境变量模板
├─ README.md                   # 项目占位 README
│
├─ apps/
│  ├─ web/
│  │  ├─ package.json          # next.js 应用
│  │  ├─ tsconfig.json         # 继承 base
│  │  └─ next-env.d.ts         # Next.js 类型占位
│  │
│  └─ api/
│     ├─ package.json          # Hono 应用
│     ├─ tsconfig.json
│     └─ src/
│        └─ .gitkeep
│
├─ packages/
│  ├─ agent-core/
│  │  ├─ package.json          # @agent-sprint/agent-core
│  │  ├─ tsconfig.json
│  │  └─ src/
│  │     └─ index.ts           # 最小导出占位
│  │
│  └─ shared/
│     ├─ package.json          # @agent-sprint/shared
│     ├─ tsconfig.json
│     └─ src/
│        └─ index.ts           # 最小导出占位
│
├─ evals/
│  ├─ package.json             # vitest 测试套件
│  ├─ tsconfig.json
│  └─ .gitkeep
│
└─ docs/
   ├─ two-week-plan.md         # 已存在，不动
   └─ daily/                   # 后续每日学习记录
      └─ .gitkeep
```

## 关键约定

- 包命名域：@agent-sprint/xxx
- TypeScript strict mode（tsconfig.base.json 统一约束）
- apps/* 和 packages/* 通过 pnpm workspace 互引
- 所有源代码入口统一为 src/index.ts
- 只创建文件骨架与占位，不写任何业务实现代码
- 不安装依赖（pnpm install 由你执行）

## 实施步骤

1. 创建根配置（pnpm-workspace.yaml, package.json, tsconfig.base.json, .gitignore, .env.example, README.md）
2. 创建 apps/web 骨架（package.json, tsconfig.json, next-env.d.ts）
3. 创建 apps/api 骨架（package.json, tsconfig.json, src/.gitkeep）
4. 创建 packages/agent-core 骨架（package.json, tsconfig.json, src/index.ts）
5. 创建 packages/shared 骨架（package.json, tsconfig.json, src/index.ts）
6. 创建 evals 骨架（package.json, tsconfig.json, .gitkeep）
7. 创建 docs/daily 占位（.gitkeep）

总计创建约 20 个文件，不涉及 pnpm install 或业务代码。