import { Direction } from "./Direction";
import { Icon } from "./Image";

// 定义常见的语言代码以支持自动提示
type Locale =
  | "en"
  | "fr"
  | "ar"
  | "en-US"
  | "zh-CN"
  | "zh-HK"
  | "zh-TW"
  | "es-ES"
  | "fr-FR"
  | "de-DE"
  | "ja-JP"
  | (string & NonNullable<unknown>);

// 定义每个本地化字段的结构
interface NameLocalized {
  value: string;
  lang?: Locale;
  dir?: Direction;
}

// 为 `_localized` 字段扩展定义
type Localized<T> = T & {
  [K in keyof T as `${string & K}_localized`]?: Partial<Record<Locale, T[K]>>;
};

interface LocalizableMember {
  name?: string | NameLocalized;
  short_name?: string;
  description?: string;
  icons?: Array<Icon>;
}

// 应用 Localized 扩展以生成包含 `_localized` 字段的类型
export type LocalizedMember = Localized<LocalizableMember>;
