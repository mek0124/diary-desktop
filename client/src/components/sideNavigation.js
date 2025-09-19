import { Link, useLocation } from "react-router-dom";

export default function SideNavigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/new-entry", label: "New Entry" },
    { path: "/history", label: "My Entries" },
    { path: "/settings", label: "Settings" },
    { path: "/support", label: "Support" },
  ];

  return (
    <div className="flex flex-col items-center justify-start w-[10%] min-h-screen border-r-2 border-r-surface gap-5 p-2">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`font-bold italic text-lg text-center w-[90%] transition-all duration-200
            ${
              location.pathname === item.path
                ? "bg-colorAccent text-black rounded-2xl"
                : "text-colorTextPrimary hover:bg-colorAccentHover hover:text-black rounded-2xl"
            }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}