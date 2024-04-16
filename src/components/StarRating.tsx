import classNames from 'classnames';
import { AiFillStar } from 'react-icons/ai';
import { PropsWithClassName } from '@/types/common.types';

function StarRating({ rating, className }: PropsWithClassName<{ rating?: number | null }>) {
  if (rating == null) return null;

  return (
    <span
      className={classNames(
        className,
        'bg-secondary !inline-flex items-center justify-center px-2 py-1 text-white text-xs gap-[2px] rounded',
      )}
    >
      <span className="font-bold">{rating}</span>
      <AiFillStar className="inline" />
    </span>
  );
}

export default StarRating;
