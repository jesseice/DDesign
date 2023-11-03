<template>
  <div class="dd-empty">
    <slot>暂无数据</slot>
  </div>
</template>
<style lang="less" scoped>
.dd-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  color: var(--dd-ignore-color);
}
</style>
