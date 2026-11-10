const menus = [
  { title: "A Voz que Vende", items: ["Sobre", "Quem sou eu", "Depoimentos"] },
];

export const MenuItems = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
      {menus.map(({ title, items }) => (
        <nav key={title}>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="font-normal text-surface-alt text-xl">{title}</p>
            </li>
            {items.map((item) => (
              <li key={item}>
                <a
                  className="font-medium hover:text-text-tertiary transition-colors text-xl"
                  href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
