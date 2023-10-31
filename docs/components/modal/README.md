# Modal 弹窗

## 基础用法

<d-modalDemo></d-modalDemo>

## API

|     名称      |      类型       | 默认值 | 说明                      | 必传 |
| :-----------: | :-------------: | :----: | ------------------------- | ---- |
| v-model:value |     boolean     |   -    | 是否可见                  | Y    |
|     title     | string / `slot` |   -    | 标题 `可插槽（优先）`     | N    |
|  mask-close   |     boolean     |  true  | 点击遮罩层是否允许关闭    | N    |
|   position    |     string      | `top`  | 弹窗位置 `top` `center`   | N    |
|     mask      |     boolaen     |  true  | 是否显示遮罩层            | N    |
|   closeBtn    | string / `slot` |   -    | 关闭按钮 `可插槽（优先）` | N    |
