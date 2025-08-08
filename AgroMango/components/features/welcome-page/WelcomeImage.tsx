import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

type Props = {
  selectedImage?: string;
};

const PlaceholderImage = require("@/assets/images/welcome-image.png");

export default function WelcomeImage() {
  return (
    <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    height: 440,
    borderRadius: 18,
  },
});
