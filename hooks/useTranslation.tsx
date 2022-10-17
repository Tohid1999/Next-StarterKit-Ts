import { useRouter } from 'next/router';

import { locales } from '@helpers/i18n';

export const useTranslation = () => {
    const { locale } = useRouter();
    const t = (value: string): string => locales[locale as string][value] ?? value;
    return { t };
};
