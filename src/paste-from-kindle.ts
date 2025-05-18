import { Clipboard } from "@raycast/api";

export default function Command() {
  return (async () => {
    const clipboard = (await Clipboard.readText()) || "";
    const re = new RegExp(/^([\s\S]+?)\r?\n\r?\n/);
    const match = clipboard.match(re);

    if (match) {
      Clipboard.paste(match[0]);
    } else {
      Clipboard.paste(clipboard);
    }
  })();
}
