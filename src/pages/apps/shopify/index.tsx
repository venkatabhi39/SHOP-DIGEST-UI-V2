import styles from './index.module.scss';
import Head from 'next/head';
import { Modal, Pagination } from 'flowbite-react';
import { useState } from 'react';
import Ellipsis from '@/components/Ellipsis';
import { FlexColumn } from '@/components/appPage/FlexColumn';
import HeroSection from '@/components/appPage/HeroSection';
import PageContainer from '@/components/appPage/PageContainer';
import SectionContainer from '@/components/appPage/SectionContainer';
import Button from '@/components/Button';
import Filters from '@/components/appCategoriesPage/Filters';
import AppFilterCard from '@/components/appCategoriesPage/AppFilterCard';
import AppCard from '@/components/appPage/AppCard';
import { GetStaticProps } from 'next';
import withFooterTopApps from '@/utils/withFooterTopApps';
import InlineBreadCrumb from '@/components/appPage/InlineBreadCrumb';
import { HiHome } from 'react-icons/hi';
import { StyledAnchor } from '@/components/StyledLink';
import { FaShopify } from 'react-icons/fa';
import SiteHeader from '@/components/siteHeader';

export const getStaticProps: GetStaticProps = withFooterTopApps();

export default function ShopifyAppsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Shopify Apps | ShopDigest</title>
      </Head>
      <SiteHeader />
      <PageContainer className={styles.pageContainer}>
        <div className="bg-white">
          <FlexColumn>
            <SectionContainer>
              <InlineBreadCrumb
                items={[
                  {
                    icon: HiHome,
                    content: <StyledAnchor href="/apps">Apps</StyledAnchor>,
                  },
                  {
                    icon: FaShopify,
                    content: <StyledAnchor href="/apps/shopify">Shopify</StyledAnchor>,
                  },
                  {
                    content: <span className="text-primary">Invoice Hero</span>,
                  },
                ]}
              />
            </SectionContainer>
            <HeroSection showRightSection={false}>
              <h1 className="font-extrabold">
                Top Shopify currency switcher apps - updated on August 2022
              </h1>
              <Ellipsis maxLines={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis soluta quibusdam,
                quo voluptas nam error culpa, exercitationem dolor magni hic fugiat ipsa suscipit
                odio minima neque repellat iure sapiente, beatae earum! Ipsam, nulla ex voluptatum
                culpa expedita reprehenderit, saepe quidem molestiae magni animi dignissimos est
                deleniti quis provident autem officiis voluptates enim architecto similique rerum?
                Atque praesentium accusamus quaerat, hic illo sint quasi vel dolore? Iusto
                laboriosam excepturi amet perspiciatis, a ex nostrum at eaque explicabo repudiandae
                laudantium tempore harum consequuntur eveniet? Modi mollitia consequatur velit iusto
                eaque dolores, laborum accusantium perspiciatis ab magnam placeat a voluptates
                repudiandae fugiat ex rerum. Iure, nobis sed ratione cum, quibusdam doloremque
                maiores ea dolor fugiat aliquam natus voluptates ullam, recusandae et atque ab eum
                at culpa exercitationem possimus in repellendus temporibus perferendis
                reprehenderit! Quis accusantium, laboriosam nisi amet eum ipsum earum tempore
                excepturi deserunt enim. Provident minima tempore eos itaque tempora accusantium
                eligendi hic autem quis nihil eum maxime eaque, non nam maiores repellendus nobis!
                Vitae hic nulla voluptatibus excepturi libero cupiditate animi, aliquam accusantium
                asperiores cumque sed obcaecati eum! Cupiditate incidunt qui amet distinctio iure
                recusandae, similique sunt ea voluptate a, aspernatur, dolorum quas odit est. Rem
                corporis sunt iure aliquam pariatur.
              </Ellipsis>
            </HeroSection>
            <div className="border-y py-2">
              <SectionContainer className="flex flex-col md:flex-row items-start md:items-center justify-between gap-x-4 gap-y-2">
                <span>
                  <b className="font-medium">Total 3 tests available</b>
                </span>
                <div className="flex flex-row gap-4 max-md:w-full items-center justify-between">
                  <Button
                    size="s"
                    aria-controls="filter-modal"
                    onClick={() => setModalOpen(true)}
                    className="md:hidden border"
                  >
                    Filters
                  </Button>
                  <Modal
                    tabIndex={-1}
                    id="filter-modal"
                    show={modalOpen}
                    onClose={() => setModalOpen(false)}
                    dismissible
                  >
                    <Modal.Header>Filters</Modal.Header>
                    <Modal.Body className="!p-0 overflow-auto">
                      <Filters />
                    </Modal.Body>
                  </Modal>

                  <span>
                    <label htmlFor="countries" className="flex items-center gap-2">
                      <span className="whitespace-nowrap text-sm font-medium text-gray-900">
                        Order by
                      </span>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-full px-2.5 py-1.5"
                      >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </label>
                  </span>
                </div>
              </SectionContainer>
            </div>
          </FlexColumn>
        </div>
        <div className="py-4 md:py-6 bg-sdGray-light">
          <SectionContainer className="flex flex-row gap-4 flex-nowrap">
            <div className="flex flex-row flex-nowrap w-full">
              <div className="min-w-[25%] mr-4 hidden md:block">
                <AppCard className="!p-0">
                  <Filters transparentBg />
                </AppCard>
              </div>
              <div className="flex-grow max-w-full">
                <FlexColumn>
                  {[...Array(10)].map((_, i) => (
                    <AppFilterCard key={i} />
                  ))}
                  <AppCard className="!p-0">
                    <Pagination
                      showIcons
                      className={styles.paginator}
                      currentPage={1}
                      totalPages={20}
                      onPageChange={() => undefined}
                    />
                  </AppCard>
                </FlexColumn>
              </div>
            </div>
          </SectionContainer>
        </div>
      </PageContainer>
    </>
  );
}
