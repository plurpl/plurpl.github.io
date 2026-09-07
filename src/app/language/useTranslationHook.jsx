import { useTranslation } from "react-i18next";

export const useTranslationHook = () => {
  const { t, i18n } = useTranslation();

  return { t, i18n };
};
