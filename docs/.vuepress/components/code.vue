<template>
  <div class="demo">
    <h3>
      <slot name="title">{{ title }}</slot>
    </h3>
    <blockquote>
      <p>
        <slot name="subscribe">{{ subscribe }}</slot>
      </p>
    </blockquote>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot name="demo">11</slot>
      </div>
      <div class="code-content" ref="codeContent" style="height: 0">
        <a class="code-content-copy" @click="copy">复制</a>
        <div class="code-content-height" ref="codeHeightEl">
          <pre><code class="vue">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode">
        <span class="lock-code-word">{{
          isShow === false ? "显示代码" : "隐藏代码"
        }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { MessagePlugin } from "../../../src";
const props = defineProps({
  codeStr: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  subscribe: {
    type: String,
    default: "",
  },
});

const codeContent: any = ref(null);
const codeHeightEl: any = ref(null);
const codeHeight: any = ref(0);
const isShow = ref(false);
onMounted(() => {
  getCodesHeight();
});
const showCode = () => {
  isShow.value = !isShow.value;
  if (isShow.value === true) {
    codeContent.value.style.height = codeHeight.value + 25 + "px";
  } else {
    codeContent.value.style.height = 0;
  }
};
const getCodesHeight = () => {
  codeHeight.value = codeHeightEl.value.getBoundingClientRect().height;
  isShow.value = false;
};
const copy = () => {
  const oInput = document.createElement("textarea");
  oInput.value = props.codeStr;
  document.body.appendChild(oInput);
  oInput.select();
  document.execCommand("Copy");
  oInput.style.display = "none";
  document.body.removeChild(oInput);
  MessagePlugin.success("已复制");
};
</script>

<style lang="less" scoped>
.theme-container.sidebar-open .sidebar {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 0;
}
.sidebar,
.navbar {
  z-index: 10000;
}

.component-wrapper {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  .component-wrapper-demo {
    padding: 24px 24px 15px 24px;
  }

  h4 {
    margin: 55px 0 20px;
  }

  &:hover {
    .lock-code .lock-code-word {
      font-size: 14px;
      transform: translateX(-40px);
      opacity: 1;
    }
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  .code-content {
    position: relative;
    // background-color: #fafafa;
    background-color: #282c34;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    transition: height 0.2s;
    .code-content-copy {
      position: absolute;
      top: 5px;
      right: 10px;
      cursor: pointer;
    }

    .code-content-height {
      .code-user-desc {
        background: #ffffff;
        margin: 10px 10px 0 10px;
        padding: 5px 10px;
        font-size: 14px;
        line-height: 26px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
      }

      > pre {
        background: none;

        > code {
          color: #3182bd;
        }
      }
    }
  }

  .lock-code {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    // background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    line-height: 44px;
    color: #d3dce6;

    &:hover {
      background-color: #f9fafc;

      .lock-code-word {
        color: #409eff;
      }
    }

    .icon-down {
      transform: translateX(0px);
      transition: all 0.1s;
    }

    text-align: center;

    .lock-code-word {
      font-size: 0px;
      margin-left: 15px;
      display: inline-block;
      transition: all 0.1s;
      opacity: 0;
    }
  }
}

::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #ccc;
}

::-webkit-scrollbar-track {
  border-radius: 6px;
  background-color: #f5f5f5;
}
</style>
