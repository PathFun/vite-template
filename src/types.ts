import { type Slot } from '@vue/test-utils/dist/types';
import { type ColProps, type TooltipProps } from 'ant-design-vue';
import { type SizeType } from 'ant-design-vue/es/config-provider/context';
import { type RuleObject } from 'ant-design-vue/es/form/interface';
import { type CSSProperties } from 'vue';

export type SchemaType =
  | 'string'
  | 'object'
  | 'array'
  | 'number'
  | 'boolean'
  | 'void'
  | 'date'
  | 'datetime'
  | 'block'
  | string;

export type Layout = 'horizontal' | 'vertical' | 'inline';
export type LabelAlign = 'left' | 'right';
type RequiredMark = boolean | 'optional' | 'customize';

export type ChangeEvent = Event & {
  target: {
    value?: string | undefined;
  };
};

export interface ValidateParams {
  formData: Record<string, any>;
  schema: Schema;
  error: Error[];
  [k: string]: any;
}

export interface SchemaBase {
  type?: SchemaType;
  title?: string;
  description?: string;
  descType?: 'text' | 'icon' | 'widget';
  descWidget?: string;
  format?: 'image' | 'textarea' | 'color' | 'email' | 'url' | 'dateTime' | 'date' | 'time' | 'upload' | (string & {});
  default?: any;
  /** 是否必填，支持 `'{{ formData.xxx === "" }}'` 形式的表达式 */
  required?: boolean | string;
  placeholder?: string;
  bind?: false | string | string[];
  dependencies?: string[];
  /** 最小值，支持表达式 */
  min?: number | string;
  /** 最大值，支持表达式 */
  max?: number | string;
  /** 是否禁用，支持 `'{{ formData.xxx === "" }}'` 形式的表达式 */
  disabled?: boolean | string;
  /** 是否只读，支持 `'{{ formData.xxx === "" }}'` 形式的表达式 */
  readOnly?: boolean | string;
  /** 是否隐藏，隐藏的字段不会在 formData 里透出，支持 `'{{ formData.xxx === "" }}'` 形式的表达式 */
  hidden?: boolean | string;
  layout?: Layout;
  width?: string | number;
  labelWidth?: number | string;
  maxWidth?: number | string;
  labelAlign: LabelAlign;
  column?: number;
  className?: string;
  widget?: string;
  readOnlyWidget?: string;
  labelWidget?: string;
  /** 更多的说明信息，支持 html 格式，会紧贴在元素下面一行展示 */
  extra?: string;
  properties?: Record<string, Schema>;
  items?: Schema;
  /** 多选，支持表达式 */
  enum?: Array<string | number> | string;
  /** 多选label，支持表达式 */
  enumNames?: Array<string | number> | string;
  rules?: RuleObject | RuleObject[];
  props?: Record<string, any>;
  labelCol?: number | ColProps;
  wrapperCol?: number | ColProps;
  tooltip?: string | (TooltipProps & { icon?: Slot });
  cellSpan?: number;
  span?: number;
  /**扩展字段 */
  addWidget?: string;
  [key: string]: any;
}

export type Schema = Partial<SchemaBase>;

export interface FormInstance {}

export interface FRProps {
  id?: string | number;
  modelValue: Record<string, any>;
  className?: string;
  style?: CSSProperties;
  schema: Schema;
  /** 组件和schema的映射规则 */
  mapping?: Record<string, string>;
  /** 自定义组件 */
  widgets?: Record<string, Slot>;
  /** 自定义布局组件 */
  layoutWidgets?: Record<string, Slot>;
  layout?: Layout;
  /** 表示是否显示 label 后面的冒号 */
  colon?: boolean;
  // 通用设置
  descType?: 'text' | 'icon' | 'widget';
  descWidget?: string;
  labelAlign?: LabelAlign;
  disabled?: boolean;
  readOnly?: boolean;
  labelWidth?: string | number;
  /** antd的全局config */
  configProvider?: Record<string, any>;
  locale?: 'cn' | 'en';
  column?: string;
  size?: SizeType;
  /** 隐藏的数据是否去掉，默认不去掉（false） */
  removeHiddenData?: boolean;
  /** 表单的全局共享属性 */
  globalProps?: Record<string, any>;
  /** 对象组件是否折叠（全局的控制） */
  allCollapsed?: boolean;
  requiredMark?: RequiredMark;
  requiredWidget?: string;
  renderTitle?: Slot;
  /** 覆盖默认的校验信息 */
  validateMessages?: Record<string, string>;
  beforeFinish?: (_params?: ValidateParams) => Error[] | Promise<Error[]>;

  /** event */
  onMount?: () => void;
  onChange?: (_formData: Record<string, any>) => void;
  onFinish?: (_formData: Record<string, any>, _error: Error[]) => void;
}

/** 自定义组件 props */
export type WidgetProps = {
  value: any;
  onChange: (_value: any) => void;
  schema: Schema;
  style: CSSProperties;
  id: string;
  addons: WidgetAddonsType;
  disabled?: boolean;
  readOnly?: boolean;
  [other: string]: any;
};

export type WidgetAddonsType = FormInstance & {
  globalProps: Record<string, any>;
  dependValues: any[];
  dataIndex: string[];
  dataPath: string;
  schemaPath: string;
};

export interface FRPropsCtx {
  /** 表单的全局共享属性 */
  globalProps: Record<string, any>;
  Layout: Layout;
  theme: string;
  column: string | number;
  debounceInput?: boolean;
  /** 显示当前表单内部状态 */
  debug?: boolean;
  /** 标签宽度 */
  labelWidth: string | number;
  /** 覆盖默认的校验信息 */
  validateMessages: any;
  locale: 'cn' | 'en';
  /** 只读模式 */
  readOnly: boolean;
  /** 禁用模式 */
  disabled: boolean;
  /** 对象组件是否折叠（全局的控制） */
  allCollapsed: boolean;
  /** 自定义组件 */
  widgets: Record<string, any>;
  /** 组件和schema的映射规则 */
  mapping: Record<string, string>;
  labelAlign: LabelAlign;
  colon: boolean;
  renderTitle: Slot;
  requiredMark: RequiredMark;
  methods: Record<string, (...args: any[]) => any>;
}
