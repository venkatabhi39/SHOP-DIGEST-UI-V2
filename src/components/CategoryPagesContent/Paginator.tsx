import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Merriweather_Sans as MarriweatherSans } from 'next/font/google';
import Spinner from '@/components/Spinner';
// eslint-disable-next-line camelcase

const paginatorFont = MarriweatherSans({
  weight: '500',
  subsets: ['latin'],
});

const PaginatorBtn: FC<
  PropsWithChildren<{ loading: boolean; disabled?: boolean; filled?: boolean; onClick: () => void }>
> = ({ filled, children, disabled, onClick, loading }) => (
  <button
    onClick={() => onClick()}
    type="button"
    className={classNames(
      paginatorFont.className,
      !filled && 'border border-gray-800',
      filled && 'bg-amber-600 text-white',
      (disabled || loading) && 'disabled:opacity-75 disabled:cursor-not-allowed',
      'px-4 py-2 text-center min-w-[10rem] font-bold flex items-center justify-center relative min-h-[2rem]',
    )}
    disabled={disabled}
  >
    {loading && <Spinner />}
    <div className={loading ? 'invisible' : 'visible'}>{children}</div>
  </button>
);

PaginatorBtn.defaultProps = {
  disabled: false,
  filled: false,
};
const Paginator: FC<{
  totalPages: number;
  currPageNumber: number;
  // eslint-disable-next-line react/no-unused-prop-types
  onLoadMoreClicked: () => void;
  isLoading: boolean;
}> = ({ isLoading, currPageNumber, onLoadMoreClicked, totalPages }) => (
  <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
    <PaginatorBtn
      loading={isLoading}
      filled
      onClick={() => onLoadMoreClicked()}
      disabled={currPageNumber >= totalPages}
    >
      Load More
    </PaginatorBtn>
  </div>
);

export default Paginator;
