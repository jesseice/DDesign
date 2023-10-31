export interface DdSpaceProps {
  /**
   * 对齐方式
   */
  align?: "start" | "end" | "center" | "baseline";
  /**
   * 间距方向
   * @default horizontal
   */
  direction?: "vertical" | "horizontal";
  /**
   * 间距大小
   * @default 'medium'
   */
  size?: "medium" | "small" | "large";
}
