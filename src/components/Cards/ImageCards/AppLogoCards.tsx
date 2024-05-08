import React from 'react';

interface AppIcon {
  src: string;
  alt: string;
}

interface Category {
  name: string;
  icons: AppIcon[];
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-none dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-3 text-lg font-medium tracking-normal text-gray-900 dark:text-white">
        {category.name}
      </h5>
      <div className="flex flex-wrap">
        {category.icons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="w-9 h-9 lg:w-9 lg:h-9 xl:w-9 xl:h-9 my-2 mr-2.5 rounded-lg border"
          />
        ))}
      </div>
    </div>
  );
};

interface CategoriesProps {
  categories: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className="grid  grid-cols-1 gap-5 py-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:py-6 xl:grid-cols-4 xl:py-7 2xl:py-12">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

const sampleCategories: Category[] = [
  {
    name: 'Utilities & Tools',
    icons: [
      {
        src: 'https://play-lh.googleusercontent.com/D_mqUdLcFbKZczdnW_Jl_yZ37bCSVYHBfNMwLiSMs7b0xVuXdD_77Rcq1ULNIVXk7IY=s64-rw',
        alt: 'App 1',
      },
      {
        src: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s64-rw',
        alt: 'App 2',
      },
      {
        src: 'https://play-lh.googleusercontent.com/6iyA2zVz5PyyMjK5SIxdUhrb7oh9cYVXJ93q6DZkmx07Er1o90PXYeo6mzL4VC2Gj9s=s64-rw',
        alt: 'App 3',
      },
      {
        src: 'https://play-lh.googleusercontent.com/nC95iM2f4dXas2K5x-heZ_uUVH9oc-mnlQF9phleiU2Kfk_Z1Rmwrbwv0QOdwQ__T4A=s64-rw',
        alt: 'App 4',
      },
      {
        src: 'https://play-lh.googleusercontent.com/D_mqUdLcFbKZczdnW_Jl_yZ37bCSVYHBfNMwLiSMs7b0xVuXdD_77Rcq1ULNIVXk7IY=s64-rw',
        alt: 'App 5',
      },
    ],
  },
  {
    name: 'Multimedia',
    icons: [
      {
        src: 'https://play-lh.googleusercontent.com/q8hxnbpJCYfHipSOG_5tZe5jK_89T6QIsqrEklvGpMFKH8b98pDHJf2tPcn2bxEN96ON=s64-rw',
        alt: 'App 6',
      },
      {
        src: 'https://play-lh.googleusercontent.com/D_mqUdLcFbKZczdnW_Jl_yZ37bCSVYHBfNMwLiSMs7b0xVuXdD_77Rcq1ULNIVXk7IY=s64-rw',
        alt: 'App 7',
      },
      {
        src: 'https://play-lh.googleusercontent.com/8F-0kIQuTleN9DD43WlxIz-4mqmPJ3-978fr1vYF0q_QoZRrlaD3znctc4kWguHdhUCU=s64-rw',
        alt: 'App 8',
      },
      {
        src: 'https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=s64-rw',
        alt: 'App 9',
      },
      {
        src: 'https://play-lh.googleusercontent.com/tH2ui3MqYnTyt7EG9S3DVNDO7SV7eRtts2phjaE-vZNBvf4meAx5_a5LZc_IbZGAFw=s256-rw',
        alt: 'App 10',
      },
    ],
  },
  {
    name: 'Business & Productivity',
    icons: [
      {
        src: 'https://play-lh.googleusercontent.com/D_mqUdLcFbKZczdnW_Jl_yZ37bCSVYHBfNMwLiSMs7b0xVuXdD_77Rcq1ULNIVXk7IY=s64-rw',
        alt: 'App 1',
      },
      {
        src: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s64-rw',
        alt: 'App 2',
      },
      {
        src: 'https://play-lh.googleusercontent.com/6iyA2zVz5PyyMjK5SIxdUhrb7oh9cYVXJ93q6DZkmx07Er1o90PXYeo6mzL4VC2Gj9s=s64-rw',
        alt: 'App 3',
      },
      {
        src: 'https://play-lh.googleusercontent.com/nC95iM2f4dXas2K5x-heZ_uUVH9oc-mnlQF9phleiU2Kfk_Z1Rmwrbwv0QOdwQ__T4A=s64-rw',
        alt: 'App 4',
      },
      {
        src: 'https://play-lh.googleusercontent.com/D_mqUdLcFbKZczdnW_Jl_yZ37bCSVYHBfNMwLiSMs7b0xVuXdD_77Rcq1ULNIVXk7IY=s64-rw',
        alt: 'App 5',
      },
    ],
  },
  {
    name: 'Development & IT',
    icons: [
      {
        src: 'https://play-lh.googleusercontent.com/q8hxnbpJCYfHipSOG_5tZe5jK_89T6QIsqrEklvGpMFKH8b98pDHJf2tPcn2bxEN96ON=s64-rw',
        alt: 'App 6',
      },
      {
        src: 'https://play-lh.googleusercontent.com/D_mqUdLcFbKZczdnW_Jl_yZ37bCSVYHBfNMwLiSMs7b0xVuXdD_77Rcq1ULNIVXk7IY=s64-rw',
        alt: 'App 7',
      },
      {
        src: 'https://play-lh.googleusercontent.com/8F-0kIQuTleN9DD43WlxIz-4mqmPJ3-978fr1vYF0q_QoZRrlaD3znctc4kWguHdhUCU=s64-rw',
        alt: 'App 8',
      },
      {
        src: 'https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=s64-rw',
        alt: 'App 9',
      },
      {
        src: 'https://play-lh.googleusercontent.com/tH2ui3MqYnTyt7EG9S3DVNDO7SV7eRtts2phjaE-vZNBvf4meAx5_a5LZc_IbZGAFw=s256-rw',
        alt: 'App 10',
      },
    ],
  },
  {
    name: 'Personalization',
    icons: [
      {
        src: 'https://play-lh.googleusercontent.com/D_mqUdLcFbKZczdnW_Jl_yZ37bCSVYHBfNMwLiSMs7b0xVuXdD_77Rcq1ULNIVXk7IY=s64-rw',
        alt: 'App 1',
      },
      {
        src: 'https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s64-rw',
        alt: 'App 2',
      },
      {
        src: 'https://play-lh.googleusercontent.com/6iyA2zVz5PyyMjK5SIxdUhrb7oh9cYVXJ93q6DZkmx07Er1o90PXYeo6mzL4VC2Gj9s=s64-rw',
        alt: 'App 3',
      },
      {
        src: 'https://play-lh.googleusercontent.com/nC95iM2f4dXas2K5x-heZ_uUVH9oc-mnlQF9phleiU2Kfk_Z1Rmwrbwv0QOdwQ__T4A=s64-rw',
        alt: 'App 4',
      },
      {
        src: 'https://play-lh.googleusercontent.com/D_mqUdLcFbKZczdnW_Jl_yZ37bCSVYHBfNMwLiSMs7b0xVuXdD_77Rcq1ULNIVXk7IY=s64-rw',
        alt: 'App 5',
      },
    ],
  },
  {
    name: 'Security',
    icons: [
      {
        src: 'https://play-lh.googleusercontent.com/q8hxnbpJCYfHipSOG_5tZe5jK_89T6QIsqrEklvGpMFKH8b98pDHJf2tPcn2bxEN96ON=s64-rw',
        alt: 'App 6',
      },
      {
        src: 'https://play-lh.googleusercontent.com/D_mqUdLcFbKZczdnW_Jl_yZ37bCSVYHBfNMwLiSMs7b0xVuXdD_77Rcq1ULNIVXk7IY=s64-rw',
        alt: 'App 7',
      },
      {
        src: 'https://play-lh.googleusercontent.com/8F-0kIQuTleN9DD43WlxIz-4mqmPJ3-978fr1vYF0q_QoZRrlaD3znctc4kWguHdhUCU=s64-rw',
        alt: 'App 8',
      },
      {
        src: 'https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=s64-rw',
        alt: 'App 9',
      },
      {
        src: 'https://play-lh.googleusercontent.com/tH2ui3MqYnTyt7EG9S3DVNDO7SV7eRtts2phjaE-vZNBvf4meAx5_a5LZc_IbZGAFw=s256-rw',
        alt: 'App 10',
      },
    ],
  },
  {
    name: 'Education',
    icons: [
      {
        src: 'https://play-lh.googleusercontent.com/q8hxnbpJCYfHipSOG_5tZe5jK_89T6QIsqrEklvGpMFKH8b98pDHJf2tPcn2bxEN96ON=s64-rw',
        alt: 'App 6',
      },
      {
        src: 'https://play-lh.googleusercontent.com/D_mqUdLcFbKZczdnW_Jl_yZ37bCSVYHBfNMwLiSMs7b0xVuXdD_77Rcq1ULNIVXk7IY=s64-rw',
        alt: 'App 7',
      },
      {
        src: 'https://play-lh.googleusercontent.com/8F-0kIQuTleN9DD43WlxIz-4mqmPJ3-978fr1vYF0q_QoZRrlaD3znctc4kWguHdhUCU=s64-rw',
        alt: 'App 8',
      },
      {
        src: 'https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=s64-rw',
        alt: 'App 9',
      },
      {
        src: 'https://play-lh.googleusercontent.com/tH2ui3MqYnTyt7EG9S3DVNDO7SV7eRtts2phjaE-vZNBvf4meAx5_a5LZc_IbZGAFw=s256-rw',
        alt: 'App 10',
      },
    ],
  },

  {
    name: 'Browsers',
    icons: [
      {
        src: 'https://play-lh.googleusercontent.com/q8hxnbpJCYfHipSOG_5tZe5jK_89T6QIsqrEklvGpMFKH8b98pDHJf2tPcn2bxEN96ON=s64-rw',
        alt: 'App 6',
      },
      {
        src: 'https://play-lh.googleusercontent.com/D_mqUdLcFbKZczdnW_Jl_yZ37bCSVYHBfNMwLiSMs7b0xVuXdD_77Rcq1ULNIVXk7IY=s64-rw',
        alt: 'App 7',
      },
      {
        src: 'https://play-lh.googleusercontent.com/8F-0kIQuTleN9DD43WlxIz-4mqmPJ3-978fr1vYF0q_QoZRrlaD3znctc4kWguHdhUCU=s64-rw',
        alt: 'App 8',
      },
      {
        src: 'https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=s64-rw',
        alt: 'App 9',
      },
      {
        src: 'https://play-lh.googleusercontent.com/tH2ui3MqYnTyt7EG9S3DVNDO7SV7eRtts2phjaE-vZNBvf4meAx5_a5LZc_IbZGAFw=s256-rw',
        alt: 'App 10',
      },
    ],
  },

  // Add more categories and icons as needed...
];

const AppLogoCards: React.FC = () => {
  return <Categories categories={sampleCategories} />;
};

export default AppLogoCards;
