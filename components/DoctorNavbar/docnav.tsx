import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }: any) {
  const router = useRouter();

  const menuItems = [
    {
      href: "/",
      title: "Homepage",
      icon: "fa fa-car",
    },
    {
      href: "/about",
      title: "About",
      icon: "fa fa-info-circle",
    },
    {
      href: "/contact",
      title: "Contact",
      icon: "fa fa-phone",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-gray-800 w-full md:w-60">
          <div className="flex items-center justify-center h-16 mb-25">
            Mind It
          </div>
          <nav>
            <ul>
              {menuItems.map(({ href, title, icon }) => (
                <li
                  className="m-2 py-2 text-slate-400 bg-gray-900 rounded-md hover:bg-white hover:text-black hover:rounded-md text-center"
                  key={title}
                >
                  <Link href={href}>
                    <i className={icon}></i>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
