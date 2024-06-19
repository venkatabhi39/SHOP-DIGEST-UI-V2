import { FC } from 'react';
import { Heading } from '@/components/Heading';
import AnchorLink from '@/components/Links/AcnhorLink';
import CardWithButton from '@/components/Cards/CardWithButton';

const CardsRow: FC<CardsRowProps> = ({ cards }) => (
  <div className="flex justify-between flex-col sm:flex-row gap-5">
    {cards.map((card, index) => (
      <div className="mb-5">
        <CardWithButton key={index} {...card} />
      </div>
    ))}
  </div>
);

const sampleCards = [
  {
    title: 'Project Management',
    icon: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s64-rw',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far.',
    buttonText: 'See Apps',
    buttonLink: '#',
  },
  {
    title: 'CRM',
    icon: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s64-rw',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far',
    buttonText: 'See Apps',
    buttonLink: '#',
  },
  {
    title: 'Customer Support',
    icon: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s64-rw',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far.',
    buttonText: 'See Apps',
    buttonLink: '#',
  },
  {
    title: 'Communication',
    icon: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s64-rw',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far.',
    buttonText: 'See Apps',
    buttonLink: '#',
  },
];

const CardsList = () => (
  <div className="py-3">
    <div className="flex md:justify-between align-middle flex-col md:flex-row justify-start">
      <Heading as="h2" className="mt-2">
        Popular apps you might like
      </Heading>
      <AnchorLink href="#" variant="default" size="small" classProp="mt-0">
        See all popular apps
      </AnchorLink>
    </div>

    <p className=" mx-auto mt-2 mb-6">We use an agile approach to test assumptions and connect</p>
    <CardsRow cards={sampleCards} />
  </div>
);

export default CardsList;
