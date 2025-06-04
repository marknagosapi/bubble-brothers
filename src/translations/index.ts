
import { huTranslations } from './hu';
import { roTranslations } from './ro';
import { enTranslations } from './en';
import type { Language } from '../types/language';

export const translations: Record<Language, Record<string, string>> = {
  hu: huTranslations,
  ro: roTranslations,
  en: enTranslations
};
