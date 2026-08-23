import { absoluteUrl } from "@/config/site";

export function canonicalFor(path: string): string {
  return absoluteUrl(path);
}

export function stripQueryAndHash(path: string): string {
  return path.split("#")[0]?.split("?")[0] ?? path;
}
