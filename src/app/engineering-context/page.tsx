import { createSeoLandingPageExports } from "@/lib/seo/seo-landing-route";

const { metadata, Page } = createSeoLandingPageExports("engineering-context");

export { metadata };
export default Page;
