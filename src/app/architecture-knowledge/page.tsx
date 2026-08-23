import { createSeoLandingPageExports } from "@/lib/seo/seo-landing-route";

const { metadata, Page } = createSeoLandingPageExports("architecture-knowledge");

export { metadata };
export default Page;
