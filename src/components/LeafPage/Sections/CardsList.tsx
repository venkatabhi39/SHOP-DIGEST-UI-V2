import { FC } from 'react';
import CardWithButton from '@/components/Cards/CardWithButton';

const CardsRow: FC<CardsRowProps> = ({ cards }) => (
  <div className="flex justify-between space-x-4">
    {cards.map((card, index) => (
      <CardWithButton key={index} {...card} />
    ))}
  </div>
);

const sampleCards = [
  {
    title: 'Noteworthy technology acquisitions 2021',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    buttonText: 'Read more',
    buttonLink: '#',
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    buttonText: 'Read more',
    buttonLink: '#',
  },
  {
    title: 'Noteworthy technology acquisitions 2021',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    buttonText: 'Read more',
    buttonLink: '#',
  },
];

const CardsList = () => (
  <div className="py-3">
    <CardsRow cards={sampleCards} />
  </div>
);

export default CardsList;
