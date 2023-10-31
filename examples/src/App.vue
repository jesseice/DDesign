<template>
  <div>
    Button:
    <div class="c-big_wrap">
      <div class="c_wrap">
        --type：
        <d-button type="default">default</d-button>
        <d-button type="primary">primary</d-button>
        <d-button type="success">success</d-button>
        <d-button type="warning">warning</d-button>
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
      <d-space direction="vertical">
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
  </div>
</template>
<script setup lang="ts">
import Modal from "@/pages/modal.vue";
import { MessagePlugin } from "../../src/index";

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
}
</style>
