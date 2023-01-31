import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/navigation/route';

export interface Props {}

const App = ({}: Props) => {

  return (
    <>
      <StatusBar backgroundColor={'#ffff'} barStyle={'light-content'} />
      <Routes />
    </>
  );
};


export default App;
