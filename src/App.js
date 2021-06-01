import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import notes, {cscale} from './notes';

function App() {
  const [showScale, setShowScale] = React.useState(false);
  const toggleScale = () => {
    setShowScale(!showScale);
    console.log(showScale)
  }
const determineActive=(f) => {
// is the note I'm looking at in cscale, if it is return the string active else return inactive
// if showScale = false, it should always be inactive
// console.log(cscale.includes(f))
return cscale.includes(f)?'active':'inactive';
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          fretty
        </p>
        <button onClick={
          toggleScale
        } >showScale: {JSON.stringify(showScale)}</button>
        <table>
      {
        // computation here
       // JSON.stringify(notes)
       notes.map((guitarstring) => {
       //return JSON.stringify(guitarstring)
       return (
         <tr>
           {
             guitarstring.map((fret)=> {
               return (
                 <td className={showScale?determineActive(fret):'inactive'}>
                   {fret}
                 </td>
               )
             })
           }
         </tr>
       )
       })
      }</table>
      </header>
    </div>
  );
}

export default App;
