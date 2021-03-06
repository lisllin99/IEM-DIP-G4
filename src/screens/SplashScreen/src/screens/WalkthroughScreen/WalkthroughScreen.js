import React from "react";
import { View, Image, Text } from "react-native";
import PropTypes from "prop-types";
import AppIntroSlider from "react-native-app-intro-slider";
import dynamicStyles from "./styles";
import { useColorScheme } from "react-native-appearance";
import { useNavigation } from "@react-navigation/native";

const WalkthroughScreen = (props) => {
  const appConfig = props.appConfig;
  const appStyles = props.appStyles;
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);


  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate('HomeScreen')
  }
  const slides = appConfig.onboardingConfig.walkthroughScreens.map(
    (screenSpec, index) => {
      return {
        key: `${index}`,
        text: screenSpec.description,
        title: screenSpec.title,
        image: screenSpec.icon,
      };
    }
  );

  const _renderItem = ({ item, dimensions }) => (
    <View style={[styles.container, dimensions]}>
      <Image
        style={styles.image}
        source={item.image}
      />

      <View style={[styles.container1]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );


  return (
    <AppIntroSlider
      data={slides}
      slides={slides}
      renderItem={_renderItem}
      //Handler for the done On last slide
      showSkipButton={true}
      showDoneButton={true}
      showNextButton={true}
      onDone={goToHome}
    />

  );
};

WalkthroughScreen.propTypes = {
  appStyles: PropTypes.object,
  appConfig: PropTypes.object,
};

export default WalkthroughScreen;
