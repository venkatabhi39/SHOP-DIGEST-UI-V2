import classNames from 'classnames';

export default function Pagination({
  currPage,
  totalPages,
}: {
  currPage: number;
  totalPages: number;
}) {
  const paginationPageNumbers: number[] = [currPage];

  for (let i = currPage - 1; i > 0 && i > currPage - 4; i -= 1) {
    paginationPageNumbers.unshift(i);
  }

  for (let i = currPage + 1; i <= totalPages && paginationPageNumbers.length < 7; i += 1) {
    paginationPageNumbers.push(i);
  }

  return (
    <div>
      <nav className="text-center">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <a
              aria-disabled={currPage < 2}
              href={currPage < 2 ? '#' : `/apps/shopify/pages/${currPage - 1}`}
              className="aria-disabled:opacity-50 aria-disabled:cursor-default flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {paginationPageNumbers.map(pageNumber => (
            <li>
              <a
                href={`/apps/shopify/pages/${pageNumber}`}
                aria-current={currPage === pageNumber && 'page'}
                className={classNames(
                  'flex items-center justify-center px-3 h-8 leading-tight border border-gray-300',
                  currPage === pageNumber
                    ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                    : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700',
                )}
              >
                {pageNumber}
              </a>
            </li>
          ))}
          <li>
            <a
              aria-disabled={currPage >= totalPages}
              href={currPage >= totalPages ? '#' : `/apps/shopify/pages/${currPage + 1}`}
              className="aria-disabled:opacity-50 aria-disabled:cursor-default flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
