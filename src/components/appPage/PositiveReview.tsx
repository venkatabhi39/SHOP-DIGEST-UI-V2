import { AiFillStar } from 'react-icons/ai';
import { RatingData } from '@/models/appRating.model';
import Ellipsis from '../Ellipsis';
import AppCard from './AppCard';
import { PropsWithClassName } from '@/types/common.types';
import classNames from 'classnames';
import Image from 'next/image';
import sofiaImage from '@/assets/sofia-mcguire.png';

export default function PositiveReview({
  latestPositiveReview,
  className,
}: PropsWithClassName<{
  latestPositiveReview: RatingData | null;
}>) {
  if (!latestPositiveReview) return null;

  return (
    <AppCard
      isOnWhiteBg
      className={classNames('!py-4 !border-dashed !border-gray-400 lg:w-11/12', className)}
    >
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Image
          alt="Reviewer"
          src={sofiaImage}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full md:self-start"
        />
        <div className="space-y-2 grow overflow-hidden">
          <Ellipsis className="[&_*]:!leading-[inherit] text-sm [&_*]:break-all [&_*]:overflow-hidden [&_*]:text-ellipsis">
            <div
              dangerouslySetInnerHTML={{
                __html: latestPositiveReview.review_message,
              }}
            />
          </Ellipsis>
          <div>
            <b className="inline-flex flex-row flex-nowrap gap-1 items-center text-sm">
              <span>{latestPositiveReview.rating}</span> <AiFillStar className="inline-block" />
            </b>{' '}
            <b className="text-sm">{latestPositiveReview.store_name}</b>{' '}
            <span className="text-sm">from {latestPositiveReview.country}</span>{' '}
          </div>
        </div>
      </div>
    </AppCard>
  );
}
