import { getTopAppsForFooterSection } from '@/services/appPages.service';
import connectToWordpressDB from './connectToWordpressDB.mongoose';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';

export default function withFooterTopApps<
  Props extends { [key: string]: any },
  Params extends ParsedUrlQuery,
>(getStaticProps?: GetStaticProps<Props, Params>): GetStaticProps<Props, Params> {
  return async context => {
    // @ts-ignore
    const [{ props, revalidate = 604800, ...staticPropsResult } = { props: null }, footerTopApps] =
      await Promise.all([
        getStaticProps?.(context) as Promise<GetStaticPropsResult<Props>>,
        connectToWordpressDB().then(() => getTopAppsForFooterSection()),
      ]);

    return {
      ...staticPropsResult,
      revalidate,
      props: {
        ...props,
        footerTopApps,
      },
    };
  };
}
