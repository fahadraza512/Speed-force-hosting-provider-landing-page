export interface Plan {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
}

export const PLANS: Plan[] = [
  {
    id: "shared",
    name: "Shared Hosting",
    price: 4.99,
    priceLabel: "$4.99/mo",
    description: "Perfect for personal projects and small sites.",
    features: ["10 GB SSD Storage", "Free SSL Certificate", "1 Website", "Daily Backups", "24/7 Support"],
  },
  {
    id: "cloud",
    name: "Cloud Hosting",
    price: 12.99,
    priceLabel: "$12.99/mo",
    description: "For growing businesses that need more power.",
    features: ["30 GB NVMe Storage", "Free SSL + CDN", "Unlimited Websites", "Priority Support", "Staging Environment"],
  },
  {
    id: "vps",
    name: "VPS Hosting",
    price: 24.99,
    priceLabel: "$24.99/mo",
    description: "Full control with dedicated resources.",
    features: ["100 GB NVMe Storage", "SSL + CDN + WAF", "Unlimited Websites", "Dedicated Support", "Custom Server Config"],
  },
  {
    id: "dedicated",
    name: "Dedicated Server",
    price: 89.99,
    priceLabel: "$89.99/mo",
    description: "Enterprise-grade bare-metal performance.",
    features: ["10 TB NVMe Storage", "SSL + CDN + WAF + DDoS", "Unlimited Websites", "Named Engineer", "IPMI Access"],
  },
];

export function getPlanById(id: string): Plan | undefined {
  return PLANS.find((p) => p.id === id);
}
