export type MegaMenuItem = {
  icon: string;
  label: string;
  desc?: string;
  href: string;
};

export type MegaMenuCol = {
  heading: string;
  items: MegaMenuItem[];
};

export type MegaMenus = Record<string, { cols: MegaMenuCol[] }>;

export const megaMenus: MegaMenus = {
  "Cloud Hosting": {
    cols: [
      {
        heading: "Hosting Plans",
        items: [
          { icon: "cloud",         label: "Shared Hosting",      desc: "Perfect for small sites",           href: "/cloud-hosting" },
          { icon: "bolt",          label: "Cloud Hosting",       desc: "NVMe-powered, instant scaling",     href: "/cloud-hosting" },
          { icon: "dns",           label: "VPS Hosting",         desc: "Full control, dedicated resources", href: "/cloud-hosting" },
          { icon: "storage",       label: "WordPress Hosting",   desc: "Optimised for WordPress",           href: "/cloud-hosting" },
        ],
      },
      {
        heading: "Features",
        items: [
          { icon: "shield",        label: "Free SSL + DDoS",     desc: "Security on every plan",            href: "/cloud-hosting" },
          { icon: "backup",        label: "Daily Backups",       desc: "One-click restore",                 href: "/cloud-hosting" },
          { icon: "language",      label: "Global CDN",          desc: "8 edge regions worldwide",          href: "/cloud-hosting" },
          { icon: "support_agent", label: "24/7 Expert Support", desc: "Real engineers, fast response",     href: "/cloud-hosting" },
        ],
      },
    ],
  },
  "Dedicated Servers": {
    cols: [
      {
        heading: "Server Types",
        items: [
          { icon: "memory",        label: "Entry Dedicated",     desc: "Up to 16 cores, 64 GB RAM",         href: "/dedicated-servers" },
          { icon: "storage",       label: "Performance Server",  desc: "Up to 32 cores, 256 GB RAM",        href: "/dedicated-servers" },
          { icon: "hard_drive",    label: "Enterprise Server",   desc: "Up to 64 cores, 512 GB DDR5",       href: "/dedicated-servers" },
          { icon: "network_node",  label: "Custom Build",        desc: "Spec your own configuration",       href: "/contact-sales" },
        ],
      },
      {
        heading: "Included",
        items: [
          { icon: "lock",          label: "Full Root Access",    desc: "Complete server control",           href: "/dedicated-servers" },
          { icon: "speed",         label: "10 Gbps Uplink",      desc: "Bare-metal performance",            href: "/dedicated-servers" },
          { icon: "verified_user", label: "Hardware Firewall",   desc: "Enterprise DDoS protection",        href: "/dedicated-servers" },
          { icon: "handshake",     label: "Dedicated Support",   desc: "Named engineer on your account",    href: "/contact-sales" },
        ],
      },
    ],
  },
  "Domain Names": {
    cols: [
      {
        heading: "Find a Domain",
        items: [
          { icon: "search",         label: "Search Domains",     desc: "Find your perfect domain name",     href: "/domain-names" },
          { icon: "transfer_within_a_station", label: "Transfer Domain", desc: "Move your domain to us",   href: "/domain-names" },
          { icon: "list",           label: "500+ Extensions",    desc: ".com .io .app .dev and more",       href: "/domain-names" },
        ],
      },
      {
        heading: "Domain Tools",
        items: [
          { icon: "visibility_off", label: "Free WHOIS Privacy", desc: "Protect your personal info",        href: "/domain-names" },
          { icon: "dns",            label: "DNS Management",     desc: "Full DNS control panel",            href: "/domain-names" },
          { icon: "email",          label: "Email Forwarding",   desc: "Forward to any inbox free",         href: "/domain-names" },
          { icon: "autorenew",      label: "Auto-Renewal",       desc: "Never lose your domain",            href: "/domain-names" },
        ],
      },
    ],
  },
};

export const navLinks = [
  { label: "Cloud Hosting",     href: "/cloud-hosting",     hasMega: true },
  { label: "Dedicated Servers", href: "/dedicated-servers", hasMega: true },
  { label: "Domain Names",      href: "/domain-names",      hasMega: true },
  { label: "Agency Solutions",  href: "/agency-solutions",  hasMega: false },
  { label: "Client Area",       href: "/client-area",       hasMega: false },
];
