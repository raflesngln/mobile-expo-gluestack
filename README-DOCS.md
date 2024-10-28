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
2. Install **Tailwind CSS IntelliSense** in vscode, also install **gluestack** plugins

2. Edit **settings.json** in vscode by command+shift+p , then type **preferences**

   ```bash
  {
    "tailwindCSS.experimental.classRegex": [
      ["tva\\((([^()]*|\\([^()]*\\))*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
    ]
  }
   ```
3. WE can Use **Component Snippets** with keyword **gs-**. 


## BUILD APP

## Build app ready for upload to playstore
- Instasl eas in computer
```sh
   npm install -g eas-cli
```
- Build app with aab file. It will rebuild .aab file in expo dashboard for android
```sh
   eas build --platform android
            OR
   eas build --platform ios
```

## Generate App Native folder for project
A native build locally by running command below, It will generate folder **android** and **ios** for native app:
```sh
npx expo prebuild
      OR
npx expo run:android
      or
npx expo run:ios
```

>
> If We want to rebuild and change a major fresh , then use **--clean** flag

```sh
npx expo prebuild --clean
      OR
npx expo run:android --clean
      or
npx expo run:ios --clean
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