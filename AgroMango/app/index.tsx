import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6">
        {/* Header */}
        <View className="flex-row items-center mt-8 mb-8">
          <View className="w-8 h-8 bg-green-500 rounded-full mr-3 items-center justify-center">
            <Text className="text-white text-lg font-bold">🌱</Text>
          </View>
          <Text className="text-2xl font-bold text-green-600">
            AgroMango{'\n'}Companion
          </Text>
        </View>

        {/* Farmer Illustration Placeholder */}
        <View className="bg-gray-100 rounded-2xl h-64 mb-8 items-center justify-center">
          <View className="w-32 h-32 bg-green-600 rounded-full items-center justify-center">
            <Text className="text-white text-4xl">👨‍🌾</Text>
          </View>
        </View>

        {/* Welcome Text */}
        <Text className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to AgroMango
        </Text>

        <Text className="text-gray-600 text-base leading-6 mb-8">
          Your intelligent farming companion that helps you monitor crops, identify diseases, and optimize your agricultural practices.
        </Text>

        {/* Features */}
        <View className="space-y-6 mb-8">
          {/* Voice Messaging */}
          <View className="flex-row items-start">
            <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mr-4 mt-1">
              <Text className="text-green-600 text-lg">🎤</Text>
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900 mb-1">
                Voice Messaging
              </Text>
              <Text className="text-gray-600 text-sm leading-5">
                Ask questions and get farming advice through simple voice commands
              </Text>
            </View>
          </View>

          {/* Crop Analysis */}
          <View className="flex-row items-start">
            <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mr-4 mt-1">
              <Text className="text-green-600 text-lg">📷</Text>
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900 mb-1">
                Crop Analysis
              </Text>
              <Text className="text-gray-600 text-sm leading-5">
                Upload images of your crops for instant disease identification and treatment recommendations
              </Text>
            </View>
          </View>

          {/* Geolocation Tracking */}
          <View className="flex-row items-start">
            <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mr-4 mt-1">
              <Text className="text-green-600 text-lg">📍</Text>
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900 mb-1">
                Geolocation Tracking
              </Text>
              <Text className="text-gray-600 text-sm leading-5">
                Monitor disease spread patterns in your region to take preventive measures
              </Text>
            </View>
          </View>
        </View>

        {/* Get Started Button */}
        <TouchableOpacity className="bg-green-500 rounded-xl py-4 mb-4">
          <Text className="text-white text-center text-lg font-semibold">
            Get Started
          </Text>
        </TouchableOpacity>

        {/* Footer Text */}
        <Text className="text-gray-500 text-center text-sm mb-8">
          Empowering farmers with smart technology
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}