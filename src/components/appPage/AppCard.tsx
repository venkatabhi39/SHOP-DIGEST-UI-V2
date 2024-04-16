import {
  createContext,
  type CSSProperties,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
  useState,
  ComponentProps,
} from 'react';
import classNames from 'classnames';
import { PropsWithClassName } from '@/types/common.types';
import styles from './AppCard.module.scss';

export type AppCardProps = PropsWithClassName<
  PropsWithChildren<{
    sectioned?: boolean;
    title?: ReactNode;
    titleSectionClassName?: JSX.IntrinsicElements['div']['className'];
    mainTitle?: string;
    titleExtraContent?: ReactNode;
    expandable?: boolean;
    isOnWhiteBg?: boolean;
    id?: string;
    expandableMaxHeight?: CSSProperties['maxHeight'];
  }>
>;

export type AppCardSectionProps = PropsWithChildren & {
  className?: string;
  subdued?: boolean;
} & ComponentProps<'div'>;

export const AppCardSection = ({ children, className, subdued, ...props }: AppCardSectionProps) => (
  <div
    {...props}
    className={classNames(
      'px-6 py-6',
      styles.cardSection,
      subdued && 'bg-gray-100 dark:bg-gray-700',
      className,
    )}
  >
    {children}
  </div>
);

export const AppCardSubSectionTitle = ({
  title,
  className,
}: PropsWithClassName<{ title: string }>) => (
  <h2 className={classNames('mb-4 font-semibold', className)}>{title}</h2>
);

// eslint-disable-next-line no-unused-vars
const AppCardExpandContext = createContext<readonly [boolean, (val: boolean) => void] | undefined>(
  undefined,
);

const AppCardShowMoreSection = ({ className }: PropsWithClassName) => {
  const contextValue = useContext(AppCardExpandContext);
  if (!contextValue) throw Error('Please use AppCardExpandContext');

  const [expanded, setExpanded] = contextValue;

  return (
    <button
      type="button"
      onClick={() => setExpanded(!expanded)}
      className={classNames(className, 'px-6 py-4 w-full outline-none border-t')}
    >
      Show {expanded ? 'less' : 'more'}{' '}
      <svg
        className={classNames(
          'w-4 transition-all h-4 inline dark:text-white',
          expanded ? 'rotate-[-180deg]' : 'rotate-0',
        )}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
        />
      </svg>
    </button>
  );
};

export default function AppCard({
  children,
  title,
  sectioned = false,
  titleExtraContent,
  isOnWhiteBg = false,
  expandable = false,
  mainTitle,
  className,
  id,
  expandableMaxHeight,
  titleSectionClassName,
}: AppCardProps) {
  const [expanded, setExpanded] = useState(!expandable);
  const contextVal = useMemo(
    () => [expanded, (newExpanded: boolean) => setExpanded(newExpanded)] as const,
    [expanded],
  );

  const blurArea = expandable && !expanded && <div className={styles.container__collapsed} />;

  return (
    <AppCardExpandContext.Provider value={contextVal}>
      <div
        id={id}
        className={classNames(
          'rounded-[4px] bg-white dark:bg-gray-800 overflow-hidden border border-sdGray-border',
          isOnWhiteBg && 'border border-gray-200 dark:border-gray-700',
          !sectioned && !title && 'p-6',
          !sectioned && title && !expandable && 'pb-6',
          sectioned && !title && !expandable && 'py-6',
          styles.container,
          className,
        )}
      >
        {title && (
          <div
            className={classNames(
              'px-6 py-4 border-b border-gray-200 dark:border-gray-700',
              titleSectionClassName,
            )}
          >
            <p className="mr-3 text-base">
              <b className="font-semibold">
                <span className="text-primary dark:text-primary-600">{title}</span>
                {titleExtraContent && <span className="ml-3">{titleExtraContent}</span>}
              </b>
            </p>
            <p className="text-xl">
              <b className="font-semibold">{mainTitle}</b>
            </p>
          </div>
        )}
        {!sectioned && title ? (
          <AppCardSection
            className={classNames(!expanded && styles.collapsedSection, 'pt-6 !pb-0 relative')}
            style={{
              maxHeight: expandable && !expanded ? expandableMaxHeight : undefined,
            }}
          >
            {children}
            {blurArea}
          </AppCardSection>
        ) : !sectioned && !title && !expandable ? (
          children
        ) : (
          <div
            style={{
              maxHeight: expandable && !expanded ? expandableMaxHeight : undefined,
            }}
            className={classNames(!expanded && styles.collapsedSection, 'relative')}
          >
            {children}
            {blurArea}
          </div>
        )}
        {expandable && <AppCardShowMoreSection className="py-2 border-t dark:border-gray-700" />}
      </div>
    </AppCardExpandContext.Provider>
  );
}
