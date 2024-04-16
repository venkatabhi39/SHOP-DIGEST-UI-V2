import { PropsWithAppData } from '@/models/appsData.model';
import AppCard, { AppCardSection, AppCardSubSectionTitle } from '@/components/appPage/AppCard';
import { StyledAnchor } from '@/components/StyledLink';
import TableContainer from '@/components/appPage/TableContainer';
import styles from './AppSupportSection.module.scss';
import Table from './Table';

const AppSupportTable = ({ appsData }: PropsWithAppData) => (
  <TableContainer className={styles.tableContainer}>
    <Table headings={['Title', 'Description']}>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Support Email
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['support-email']}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Contact Number(s)
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['support-phone-numbers']?.join(', ')}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          FAQ Page
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['faq-url'] && (
            <StyledAnchor primary href={appsData['faq-url']} target="_blank">
              FAQ Page
            </StyledAnchor>
          )}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Privacy Policy
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['privacy-policy-url'] && (
            <StyledAnchor primary href={appsData['privacy-policy-url']} target="_blank">
              Privacy Policy
            </StyledAnchor>
          )}
        </td>
      </tr>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-normal">
          Language Support
        </th>
        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
          {appsData['translated-languages']?.join(', ')}
        </td>
      </tr>
    </Table>
  </TableContainer>
);

export default function AppSupportSection({ appsData }: PropsWithAppData) {
  return (
    <AppCard id="support" sectioned title="Support" expandable>
      <AppCardSection>
        <AppCardSubSectionTitle title={`${appsData['app-name']} App Support:`} />
        <div className="space-y-4">
          <p>
            For any questions, concerns, or assistance with {appsData['app-name']}, the dedicated
            support team is readily available to help. To reach out to the support team, users can
            send an email to{' '}
            <StyledAnchor primary href={`mailto:${appsData['support-email']}`} target="_blank">
              {appsData['support-email']}.
            </StyledAnchor>
            {appsData['support-phone-numbers'] && appsData['support-phone-numbers'].length > 0 && (
              <span>
                or dial the dedicated support phone number:{' '}
                {appsData['support-phone-numbers'].join(', ')}.
              </span>
            )}
          </p>
          <p>
            Additionally, {appsData['app-name']} offers a comprehensive FAQ section to address
            common inquiries and provide self-help resources.
          </p>
          {appsData['translated-languages'] && appsData['translated-languages'].length > 0 && (
            <p>
              Details of the {appsData['app-name']} app are available in various languages on the
              Shopify app store, including {appsData['translated-languages'].join(', ')}.
            </p>
          )}
        </div>
      </AppCardSection>
      {/* {appsData['translated-languages'] && appsData['translated-languages'].length > 0 && ( */}
      {/*  <AppCardSection title="Language Support"> */}
      {/*    <AppCardSubSectionTitle title="Language Support" /> */}
      {/*    Details of the {appsData['apps-name']} apps are available in various languages on the */}
      {/*    Shopify apps store, including {appsData['translated-languages'].join(', ')}. */}
      {/*  </AppCardSection> */}
      {/* )} */}
      <AppCardSection>
        <AppCardSubSectionTitle
          title={`${appsData['app-name']} App Support Information In A Nutshell:`}
        />
        <AppSupportTable appsData={appsData} />
      </AppCardSection>
    </AppCard>
  );
}
