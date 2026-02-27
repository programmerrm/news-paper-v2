import globeIcon from "../../assets/logo/globe.svg";
import searchIcon from "../../assets/logo/search.svg";
import userIcon from "../../assets/logo/user.svg";

export default function Page() {
  const navItems = [
    { label: "Latest", href: "#" },
    { label: "National", href: "#" },
    { label: "Bangladesh", href: "#" },
    { label: "Politics", href: "#" },
    { label: "World", href: "#" },
    { label: "Economy", href: "#" },
    { label: "Religion", href: "#" },
    { label: "Sports", href: "#" },
    { label: "Entertainment", href: "#" },
    { label: "Media", href: "#" },
  ];

  const iconLinks = [
    { icon: globeIcon, label: "Bangla", href: "#", showOn: "all" },
    { icon: searchIcon, label: "Search", href: "#", showOn: "md" },
    { icon: userIcon, label: "Profile", href: "#", showOn: "md" },
  ];
}
