import { javascript } from "remix-utils";
import type { LoaderFunction } from "remix";

const jsScript = (id?: string) => `
(function() {
  const body = document.getElementsByTagName("body")[0];
  const banner = document.createElement("div");
  banner.id = "evergrove-banner-${id}";
  banner.style.display = "flex";
  banner.style["align-items"] = "center";
  banner.style["justify-content"] = "center";
  banner.style.height = "50px";
  banner.style.background = "black";
  banner.style.color = "white";
  const content = document.createTextNode("Hello World!");
  banner.appendChild(content);
  body.prepend(banner);
})();
`;

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.id;
  return javascript(jsScript(id), {
    headers: {
      "Content-Disposition": "attachment"
    }
  });
};
