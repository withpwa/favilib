import { Image } from "./Image";

type MimeTypeExtensionsMap = {
  // 音频类型
  "audio/wav": ".wav";
  "audio/x-wav": ".wav";
  "audio/mpeg": ".mp3";
  "audio/mp4": ".mp4";
  "audio/aac": ".adts";
  "audio/ogg": ".ogg";
  "application/ogg": ".ogg";
  "audio/webm": ".webm";
  "audio/flac": ".flac";
  "audio/mid": ".mid" | ".rmi";

  // 视频类型
  "video/mp4": ".mp4";
  "video/webm": ".webm";
  "video/ogg": ".ogg";
  "video/x-msvideo": ".avi";
  "video/3gpp": ".3gp";
  "video/3gpp2": ".3g2";
  "video/mpeg": ".mpeg";
  "video/quicktime": ".mov";

  // 图像类型
  "image/jpeg": ".jpg" | ".jpeg";
  "image/png": ".png";
  "image/gif": ".gif";
  "image/webp": ".webp";
  "image/svg+xml": ".svg";
  "image/bmp": ".bmp";
  "image/x-icon": ".ico";

  // 文档类型
  "application/pdf": ".pdf";
  "application/msword": ".doc";
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx";
  "application/vnd.ms-excel": ".xls";
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx";
  "application/vnd.ms-powerpoint": ".ppt";
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": ".pptx";

  // 压缩文件类型
  "application/zip": ".zip";
  "application/x-rar-compressed": ".rar";
  "application/x-tar": ".tar";
  "application/x-7z-compressed": ".7z";
  "application/gzip": ".gz";

  // 其他文件类型
  "application/json": ".json";
  "application/javascript": ".js";
  "application/xml": ".xml";
  "text/html": ".html";
  "text/css": ".css";
  "text/plain": ".txt";
  "application/octet-stream": ".bin";
};

// 自动推导所有 MIME 类型
type MimeTypes = keyof MimeTypeExtensionsMap;

// 根据 MIME 类型自动推导对应的扩展名
type Extensions<MimeType extends MimeTypes> = MimeTypeExtensionsMap[MimeType];

// 使用 Conditional Types 来检测值的合法性
type ValidAccept<K extends MimeTypes> = {
  [key in K]?: Extensions<key>[];
};

export interface FileHandler {
  /**
   *  The URL within the scope of your app that your app will open to when handling the given file type.
   */
  action: string;
  /**
   * An object that contains the MIME-types that the above url can handle as keys and file extensions as values.
   */
  accept: Partial<ValidAccept<MimeTypes>>;
  /**
   * A list of icon objects that will show when given the option to open the given file with your app.
   */
  icons?: Array<Image>;
  /**
   * Dictates if multiple app instances can launch when handling several files at once.
   * This member defaults to `single-client` but can also be set to `multiple-clients`
   * if you want an app instance to launch for each file being handled.
   */
  launch_type?: "single-client" | "multiple-clients";
}
