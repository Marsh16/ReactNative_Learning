import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

type Props = {
  selectedImage?: string;
};

const PlaceholderImage = require("@/assets/images/welcome-image.png");

export default function WelcomeImage() {
  return (
    <View className="mb-8 flex-1">
      <Image source={PlaceholderImage} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    borderRadius: 18,
  },
});
