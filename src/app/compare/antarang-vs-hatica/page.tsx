import { permanentRedirect } from "next/navigation";

export default function AntarangCompareRedirect(): never {
  permanentRedirect("/compare/nudgeio-vs-hatica");
}
