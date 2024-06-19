// pages/index.tsx
import { NextPage } from 'next';
import CustomerSection from '@/components/Blocks/CustomerSection';
import CustomerCard from '@/components/Cards/CustomerCard';
import { Heading } from '@/components/Heading';
import AnchorLink from '@/components/Links/AcnhorLink';

export interface Customer {
  since: number;
  logo: string;
  description: string;
  website: string;
  isWrapperLink: boolean;
}
interface CustomerSectionProps {
  customers: Customer[];
}

export const customers: Customer[] = [
  {
    since: 2016,
    logo: 'https://seeklogo.com/images/A/amazon-logo-A065D56665-seeklogo.com.png',
    description: 'Customers since 2016',
    website: '',
    isWrapperLink: true,
  },
  {
    since: 2005,
    logo: 'https://seeklogo.com/images/A/apple-logo-5933E519F8-seeklogo.com.png',
    description: 'Customers since 2005',
    website: '',
    isWrapperLink: true,
  },
  {
    since: 2019,
    logo: 'https://seeklogo.com/images/G/google-g-suite-logo-134CD5BED8-seeklogo.com.png',
    description: 'Customers since 2019',
    website: '',
    isWrapperLink: true,
  },
  {
    since: 1995,
    logo: 'https://seeklogo.com/images/M/microsoft-windows-logo-FD9A227B70-seeklogo.com.png',
    description: 'Customers since 1995',
    website: '',
    isWrapperLink: true,
  },
];

const LogoListSection: React.FC<CustomerSectionProps> = ({ customers }) => {
  const navigateToPage = page => {
    console.log('page', page);
  };

  return (
    <section className="">
      <div className="py-4 lg:py-4 px-4 mx-auto max-w-screen-xl">
        <Heading as="h2" className="mt-2 text-center">
          Top Platforms
        </Heading>
        <p className="text-center max-w-lg mx-auto mt-3">
          We use an agile approach to test assumptions and connect with the needs of your audience
          early and often.
        </p>
        <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 md:mb-8 md:mt-12">
          {customers.map((customer, index) => (
            <div
              className="cursor-pointer border rounded-md bg-white"
              onClick={() => navigateToPage(customer.website)}
            >
              <CustomerCard key={index} customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CustomerLogos: NextPage = () => {
  return <LogoListSection customers={customers} />;
};

export default CustomerLogos;
