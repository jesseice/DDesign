import { createApp } from "vue";
import MessageList from "./messageList.vue";
type DMessageType = {
  id?: string;
  content: string;
  type: "info" | "warning" | "error" | "success";
  duration?: number;
};

const instanceMap = new Map();
const showMessage = (message: DMessageType) => {
  if (!message) return showMessage;
  const attachDom = document.body;
  if (!instanceMap.has("attachDom")) {
    const wrapper = document.createElement("div");
    const instance = createApp(MessageList, { messageList: [message] }).mount(
      wrapper
    );
    instanceMap.set("attachDom", instance);
    attachDom.appendChild(wrapper);
  } else {
    instanceMap.get("attachDom").add(message);
  }
};

export const MessagePlugin: any = showMessage;

const extraApi = {
  info: (content: string, duration?: number) =>
    showMessage({ type: "info", content, duration }),
  success: (content: string, duration?: number) =>
    showMessage({ type: "success", content, duration }),
  warning: (content: string, duration?: number) =>
    showMessage({ type: "warning", content, duration }),
  error: (content: string, duration?: number) =>
    showMessage({ type: "error", content, duration }),
};

Object.keys(extraApi).forEach((key: string) => {
  // @ts-ignore
  MessagePlugin[key] = extraApi[key];
});
