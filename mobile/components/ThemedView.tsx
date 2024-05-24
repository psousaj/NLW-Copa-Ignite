import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  className?: string;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ className, style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View className={className} style={[{ backgroundColor }, style]} {...otherProps} />;
}
