import iconInstagram from "@/assets/images/icon-instagram.png";
import iconWhatsapp from "@/assets/images/icon-whatsapp.png";

const socialLinks = [
  { href: "https://www.instagram.com/instalocutores/", icon: iconInstagram, name: "Instagram" },
  { href: "https://wa.me/5511988011841", icon: iconWhatsapp, name: "WhatsApp" },
];

export const SocialLinks = () => {
  return (
    <div>
      <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>

      <ul className="flex gap-5">
        {socialLinks.map(({ href, icon, name }) => (
          <li key={name}>
            <a href={href} aria-label={name}>
              <img src={icon} alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
