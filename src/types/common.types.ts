import { FooterTopAppsList } from '@/services/appPages.service';

export type PropsWithClassName<T = {}> = T & { className?: string };

export type PropsWithFooterTopApps<T = {}> = T & { footerTopApps: FooterTopAppsList };
