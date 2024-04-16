/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions */
import classNames from 'classnames';
import { StyledAnchor } from '@/components/StyledLink';

type Props = {
  open: boolean;
  onClose?: () => void;
};

export default function ContactUsModal({ open, onClose }: Props) {
  return (
    <div
      tabIndex={-1}
      aria-hidden={open ? undefined : 'true'}
      aria-modal="true"
      role="dialog"
      className={classNames(
        !open && 'hidden',
        'bg-black bg-opacity-90 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 min-h-screen h-full justify-center items-center flex',
      )}
      onClick={() => onClose?.()}
    >
      <div
        className="relative w-full max-w-2xl max-h-full"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-start flex-nowrap flex-row">
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                You can contact us on this mail id:{' '}
                <StyledAnchor href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL}`}>
                  {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
                </StyledAnchor>
              </p>
            </div>

            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => onClose?.()}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
