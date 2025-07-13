// This file makes TypeScript understand the @/ path alias
// It should be placed in your src/types directory

declare module '@/components/LanguageSelector' {
  import { FC } from 'react';
  export const LanguageSelector: FC;
}

// Add other module declarations as needed
