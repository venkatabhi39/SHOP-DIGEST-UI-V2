import { AccordionComponent } from '@/components/Accordion/Accordion';
import { Heading } from '@/components/Heading';
import AnchorLink from '@/components/Links/AcnhorLink';
import { LineArrowDown } from '@/components/SvgIcons/IconList';

export const sampleAccordionData: AccordionItem[] = [
  {
    title: 'How do I install the Teemill: Eco Print on Demand Shopify App?',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS
          including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to&nbsp;
          <a
            href="https://flowbite.com/docs/getting-started/introduction/"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            get started&nbsp;
          </a>
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </>
    ),
  },
  {
    title: 'How do I install the Teemill: Eco Print on Demand Shopify App?',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything you
          see in the library has a design equivalent in our Figma file.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out the
          <a
            href="https://flowbite.com/figma/"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            Figma design system
          </a>
          based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </>
    ),
  },
  {
    title: 'What are the key features of Teemill: Eco Print on Demand?',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Flowbite are open source under the
          MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite
          relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as
          there is no technical reason stopping you from using the best of two worlds.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
          <li>
            <a
              href="https://flowbite.com/pro/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Flowbite Pro
            </a>
          </li>
          <li>
            <a
              href="https://tailwindui.com/"
              rel="nofollow"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Tailwind UI
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function ProductInformation() {
  return (
    <div>
      <Heading as="h2" className="mt-5 mb-2 text-gray-900 ">
        FAQ
      </Heading>
      <Heading as="h4" className="mt-2 mb-6 text-gray-900 font-bold">
        Teemill: Eco Print on Demand FAQ's
      </Heading>
      <AccordionComponent items={sampleAccordionData} />

      <AnchorLink
        href={'#'}
        variant="default"
        classProp="mt-5 text-md font-semibold inline-flex items-center hover:underline"
        icon={LineArrowDown}
      >
        Show More
      </AnchorLink>
    </div>
  );
}
