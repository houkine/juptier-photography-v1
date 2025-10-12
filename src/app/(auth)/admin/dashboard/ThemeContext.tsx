import { createContext } from "react";

const THEME_BACKGROUNDCOLOR_WHITE = 'bg-white/20'
const THEME_BACKGROUNDCOLOR_BLACK = 'bg-black/20'
const ThemeContext = createContext<string>(THEME_BACKGROUNDCOLOR_WHITE)
export {
  ThemeContext, THEME_BACKGROUNDCOLOR_WHITE, THEME_BACKGROUNDCOLOR_BLACK
}