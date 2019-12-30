import React, {useContext } from 'react';
import { withTheme, themeContext } from './provider/ThemeProvider';


const App = props => {

  const {dark, setDark } = useContext(themeContext)
  console.log('dark in app.js', dark)
  console.log('dark in props ad stuf app.js', props.dark)

  return (
    <div style={dark === 'dark' ? {backgroundColor: 'grey'} : {backgroundColor: 'blue'}}>
      <h1>{dark}</h1>
      <button onClick={() => setDark('dark')}> changeDark</button>
    </div>
  );
};

export default  withTheme(App);
