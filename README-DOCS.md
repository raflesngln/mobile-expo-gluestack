# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Create Project with expo

   ```bash
   npx create-expo-app@latest
   ```

2. Inititate gluestack-ui

   ```bash
    npx gluestack-ui init
   ```
2. Instal Component gluestack, like 

   ```bash
    npx gluestack-ui add box
    npx gluestack-ui add box
   ```
2. Install **Tailwind CSS IntelliSense** in vscode

2. Edit **settings.json** in vscode by command+shift+p , then type **preferences**

   ```bash
  {
    "tailwindCSS.experimental.classRegex": [
      ["tva\\((([^()]*|\\([^()]*\\))*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
    ]
  }
   ```


## Build Apk

## Build app ready for upload to playstore
- Instasl eas in computer
```sh
   npm install -g eas-cli
```
- Build app with aab file
```sh
   eas build --platform android
            OR
   eas build --platform ios
```

## Generate android Native folder for project
a native build locally by running command below, It will generate folder **android** and **ios** for native app:
```sh
npx expo run:android
      or
npx expo run:ios
```

Then we have to build manual its native app by :
```sh

1. Build the **Android** APK DEBUG :
    ```
      cd android
      ./gradlew clean
      ./gradlew assembleDebug
2. Build the **Android** APK Release :
    cd android
    ./gradlew clean
    ./gradlew assembleRelease

```