
import { useTheme } from "../../context/contexts";

interface Props{
isMobile?:boolean
}

const ThemeToggler = ({isMobile=false}:Props) => {
const{theme,toggleTheme}=useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`${isMobile ? "py-1 px-3":"py-2 px-7"} border-transparent-button `}
    >
      {theme === "light" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggler;
