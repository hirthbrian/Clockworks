import React, { useState, useEffect } from "react";
import { StatusBar, Pressable } from "react-native";
import * as Font from "expo-font";

import Main from "./src/screens/Main";

const montserrat = require("./assets/fonts/Montserrat-Bold.ttf");
const montserratItalic = require("./assets/fonts/Montserrat-BoldItalic.ttf");

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    Font.loadAsync({ montserrat, montserratItalic }).then(() =>
      setFontLoaded(true)
    );
  }, []);

  if (!fontLoaded) return null;

  return (
    <Pressable style={{ flex: 1 }} onPress={() => setIsDark(!isDark)}>
      <StatusBar
        translucent
        barStyle={isDark ? "light-content" : "dark-content"}
      />
      <Main isDark={isDark} />
    </Pressable>
  );
};

export default App;
