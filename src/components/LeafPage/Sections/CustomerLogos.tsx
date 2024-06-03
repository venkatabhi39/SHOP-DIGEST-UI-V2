// pages/index.tsx
import { NextPage } from 'next';
import CustomerSection from '@/components/Blocks/CustomerSection';

export interface Customer {
  since: number;
  logo: string;
  description: string;
  website: string;
}

export const customers: Customer[] = [
  {
    since: 2016,
    logo: 'https://seeklogo.com/images/A/amazon-logo-A065D56665-seeklogo.com.png',
    description: 'Customers since 2016',
    website: '#',
  },
  {
    since: 2005,
    logo: 'https://seeklogo.com/images/A/apple-logo-5933E519F8-seeklogo.com.png',
    description: 'Customers since 2005',
    website: '#',
  },
  {
    since: 2019,
    logo: 'https://seeklogo.com/images/G/google-g-suite-logo-134CD5BED8-seeklogo.com.png',
    description: 'Customers since 2019',
    website: '#',
  },
  {
    since: 1995,
    logo: 'https://seeklogo.com/images/M/microsoft-windows-logo-FD9A227B70-seeklogo.com.png',
    description: 'Customers since 1995',
    website: '#',
  },
];

const CustomerLogos: NextPage = () => {
  return <CustomerSection customers={customers} />;
};

export default CustomerLogos;
