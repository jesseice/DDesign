<template>
  <div>
    <!-- Button:
    <div class="c-big_wrap">
      <div class="c_wrap">
        --type：
        <d-button type="default">default</d-button>
        <d-button
          type="primary"
          :loading="state.loading"
          @click="updateLoading"
        >
          primary
        </d-button>
        <d-button
          type="success"
          size="large"
          :loading="true"
          @click="updateLoading"
          >success</d-button
        >
        <d-button type="warning" size="large">warning</d-button>
        <d-button type="danger">danger</d-button>
      </div>
      <div class="c_wrap">
        --size：
        <d-button type="primary" size="small">small</d-button>
        <d-button type="primary">default</d-button>
        <d-button type="primary" size="large">large</d-button>
        <d-button type="success" size="small">small</d-button>
        <d-button type="success">default</d-button>
        <d-button type="success" size="large">large</d-button>
      </div>
    </div>
    Modal:
    <div class="c-big_wrap">
      <Modal />
    </div>
    Space:
    <div class="c-big_wrap">
      <d-space align="center">
        <d-button type="primary">1</d-button>
        <d-button type="primary">2</d-button>
        <d-button type="primary">3</d-button>
      </d-space>
    </div>
    Message：
    <div class="c-big_wrap">
      <d-message type="success" content="成功" style="width: 160px" />
      <div style="height: 10px"></div>
      <d-button type="success" @click="openMessage('success')">
        消息提示
      </d-button>
      <d-button type="danger" @click="openMessage('error')">消息提示</d-button>
      <d-button type="primary" @click="openMessage('warning')">
        消息提示
      </d-button>
    </div>
    Input：
    <div class="c-big_wrap">
      <d-space direction="vertical">
        <d-input
          v-model="state.input"
          size="large"
          placeholder="请输入"
          style="width: 220px"
          status="warning"
          tips="123"
          ><template #prefix>账户</template>
        </d-input>
        <d-input
          v-model="state.input"
          placeholder="请输入"
          style="width: 220px"
          status="success"
          tips="123"
        >
          <template #prefix>账户：</template>
          <template #suffix>+26</template>
        </d-input>
        <d-input
          v-model="state.input"
          size="small"
          placeholder="请输入"
          style="width: 220px"
          status="error"
          tips="123"
          disabled
        />
        <d-button
          @click="() => MessagePlugin.success(state.input)"
          style="width: 200px"
        >
          获取输入值
        </d-button>
      </d-space>
    </div> -->
    InputNumber：
    <div class="c-big-wrap">
      <d-input-number v-model="state.input"></d-input-number>
      <d-input-password v-model="state.input"></d-input-password>
    </div>
    Select：
    <d-select
      v-model="state.selectValue"
      filterable
      size="large"
      :options="options"
      @select="select"
    >
    </d-select>
    Tag：
    <d-tag variant="light" size="large">灰标签</d-tag>
    <d-tag theme="primary" size="medium">标签一</d-tag>
    <d-tag theme="success" variant="light">标签二</d-tag>
    <d-tag theme="warning" variant="light">标签三</d-tag>
    <d-tag theme="danger" variant="light">标签四</d-tag>
  </div>
</template>
<script setup lang="ts">
// import Modal from "@/pages/modal.vue";
import { MessagePlugin } from "../../src/index";
import { reactive } from "vue";
const state = reactive({
  input: "",
  selectValue: undefined,
  loading: false,
});
const updateLoading = async () => {
  state.loading = !state.loading;
  await new Promise((resolve) => setTimeout(() => resolve(1), 3000));
  state.loading = !state.loading;
};
const select = () => {
  console.log("[state.selectValue] ---> ", state.selectValue);
};
const options = new Array(11).fill(1).map((val, index) => ({
  label: `${new Date().getTime()}${index}`,
  value: index,
}));
const openMessage = (type: any) => {
  MessagePlugin[type]("测试", 5000);
};
</script>
<style lang="less" scoped>
.c-big_wrap {
  padding: 20px;
}
.c_wrap {
  margin: 5px 0;
  display: flex;
  align-items: center;
}
</style>
