import { createSeoLandingPageExports } from "@/lib/seo/seo-landing-route";

const { metadata, Page } = createSeoLandingPageExports("engineering-knowledge-graph");

export { metadata };
export default Page;
