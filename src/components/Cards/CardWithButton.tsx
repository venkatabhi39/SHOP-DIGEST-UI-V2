import { FC } from 'react';
import { Card, Button } from 'flowbite-react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { LineDownRight } from '@/components/SvgIcons/IconList';

interface CardData {
  title: string;
  icon: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface CardsRowProps {
  cards: CardData[];
}

const TechnologyCard: FC<CardData> = ({ title, icon, description, buttonText, buttonLink }) => (
  <Card className="max-w-sm">
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center whitespace-nowrap overflow-hidden text-ellipsis">
      {icon && <img src={icon} className="w-8 rounded-lg mr-2" />}
      {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>

    <AnchorLink
      href={buttonLink || '#'}
      variant="button"
      classProp="inline-flex w-fit"
      icon={LineDownRight}
    >
      {buttonText}
    </AnchorLink>
  </Card>
);

export default TechnologyCard;
