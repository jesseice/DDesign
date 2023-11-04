<template>
  <Code title="基础用法" :code-str="code1">
    <template #subscribe>
      使用语法糖<code>v-model</code>绑定 选择项使用属性<code>options</code>
      默认类型{label: string, value: string | number}
    </template>
    <template #demo>
      <d-select v-model="selectValue" filterable :options="options" />
    </template>
  </Code>
  <Code title="筛选" :code-str="code2">
    <template #subscribe>
      属性：<code>filterable</code>控制是否可输入，默认false、开启后会自动筛选输入值；也可以使用属性<code>filter</code>传一个过滤器即可
      <code>filterable 和 filter 使用其中一个都可以</code>
    </template>
    <template #demo>
      <d-space direction="direction">
        <d-select
          v-model="selectValue"
          filterable
          :options="options"
          placeholder="默认筛选"
        />
        <d-select
          v-model="selectValue"
          :filter="filterFn"
          :options="options"
          placeholder="输入123筛选全部"
        />
      </d-space>
    </template>
  </Code>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Code from "./code.vue";
const selectValue = ref(undefined);
const options = new Array(10)
  .fill(0)
  .map((val, index) => ({ label: `选项${index + 1}`, value: index + 1 }));

const filterFn = (
  search: string,
  option: { label: string; value: string | number }
) => {
  if (search === "123") return true;
};

const code1 = `
<template>
  <d-select v-model="selectValue" filterable :options="options" />
</template>
<script setup lang="ts">
const selectValue = ref(undefined);
const options = new Array(10)
  .fill(0)
  .map((val, index) => ({ label: \`选项\${index + 1}\`, value: index + 1 }));
<\/script>
`;

const code2 = `
<template #demo>
  <d-space direction="direction">
    <d-space align="center">
      filterable：
      <d-select v-model="selectValue" filterable :options="options" />
    </d-space>
    <d-space align="center">
      filter：
      <d-select
        v-model="selectValue"
        :filter="filterFn"
        :options="options"
      />
    </d-space>
  </d-space>
</template>
<script setup lang="ts">
const selectValue = ref(undefined);
const options = new Array(10)
  .fill(0)
  .map((val, index) => ({ label: \`选项\${index + 1}\`, value: index + 1 }));

const filterFn = (
  search: string,
  option: { label: string; value: string | number }
) => {
  if (search === "123") return true;
};
<\/script>
`;
</script>
