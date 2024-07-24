import { shallowMount } from "@vue/test-utils";
import Modal from "./index.vue";
import { describe, expect, test } from "vitest";

describe("Modal", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Modal, {
      props: {
        title: "测试弹窗组件",
      },
    });

    //断言
    expect(wrapper.text()).toBe("Modal");
  });
});
