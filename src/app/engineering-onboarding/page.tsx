import { createSeoLandingPageExports } from "@/lib/seo/seo-landing-route";

const { metadata, Page } = createSeoLandingPageExports("engineering-onboarding");

export { metadata };
export default Page;
