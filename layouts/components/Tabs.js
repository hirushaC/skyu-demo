import DesktopTabs from "./Tabs/DesktopTabs";
import MobileTabs from "./Tabs/MobileTabs";

const Tabs = ({ tabs }) => {
  return (
    <>
      <div className="md:hidden block"><MobileTabs tabs={tabs} /></div>
      <div className="md:block hidden"><DesktopTabs tabs={tabs} /></div>
    </>
  );
};

export default Tabs;
