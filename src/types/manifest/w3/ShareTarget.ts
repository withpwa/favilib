interface ShareParams {
  /**
   * Name of the query parameter for the title of the document being shared.
   */
  title?: string;
  /**
   * Name of the query parameter for the body of the message being shared.
   */
  text?: string;
  /**
   * Name of the query parameter for the URL being shared.

   */
  url?: string;
  files?: FileParam[];
}

interface FileParam {
  /**
   * Name of the form field used to share files.
   */
  name: string;
  /**
   * A string or array of strings of accepted MIME types or extensions.
   */
  accept: string;
}

// https://www.iana.org/assignments/media-types/media-types.xhtml
type Enctype =
  | "application/x-www-form-urlencoded"
  | "multipart/form-data"
  | "text/plain"
  | "application/json"
  | (string & NonNullable<unknown>);

export interface ShareTarget {
  /**
   * The URL within the scope of your app that your app will handle the share action.
   */
  action: string;
  /**
   * `GET` or `POST`.
   * Use `POST` if the shared data includes binary data like images.
   */
  method: "POST" | "GET";
  /**
   * The encoding of the data when the method is a `POST` request. Otherwise, ignored.
   */
  enctype?: Enctype;
  /**
   * The object that allows you to configure the share parameters. Should corresponded to the object exposed by `navigator.share()`.
   */
  params: ShareParams;
}
