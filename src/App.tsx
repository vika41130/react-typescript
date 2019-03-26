import * as React from 'react';
import './App.css';

import MyClass from './components/MyClass';
import MyComp from './components/MyComp';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MyClass isMarried={true} />
        <MyComp name={'interviewnest'} isMarried={true} kids={2}/>
      </div>
    );
  }
}

export default App;
