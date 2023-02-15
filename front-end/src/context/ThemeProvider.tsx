import React, {createContext, useState} from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: (a: string) => {},
})

type Props = {
  children?: React.ReactNode
};

const ThemeProvider: React.FC<Props>= ({children})=> {
    const [theme, setTheme] = useState('light')

    const toggleTheme = (theme: React.SetStateAction<string>) =>{
        setTheme(theme);
      }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;



/* The children prop was removed from React.FunctionComponent (React.FC) so you have to declare it explicitly in your component properties.
In the recent version, this has been removed. Now, you have to specify it explicitly depending on your need. It can be either optional or required, it’s up to your own logic.
type Props = {
  children?: React.ReactNode
};
const Component: React.FC<Props> = ({children}) => {...}
*/