import { FC } from 'react';
import CardWithButton from '@/components/Cards/CardWithButton';

const CardsRow: FC<CardsRowProps> = ({ cards }) => (
  <div className="flex justify-between flex-col sm:flex-row">
    {cards.map((card, index) => (
      <div className="mb-5 mr-3">
        <CardWithButton key={index} {...card} />
      </div>
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
