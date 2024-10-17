const links = [
  {
    title: "About",
    items: [
      { label: "Company", href: "#" },
      { label: "Community", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center", href: "#" },
      { label: "Safety Center", href: "#" },
      { label: "Trust & Safety", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "Contact Us", href: "#" },
      { label: "Locations", href: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <div key={link.title}>
              <h3 className="text-white font-bold mb-4">{link.title}</h3>
              <ul className="space-y-2">
                {link.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-neutral-300 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px bg-white/10 my-10" />
        <div className="flex justify-between flex-col gap-4 lg:flex-row">
          <div>TODOS</div>
          <ul className="flex gap-4 flex-wrap">
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
