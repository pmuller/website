import { useSiteUrl } from "./useSiteUrl";

export const useSiteDomain = () => new URL(useSiteUrl()).hostname;
