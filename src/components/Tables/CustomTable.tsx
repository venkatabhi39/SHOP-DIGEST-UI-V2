import { useState } from 'react';
import type { NextPage } from 'next';
import { Table, Pagination, TextInput, Checkbox, Rating } from 'flowbite-react';
import AnchorLink from '@/components/Links/AcnhorLink';
import { LineArrowDown, ArrowRightIcon } from '@/components/SvgIcons/IconList';

interface Product {
  id: number;
  img: string;
  name: string;
  category: string;
  developer: string;
  price: string;
  availability: boolean;
  rating: number;
  reviewCount: number;
}

interface ProductTableProps {
  products: Product[];
}
const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mx-auto my-6 shadow-lg border rounded-xl pt-4 custom-table">
      <div className="flex justify-between mb-4 px-4">
        <div className="pb-3 flex flex-wrap">
          <div className="hidden md:flex items-center text-sm font-medium text-gray-900 dark:text-white mr-4 mt-3">
            Show only:
          </div>
          <div className="flex flex-wrap">
            <div className="flex items-center mt-3 mr-4">
              <input
                id="all-tasks"
                type="radio"
                value=""
                name="show-only"
                class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="all-tasks"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                All
              </label>
            </div>
            <div className="flex items-center mr-4 mt-3">
              <input
                id="completed"
                type="radio"
                value=""
                name="show-only"
                class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="completed"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Active Products
              </label>
            </div>
            <div className="flex items-center mr-4 mt-3">
              <input
                id="in-progress"
                type="radio"
                value=""
                name="show-only"
                class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="in-progress"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Pending Products
              </label>
            </div>
          </div>
        </div>
        <TextInput placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} />
      </div>
      <div className="overflow-x-auto">
        <Table hoverable={true} border={true}>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell className="font-semibold text-sm">App</Table.HeadCell>
            <Table.HeadCell className="font-semibold text-sm">Category</Table.HeadCell>
            <Table.HeadCell className="font-semibold text-sm">Developer</Table.HeadCell>
            <Table.HeadCell className="font-semibold text-sm">Price</Table.HeadCell>
            <Table.HeadCell className="font-semibold text-sm">Free Plan</Table.HeadCell>
            <Table.HeadCell className="font-semibold text-sm">Rating</Table.HeadCell>
            <Table.HeadCell className="font-semibold text-sm">Read More</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {paginatedProducts.map(product => (
              <Table.Row
                key={product.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <img src={product.img} className="h-8 w-8 mr-2 inline-block" />
                  {product.name}
                </Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell className="font-semibold">{product.developer}</Table.Cell>
                <Table.Cell className="font-semibold">{product.price}</Table.Cell>
                <Table.Cell>
                  {product.availability ? (
                    <span className="text-green-500 rounded-xl bg-green-100 px-4 py-1 text-xs font-semibold inline-flex items-center">
                      <b className="w-2 h-2 bg-green-500 rounded-full inline-block  mr-1"></b>
                      Available
                    </span>
                  ) : (
                    <span className="text-red-500 rounded-xl bg-red-100 px-4  py-1 text-xs font-semibold  inline-flex  items-center">
                      <b className="w-2 h-2 bg-red-500  rounded-full  inline-block mr-1"></b>
                      Unavailable
                    </span>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center">
                    {/* {product.rating} <span className="ml-1">({product.reviewCount})</span> */}

                    <div className="flex items-center">
                      <span className="py-1 px-1.5 bg-green-500 flex rounded-md">
                        <span className="text-sm font-medium text-white mr-1">
                          {product.rating}
                        </span>

                        <Rating>
                          <Rating.Star className="text-white w-4" />
                        </Rating>
                      </span>
                      <span className="ml-2 text-sm font-medium">({product?.reviewCount})</span>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <AnchorLink
                    href="#"
                    variant="button"
                    size="small"
                    icon={ArrowRightIcon}
                    classProp="mt-0"
                  >
                    Read more
                  </AnchorLink>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="flex justify-between my-4 px-4">
        <div className="flex items-center space-x-3">
          <label for="rows" class="text-xs font-normal text-gray-500 dark:text-gray-400">
            Rows per page
          </label>
          <select
            id="rows"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block py-1.5 pl-3.5 pr-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option selected="" value="10">
              10
            </option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <div className="text-xs font-normal text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
            of
            <span className="font-semibold text-gray-900 dark:text-white">100</span>
          </div>
        </div>
        <AnchorLink
          href="#"
          variant="default"
          size="small"
          icon={LineArrowDown}
          classProp="mt-0 flex items-center"
        >
          Show more
        </AnchorLink>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

const CustomTable: NextPage = () => {
  const sampleProducts: Product[] = [
    {
      id: 1,
      name: 'Apple iMac 27"',
      img: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png',
      category: 'PC',
      developer: 'Apple',
      price: '$2999',
      availability: true,
      rating: 5,
      reviewCount: 72,
    },
    {
      id: 2,
      name: 'Xbox Series S',
      img: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png',
      category: 'Gaming/Console',
      developer: 'Microsoft',
      price: '$299',
      availability: false,
      rating: 5,
      reviewCount: 72,
    },
    {
      id: 3,
      name: 'PlayStation 5',
      img: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-watch-se.png',
      category: 'Gaming/Console',
      developer: 'Sony',
      price: '$799',
      availability: true,
      rating: 5,
      reviewCount: 72,
    },
    {
      id: 4,
      name: 'Xbox Series X',
      img: 'https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/benq-ex2710q.png',
      category: 'Gaming/Console',
      developer: 'Microsoft',
      price: '$699',
      availability: false,
      rating: 5,
      reviewCount: 72,
    },
  ];
  return (
    <div>
      <ProductTable products={sampleProducts} />
    </div>
  );
};

export default CustomTable;
