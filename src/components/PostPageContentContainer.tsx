import { PropsWithChildren, useEffect, useRef, useState } from 'react';
// eslint-disable-next-line camelcase
import { Libre_Bodoni } from 'next/font/google';
import classNames from 'classnames';
import classes from '@/pages/[postSlug].module.scss';
import { AppsData } from '@/models/appsData.model';
import AppAlternativesSection from './appPage/AppAlternativesSection';
import { StyledAnchorWithoutUnderline } from './StyledLink';
import ContactUsModal from './ContactUsModal';

const blockQuoteFont = Libre_Bodoni({
  subsets: ['latin'],
  weight: '600',
});

export function PostPageRightSection() {
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);

  return (
    <div className="min-w-[320px] w-full mt-4 sticky top-4">
      <div className="w-full h-auto self-start justify-center bg-black py-8 px-4 text-white flex gap-4 flex-col">
        <h2>Let us cover your success story</h2>
        <ul className="list-disc ml-8">
          <li>Are you running a successful ecommerce store?</li>
          <li>Are you providing ecommerce services?</li>
        </ul>
        <div>We would like to write your story and share to the world.</div>
        <StyledAnchorWithoutUnderline
          className="py-2 font-semibold bg-orange-400 text-center hover:!text-white text-lg"
          onClick={e => {
            e.preventDefault();
            setContactModalOpen(true);
          }}
        >
          Contact us
        </StyledAnchorWithoutUnderline>
      </div>
      <ContactUsModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}

export function PostPageContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const blockQuotes = ref.current?.querySelectorAll('blockquote p');
    blockQuotes.forEach(item => item.classList.add(blockQuoteFont.className));
  }, []);

  return (
    <div className={classes.postContentContainer}>
      <div
        id={classes.content}
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: html
            .replaceAll('<script', '<script defer')
            .replaceAll('platform.twitter.com', 'platform.fastertwitter.com'),
        }}
      />
    </div>
  );
}

export function PostPageTitle({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className={classes.postTitle__container}>
      <h1 className={classes.postTitle} dangerouslySetInnerHTML={{ __html: title }} />
      {children}
    </div>
  );
}

export default function PostPageContentContainer({
  children,
  className,
  topApps,
}: PropsWithChildren<{ className?: string; topApps: AppsData[] }>) {
  return (
    <div className={classNames('flex flex-row max-lg:flex-col gap-10', className)}>
      <div className="grow">{children}</div>
      <div className="sm:min-w-[350px]">
        <AppAlternativesSection
          mainSectionTitle="Today's top shopify apps"
          comparedApps={topApps}
        />
        <PostPageRightSection />
      </div>
    </div>
  );
}
