const footerColumns = [
  {
    heading: "Hosting",
    links: ["Cloud Hosting", "WordPress Hosting", "WooCommerce Hosting", "Dedicated Servers", "Reseller Hosting"],
  },
  {
    heading: "Products",
    links: ["Domain Names", "Website Builder", "Email Hosting", "SSL Certificates", "CDN & Security"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Blog", "Press Kit", "Partners"],
  },
  {
    heading: "Support",
    links: ["Help Center", "Community Forum", "System Status", "Contact Us", "Managed Services"],
  },
];

const socialIcons = [
  { icon: "language", label: "Website" },
  { icon: "terminal", label: "GitHub" },
  { icon: "rss_feed", label: "Blog" },
];

const badges = ["SOC 2 Type II", "ISO 27001", "GDPR Ready", "PCI DSS"];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      {/* CTA Banner */}
      <div className="bg-primary/10 border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-white tracking-tight mb-1">Ready to accelerate?</h3>
            <p className="text-sm text-neutral-400">Start your free trial today. No credit card required.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-primary hover:bg-primary-container text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/20">
              Start Free Trial
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-full font-bold text-sm transition-all">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Brand col */}
          <div className="md:col-span-2">
            <img
              src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
              alt="Speed Force"
              className="h-8 w-auto mb-3"
            />
            <p className="text-sm leading-relaxed mb-6">
              Enterprise-grade cloud infrastructure built for developers, agencies, and growing businesses.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mb-8">
              {socialIcons.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                >
                  <span className="material-symbols-outlined text-white text-sm">{icon}</span>
                </a>
              ))}
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b} className="text-[10px] font-bold px-2 py-1 rounded border border-white/10 text-neutral-500 tracking-wide">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-white font-black text-sm tracking-wider mb-4">{heading.toUpperCase()}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Speed Force Hosting, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "SLA"].map((link) => (
              <a key={link} href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
