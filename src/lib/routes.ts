export type Page = "home" | "privacy" | "delete";

export function pageUrl(path = "") {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path}`;
}

export function getCurrentPage(): Page {
  const basePath = new URL(import.meta.env.BASE_URL, window.location.origin)
    .pathname;
  const relativePath = window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length)
    : window.location.pathname.replace(/^\/+/, "");
  const cleanPath = relativePath.replace(/^\/+|\/+$/g, "");

  if (cleanPath === "privacy-policy") return "privacy";
  if (cleanPath === "delete-account") return "delete";

  return "home";
}
