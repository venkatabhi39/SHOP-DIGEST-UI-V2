import classNames from 'classnames';
import { AppsData } from '@/models/appsData.model';

const Condition = ({
  name,
  price,
  selected = false,
}: {
  name: string;
  selected?: boolean;
  price: string;
}) => (
  <button
    type="button"
    className={classNames(
      'rounded border flex flex-col hover:bg-gray-100 dark:hover:bg-gray-600 justify-center gap-0 items-center py-1 px-14 cursor-pointer focus:ring-1 focus:outline-none focus:border-transparent focus:ring-orange-600 dark:focus:ring-orange-400',
      selected &&
        'bg-gray-50 dark:bg-gray-700 dark:focus:bg-gray-800 border-gray-300 dark:border-gray-700',
      !selected && 'border-gray-200 dark:border-gray-800',
    )}
  >
    <b
      className={classNames(
        'font-semibold',
        selected && 'text-inherit',
        !selected && 'text-gray-700 dark:text-gray-300',
      )}
    >
      {price}
    </b>
    <span className="format text-sm ">{name}</span>
  </button>
);

export default function ConditionsList({ appsData }: { appsData: AppsData }) {
  const totalPlans = (appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0);
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {totalPlans > 1 ? (
          [...Array((appsData['free-plan-count'] || 0) + (appsData['paid-plan-count'] || 0))].map(
            (_, i) => (
              <Condition
                selected
                name={appsData[`plan${i + 1}-name`]}
                price={appsData[`plan${i + 1}-cost`]}
              />
            ),
          )
        ) : (
          <Condition selected name="Free" price="Free" />
        )}
      </div>
    </div>
  );
}
