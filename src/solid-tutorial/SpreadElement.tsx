import Info from "./SpreadElementInfo";

const pkg = {
  name: "solid-js",
  version: 1,
  speed: "⚡️",
  website: "https://solidjs.com",
};

export default function SpreadElement() {
  return <Info {...pkg} />;
}