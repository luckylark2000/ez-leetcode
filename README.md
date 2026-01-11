# Ez LeetCode

LeetCode 刷题笔记

## 环境配置

安装 Bun，Windows 推荐使用 scoop 安装

VSCode 安装 Bun for Visual Studio Code 插件

为获得提示，安装 bun-types

```bash
bun add -d bun-types
```

tsconfig.json 配置，

```json
{
  "compilerOptions": {
    "types": ["bun-types"], // 添加这个
    "module": "esnext",
    "target": "esnext"
  }
}
```
