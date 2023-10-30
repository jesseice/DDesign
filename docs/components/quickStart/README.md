# 快速开始

## 安装

```shell
npm i ddesign-vue-next
pnpm add ddesign-vue-next
yarn add ddesign-vue-next
```

## 使用

```javascript
// 无论哪种引入都要注入样式
import "ddesign-vue-next/dist/style.css";
```

### main 中注入 全局

```javascript
import ddesign from "ddesign-vue-next";

app.use(ddesign);
```

### main 中 按需引入

```javascript
import { Button } from "ddesign-vue-next";

app.use(Button);
```

### tsx/jsx 中使用

```tsx
import { defineComponent } from "vue";
import { Button } from "ddesign-vue-next";
export default defineComponent({
  setup() {
    return () => <Button>Hello World</Button>;
  },
});
```
