import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const modeThme=localStorage.getItem("modeTheme")
const initialData = {

  theme: `${ modeThme ===null?"Light":modeThme}`,
  

};
const reducer = (state, action) => {
  switch (action.type) {
  
    case "CHANGE_THEME_DARK":
      return { ...state, theme: action.newValue };
  
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeMode = (newtheme) => {
    dispatch({ type: "CHANGE_THEME_DARK", newValue: newtheme });
  };

  return (
     <ThemeContexttt.Provider value={{ ...firstState,changeMode }}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;