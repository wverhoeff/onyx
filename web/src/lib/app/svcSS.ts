import type { Metadata } from "next";
import { SERVER_SIDE_ONLY__PAID_ENTERPRISE_FEATURES_ENABLED } from "@/lib/constants";
import { fetchEnterpriseSettingsSS } from "@/lib/settings/svcSS";

async function fetchAppName(): Promise<string> {
  if (SERVER_SIDE_ONLY__PAID_ENTERPRISE_FEATURES_ENABLED) {
    const enterprise = await fetchEnterpriseSettingsSS();
    if (enterprise?.application_name?.trim()) {
      return enterprise.application_name.trim();
    }
  }
  return "B&T Intelligence";
}

export async function generateFaviconMetadata(): Promise<Metadata["icons"]> {
  if (SERVER_SIDE_ONLY__PAID_ENTERPRISE_FEATURES_ENABLED) {
    const enterprise = await fetchEnterpriseSettingsSS();
    if (enterprise?.use_custom_logo) {
      return { icon: "/api/enterprise-settings/logo" };
    }
  }

  return {
    icon: [
      {
        url: "/brand/bt-icon.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/brand/bt-icon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  };
}

export async function generateAdminTitleMetadata(): Promise<Metadata["title"]> {
  return `Admin — ${await fetchAppName()}`;
}
