import { permanentRedirect } from "next/navigation";

import { ROUTES } from "@/config/routes";

export default function LegacyCompareRedirect(): never {
  permanentRedirect(ROUTES.compareHatica);
}
