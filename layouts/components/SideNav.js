import Link from "next/link";
import ImageFallback from "./ImageFallback";

const SideNav = ({ menu, onMenuItemClick }) => {
  return (
    <div className="mx-auto max-w-sm rounded-lg">
      <aside className="w-64" aria-label="Sidebar">
        <div className="overflow-y-auto rounded bg-primary px-3 py-4">
          <ul className="space-y-2">
            {menu.map((item, index) => (
              <li key={index}>
                <div
                  className="flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-white hover:bg-blue-800"
                  onClick={() => onMenuItemClick(item.title)}
                >
                  <div className="top-0 grid items-start justify-start">
                    <ImageFallback
                      className="object-contain p-1"
                      width={36}
                      height={36}
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                  <span className="ml-3">{item.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
