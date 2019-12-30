import React, {useState,} from 'react';


export const themeContext = React.createContext()

const ThemeProvider = props => {
  const [dark, setDark] = useState('')


  return (
    <themeContext.Provider
    value={{
      dark,
      setDark
    }}
    >
      {props.children}
    </themeContext.Provider>
  );
};

export const withTheme = C => props => (
  // only have to make to import your context as props
  //the component behind all components the mother component,
  //all components consume this component 
    <themeContext.Consumer>
      {value => <C {...value} {...props} />}
    </themeContext.Consumer>
  
)



export default ThemeProvider;