import { createSeoLandingPageExports } from "@/lib/seo/seo-landing-route";

const { metadata, Page } = createSeoLandingPageExports("engineering-intelligence");

export { metadata };
export default Page;
