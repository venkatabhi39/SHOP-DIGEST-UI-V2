import React from 'react';
import { Card, Button } from 'flowbite-react';
import classNames from 'classnames';
import styles from '@/components/FormFields/Dropdown.module.scss';
import Dropdown from '@/components/FormFields/Dropdown';

const CustomCard = ({
  title,
  description,
  buttonLabel,
  backgroundImage,
  backgroundColor,
  link,
  backgroundPos,
  textColor,
}) => {
  return (
    <div className="w-full mx-auto my-4">
      <div className="flex justify-between items-center mb-4 md:flex-row flex-col">
        <h2 className="font-bold">Developer Tools</h2>
        <div>
          <div className="mt-2 md:mt-0 border border-gray-300 inline-flex rounded-full whitespace-nowrap mr-3">
            <Dropdown
              //icon={<ImCalendar />}
              classes={classNames(styles.smDropdownContainer)}
              value={'filterby'}
              //onChange={newCategory => setCategory(newCategory)}
              label="Filter By"
              items={[
                {
                  label: 'Filter By',
                  value: 'filterby',
                },
                {
                  label: 'Sort',
                  value: 'sort',
                },
              ]}
            />
          </div>
          <div className="border border-gray-300 inline-flex rounded-full whitespace-nowrap">
            <Dropdown
              //icon={<ImCalendar />}
              classes={classNames(styles.smDropdownContainer)}
              value={'orderby'}
              //onChange={newCategory => setCategory(newCategory)}
              label="Order By"
              items={[
                {
                  label: 'Order By',
                  value: 'orderby',
                },
                {
                  label: 'Sort',
                  value: 'sort',
                },
              ]}
            />
          </div>
        </div>
      </div>
      <Card
        style={{
          backgroundColor,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundPosition: backgroundPos || 'right center',
          backgroundRepeat: 'no-repeat',
        }}
        horizontal
        className="flex justify-between items-center min-h-60 rounded-2xl shadow-none max-w-full lg:max-w-full"
      >
        <div className="bg-white bg-opacity-60 p-4 sm:bg-transparent sm:bg-opacity-100">
          <h3 className={`text-2xl font-semibold`} style={{ color: textColor || 'inherit' }}>
            {title}
          </h3>
          <p style={{ color: textColor || 'inherit' }}>{description}</p>
          <Button
            color="light"
            pill
            className="bg-transparent mt-4 border-gray-500 border-2"
            style={{ color: textColor || 'inherit' }}
          >
            {buttonLabel}
          </Button>
        </div>
      </Card>
    </div>
  );
};

const BannerCard = () => {
  return (
    <>
      <div className="">
        <CustomCard
          title="Favourites of 2023"
          description="Discover the standout extensions that made our year"
          buttonLabel="See Collection"
          backgroundImage="https://i.ibb.co/kHbpRHY/6132448-36471-removebg-preview.png"
          backgroundColor="#EFFBE7"
          backgroundPos="96% center"
          link="#"
        />
      </div>
    </>
  );
};

export default BannerCard;
