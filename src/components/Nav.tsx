import { useState } from 'react';

const links = [
  { name: 'home', href: '/#home' },
  { name: 'about me', href: '/#about' },
  { name: 'my work', href: '/#work' },
  { name: 'contact', href: '/#contact' },
];

const Nav = ({ isClicked }: { isClicked: boolean }) => {
  const [active, setActive] = useState('home');

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
      });
    }

    setActive(targetId);
  };

  return (
    <nav className={`nav ${isClicked ? 'showMenu' : ''}`}>
      <ul className="menu">
        {links.map(({ name, href }) => (
          <li key={name}>
            <a
              className={`${active === name ? 'active' : ''}`}
              href={href}
              onClick={() => smoothScrollTo(name)}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
