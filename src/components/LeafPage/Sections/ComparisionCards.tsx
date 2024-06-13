import { FC } from 'react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { LineDownRight } from '@/components/SvgIcons/IconList';

interface SectionProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

interface LinkProps {
  title: string;
  subtitle: string;
  linkHref: string;
  borderColor: string;
  textColor: string;
}

const LinkBlock: FC<LinkProps> = ({ title, subtitle, linkHref, borderColor, textColor }) => (
  <a
    href={linkHref}
    className={`flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 shadow dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-50 ${borderColor}`}
  >
    <div>
      <span className="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
        {subtitle}
      </span>
      <span className={`text-xl font-semibold ${textColor}`}>{title}</span>
    </div>
    <svg
      className={`w-6 h-6 ${textColor}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </a>
);

const MainSection: FC<SectionProps> = ({ title, description, linkText, linkHref }) => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8  mx-auto sm:py-16 ">
      <div className="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
        <div>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-4 text-gray-500 sm:text-xl dark:text-gray-400">{description}</p>

          <AnchorLink
            href={linkHref || '#'}
            variant="default"
            classProp="text-md font-semibold inline-flex items-center hover:underline"
            icon={LineDownRight}
          >
            {linkText}
          </AnchorLink>
        </div>
        <div>
          {/* Example usage of LinkBlock */}
          <LinkBlock
            title="Flowbite vs Google"
            subtitle="Simplicity and Affordability"
            linkHref="#"
            borderColor="border-primary-600 dark:border-primary-500"
            textColor="text-primary-600 dark:text-primary-500"
          />
          <LinkBlock
            title="Microsoft vs Apple"
            subtitle="Built for customer support"
            linkHref="#"
            borderColor="border-purple-600 dark:border-purple-500"
            textColor="text-purple-600 dark:text-purple-500"
          />
          <LinkBlock
            title="Zendesk vs Meet"
            subtitle="Modern and intuitive ui"
            linkHref="#"
            borderColor="border-teal-600 dark:border-teal-500"
            textColor="text-teal-600 dark:text-teal-500"
          />
        </div>
      </div>
    </div>
  </section>
);

const ComparisionCards = () => (
  <MainSection
    title="Compare Flowbite to other platforms on the market"
    description="Here we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
    linkText="Learn what makes Flowbite different"
    linkHref="#"
  />
);

export default ComparisionCards;
