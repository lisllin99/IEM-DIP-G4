import React, { useEffect, useState } from "react";
import { AppearanceProvider, Appearance } from "react-native-appearance";
import WalkthroughScreen from "./src/screens/WalkthroughScreen/WalkthroughScreen";
import WalkthroughAppConfig from "./src/WalkthroughAppConfig";
import DynamicAppStyles from "./src/DynamicAppStyles";
import { StyleSheet, View } from 'react-native';

export default function SplashScreen1({ navigation }) {

  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });
  });

  return (
    <View style={styles.container} onPress={() => navigation.navigate("RootNavigator")}>
      <AppearanceProvider >
        <WalkthroughScreen
          appConfig={WalkthroughAppConfig}
          appStyles={DynamicAppStyles}
        />
      </AppearanceProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -30,
  },
});

//export default SplashScreen;
