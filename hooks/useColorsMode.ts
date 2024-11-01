import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

// export function modeDark(
//   props: { light?: string; dark?: string },
//   colorName: keyof typeof Colors.light & keyof typeof Colors.dark
// ) {
//   const theme = useColorScheme() ?? 'light';
// //   const colorScheme = useColorScheme();
// //   const colorFromProps = props[theme];
//     return 'theme';
// }

// export function useDarkMode(
//   props: { light?: string; dark?: string },
//   colorName: keyof typeof Colors.light & keyof typeof Colors.dark
// ) {
//   const theme = useColorScheme() ?? "light";
//   const colorFromProps = props[theme];

//   if (colorFromProps) {
//     return colorFromProps;
//   } else {
//     return Colors[theme][colorName];
//   }
// }

export function useColorsMode() {
  const colorScheme = useColorScheme();
  const text = colorScheme === 'dark' ? 'Dark Mode' : 'Light Mode';
  if (colorScheme=="dark") {
    return {
      text:Colors.dark.text,
      background:Colors.dark.background,
      tint:Colors.dark.tint,
      icon:Colors.dark.icon,
      tabIconDefault:Colors.dark.tabIconDefault,
      tabIconSelected:Colors.dark.tabIconSelected,
    };
  } else {
    return {
      text:Colors.light.text,
      background:Colors.light.background,
      tint:Colors.light.tint,
      icon:Colors.light.icon,
      tabIconDefault:Colors.light.tabIconDefault,
      tabIconSelected:Colors.light.tabIconSelected,
    };
  }
}

