"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModulzLogoIcon } from '@radix-ui/react-icons'

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Recipes",
    href: "/recipes",
  },
];
interface NavBarProps {
  menus: any;
  title: string;
}
const NavBar: React.FC<NavBarProps> = ({menus, title}) => {
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-between">
      <Link href="/">
        <ModulzLogoIcon />
      </Link>
      <ul className="flex space-x-6">
        {menus.map((link: any) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href != currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div>{title}</div>
    </nav>
  );
};

export default NavBar;