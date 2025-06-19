export const colors = {
  // Primary Colors (White majority)
  white: {
    DEFAULT: '#FFFFFF',
    50: '#FEFEFE',
    100: '#FDFDFD',
    200: '#FCFCFC',
    300: '#FAFAFA',
    400: '#F8F8F8',
    500: '#F5F5F5',
    600: '#F0F0F0',
    700: '#E8E8E8',
    800: '#E0E0E0',
    900: '#D8D8D8',
  },
  
  // Secondary Colors (Green)
  green: {
    DEFAULT: '#10B981',
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
  },
  
  // Accent Colors (Red)
  red: {
    DEFAULT: '#EF4444',
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
  
  // Supporting Grays
  gray: {
    DEFAULT: '#6B7280',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Brand specific colors
  brand: {
    primary: '#FFFFFF',
    secondary: '#10B981',
    accent: '#EF4444',
    text: '#1F2937',
    textLight: '#6B7280',
    background: '#FFFFFF',
    backgroundLight: '#F9FAFB',
  }
};

export type ColorName = keyof typeof colors; 