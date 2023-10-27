# Button 按钮

常用的操作按钮。

## 基础用法

> 类型 `default` `primary` `success` `warning` `danger`

<d-button type="default">default</d-button>
<d-button type="primary">primary</d-button>
<d-button type="success">success</d-button>
<d-button type="warning">warning</d-button>
<d-button type="danger">danger</d-button>

```html
<d-button type="default">default</d-button>
<d-button type="primary">primary</d-button>
<d-button type="success">success</d-button>
<d-button type="warning">warning</d-button>
<d-button type="danger">danger</d-button>
```

> 尺寸 `small` `default` `large`

<d-button type="primary" size="small">small</d-button>
<d-button type="primary">default</d-button>
<d-button type="primary" size="large">large</d-button>

```html
<d-button type="primary" size="small">small</d-button>
<d-button type="primary">default</d-button>
<d-button type="primary" size="large">large</d-button>
```

## API

| 名称 |  类型  |  默认值   | 说明                                                  | 必传 |
| :--: | :----: | :-------: | ----------------------------------------------------- | ---- |
| type | string | `default` | 类型 `default` `primary` `success` `warning` `danger` | N    |
| size | string | `default` | 尺寸 `small` `default` `large`                        | N    |
