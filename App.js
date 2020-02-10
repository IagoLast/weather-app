import React, { useEffect, useState } from 'react';
import Router from './Router';
import * as Font from 'expo-font';
import Spinner from './components/Spinner/Spinner';



export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      'monserrat': require('./assets/fonts/monserrat.ttf'),
      // 'monserrat_medium': require('./assets/fonts/monserrat_medium.woff2'),
      'monserrat-bold': require('./assets/fonts/monserrat_bold.ttf'),
    })
      .then(() => setIsFontLoaded(true))
  }, [isFontLoaded]);

  if (!isFontLoaded) {
    return <Spinner />
  }

  return <Router />;
}