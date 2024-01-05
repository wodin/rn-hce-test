import { AndroidConfig, withAndroidManifest } from "@expo/config-plugins";

function addAttributesToApplication(androidManifest, attributes) {
  const app = AndroidConfig.Manifest.getMainApplicationOrThrow(androidManifest);

  app.$ = { ...app.$, ...attributes };

  return androidManifest;
}

function withAndroidApplicationAttributes(config, attributes) {
  return withAndroidManifest(config, (config) => {
    config.modResults = addAttributesToApplication(
      config.modResults,
      attributes
    );
    return config;
  });
}

export default {
  name: "rn-hce-test",
  slug: "rn-hce-test",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.wodin.rnhcetest",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    package: "com.wodin.rnhcetest",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    [
      "./plugins/withReactNativeHce",
      {
        appIds: ["D2760000850101", "F0010203040506", "F0394148148100"],
      },
    ],
    [
      "./plugins/withAndroidColorEdgeEffect",
      {
        color: "#123456",
      },
    ],
    [
      withAndroidApplicationAttributes,
      {
        "android:usesCleartextTraffic": false,
      },
    ],
  ],
  extra: {
    eas: {
      projectId: "5ddb00dd-eccb-4e72-82cf-6d4a0fa88f0e",
    },
  },
};
