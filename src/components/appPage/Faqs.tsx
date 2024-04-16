/* eslint-disable jsx-a11y/anchor-is-valid */
import { Accordion as FbAccordion } from 'flowbite-react';
import AppCard, { AppCardSection, AppCardSubSectionTitle } from '@/components/appPage/AppCard';
import { PropsWithAppData } from '@/models/appsData.model';
import { StyledAnchor } from '@/components/StyledLink';
import TickMarkedList from '@/components/appPage/TickMarkedList';
import { formatAppName, getPaidPlanCostsInIncreasingOrder } from '@/services/appPages.service';
import styles from './Faqs.module.scss';

export default function Faqs({ appsData }: PropsWithAppData) {
  const titleProps = {
    as: 'h4',
    className: styles.title,
  } as const;
  const contentProps = {
    className: styles.content,
  } as const;

  return (
    <AppCard
      id="faq"
      title="Frequently Asked Questions (FAQ’s)"
      expandable
      sectioned
      expandableMaxHeight={350}
      // mainTitle={`${appsData['apps-name']} FAQ’s`}
    >
      <AppCardSection>
        <AppCardSubSectionTitle title={`${appsData['app-name']} FAQ’s`} />
        <FbAccordion collapseAll flush>
          <FbAccordion.Panel>
            <FbAccordion.Title {...titleProps}>
              How do I install the {formatAppName(appsData['app-name'])}?
            </FbAccordion.Title>
            <FbAccordion.Content {...contentProps}>
              <p className="mb-2">
                To install {appsData['app-name']} app on your Shopify store, click on the{' '}
                <StyledAnchor target="_blank" href={appsData['app-url'] || '#'}>
                  {appsData['app-name']} installation link
                </StyledAnchor>
                . Login to the Shopify store on which you want to install the app and follow the{' '}
                onboarding process.
              </p>
              <p>
                If you need our expert guidance to help you install {appsData['app-name']} on your
                Shopify store, then contact us now.
              </p>
            </FbAccordion.Content>
          </FbAccordion.Panel>
          <FbAccordion.Panel flush>
            <FbAccordion.Title {...titleProps}>
              How do I install the {formatAppName(appsData['app-name'])}?`
            </FbAccordion.Title>
            <FbAccordion.Content {...contentProps}>
              <p className="mb-2">
                To install {appsData['app-name']} app on your Shopify store, click on the{' '}
                <StyledAnchor target="_blank" href={appsData['app-url'] || '#'}>
                  {appsData['app-name']} installation link
                </StyledAnchor>
                . Login to the Shopify store on which you want to install the app and follow the{' '}
                onboarding process.
              </p>
              <p>
                If you need our expert guidance to help you install {appsData['app-name']} on your
                Shopify store, then contact us now.
              </p>
            </FbAccordion.Content>
          </FbAccordion.Panel>
          <FbAccordion.Panel>
            <FbAccordion.Title {...titleProps}>
              What are the key features of {appsData['app-name']}?`
            </FbAccordion.Title>
            <FbAccordion.Content {...contentProps}>
              <p className="mb-2">
                The key features offered by {appsData['app-name']} to Shopify store owners are:
              </p>
              {appsData['features-list'] && (
                <div>
                  <TickMarkedList list={appsData['features-list']} />
                </div>
              )}
            </FbAccordion.Content>
          </FbAccordion.Panel>
          <FbAccordion.Panel>
            <FbAccordion.Title {...titleProps}>
              Does {appsData['app-name']} integrate with other Shopify apps or tools?
            </FbAccordion.Title>
            <FbAccordion.Content {...contentProps}>
              <p className="mb-2">
                {appsData['integrations-list']?.length === 0
                  ? `Yes, ${
                      appsData['app-name']
                    } seamlessly integrates with other Shopify apps or tools, such as ${appsData[
                      'integrations-list'
                    ].join(', ')}.`
                  : `${appsData['app-name']} has not made any official mention of integrating with other Shopify apps or tools. To obtain further information, kindly reach out to their support team or consult your Shopify developer.`}
              </p>
            </FbAccordion.Content>
          </FbAccordion.Panel>
          <FbAccordion.Panel>
            <FbAccordion.Title {...titleProps}>
              Is there a free trial available for {appsData['app-name']}?
            </FbAccordion.Title>
            <FbAccordion.Content {...contentProps}>
              <p>
                {appsData['trial-days'] == null || appsData['trial-days'] === 0
                  ? `No, ${appsData['app-name']} does not offer any free trial.`
                  : `Yes, ${appsData['app-name']} offers trial-days days free trial on all its paid plans.`}
              </p>
            </FbAccordion.Content>
          </FbAccordion.Panel>
          <FbAccordion.Panel>
            <FbAccordion.Title {...titleProps}>
              `What are the pricing plans for {appsData['app-name']}?`
            </FbAccordion.Title>
            <FbAccordion.Content {...contentProps}>
              {(appsData['paid-plan-count'] || 0) === 0 && (
                <p>
                  {(appsData['free-plan-count'] || 0) === 1
                    ? `The app offers ${
                        appsData['free-plan-count'] || 0
                      } plan that is forever-free.`
                    : `The app offers ${
                        appsData['free-plan-count'] || 0
                      } plans that are forever-free.`}
                </p>
              )}
              {(appsData['free-plan-count'] || 0) === 0 &&
                (appsData['paid-plan-count'] || 0) === 1 && (
                  <p>
                    The app offers {appsData['paid-plan-count'] || 0} paid plan, which costs{' '}
                    {appsData['plan1-cost']}, and{' '}
                    {appsData['trial-days'] !== 0
                      ? `Comes with a ${appsData['trial-days']}-day free trial period.`
                      : `has no free trial period.`}
                  </p>
                )}
              {(appsData['free-plan-count'] || 0) === 0 &&
                (appsData['paid-plan-count'] || 0) > 1 && (
                  <p>
                    The app offers {appsData['paid-plan-count'] || 0} paid plans, which costs{' '}
                    {getPaidPlanCostsInIncreasingOrder(appsData).join(', ')}.
                    {appsData['trial-days'] !== 0
                      ? `The paid plans also come with a ${appsData['trial-days']}-day free trial period.`
                      : `The paid plans have no free trial period.`}
                  </p>
                )}
              {(appsData['free-plan-count'] || 0) !== 0 &&
                (appsData['paid-plan-count'] || 0) === 1 && (
                  <p>
                    The app has{' '}
                    {(appsData['paid-plan-count'] || 0) + (appsData['free-plan-count'] || 0)}{' '}
                    pricing plans: {appsData['free-plan-count'] || 0} free and
                    {appsData['paid-plan-count'] || 0} pain. The paid plan costs{' '}
                    {appsData['plan1-cost']}, and{' '}
                    {appsData['trial-days'] !== 0
                      ? `comes with a ${appsData['trial-days']}-day free trial period.`
                      : `has no free trial period.`}
                  </p>
                )}
              {(appsData['free-plan-count'] || 0) !== 0 &&
                (appsData['free-plan-count'] || 0) > 1 && (
                  <p>
                    The app has{' '}
                    {(appsData['paid-plan-count'] || 0) + (appsData['free-plan-count'] || 0)}{' '}
                    pricing plans:
                    {appsData['free-plan-count'] || 0} free and {appsData['paid-plan-count'] || 0}{' '}
                    paid. The paid plans cost{' '}
                    {getPaidPlanCostsInIncreasingOrder(appsData).join(', ')}, and{' '}
                    {appsData['trial-days'] !== 0
                      ? `comes with a ${appsData['trial-days']}-day free trial period.`
                      : `has no free trial period.`}
                  </p>
                )}
            </FbAccordion.Content>
          </FbAccordion.Panel>
          <FbAccordion.Panel>
            <FbAccordion.Title {...titleProps}>
              How does billing work for {appsData['app-name']}?`
            </FbAccordion.Title>
            <FbAccordion.Content {...contentProps}>
              <p>
                {appsData['trial-days'] == null || appsData['trial-days'] === 0
                  ? `No, ${appsData['app-name']} does not offer any free trial.`
                  : `Yes, ${appsData['app-name']} offers trial-days days free trial on all its paid plans.`}
              </p>
            </FbAccordion.Content>
          </FbAccordion.Panel>
          <FbAccordion.Panel>
            <FbAccordion.Title {...titleProps}>
              Can I cancel or upgrade my subscription plan at any time?
            </FbAccordion.Title>
            <FbAccordion.Content {...contentProps}>
              <p>
                Yes, {appsData['app-name']} allows its subscribers to cancel or upgrade their
                subscription plan at any time.
              </p>
            </FbAccordion.Content>
          </FbAccordion.Panel>
          <FbAccordion.Panel>
            <FbAccordion.Title {...titleProps}>
              Does {appsData['app-name']} offer customer support? How can I get assistance?
            </FbAccordion.Title>
            <FbAccordion.Content {...contentProps}>
              <p>
                Yes, {appsData['app-name']} offers a dedicated support team for any kind of
                app-related assistance. To reach out to the support team, users can send an email to{' '}
                {appsData['support-email']}
                {appsData['support-phone-numbers'] != null
                  ? `or dial the dedicated support phone number(s): ${appsData[
                      'support-phone-numbers'
                    ].join(', ')}`
                  : '.'}{' '}
                {appsData['faq-url'] && (
                  <span>
                    Additionally, {appsData['app-name']} offers a comprehensive{' '}
                    <StyledAnchor target="_blank" href={appsData['faq-url']}>
                      FAQ section
                    </StyledAnchor>{' '}
                    to address common inquiries and provide self-help resources.
                  </span>
                )}
              </p>
            </FbAccordion.Content>
          </FbAccordion.Panel>
          <FbAccordion.Panel className={!appsData['support-email'] ? 'hidden' : ''}>
            <FbAccordion.Title {...titleProps}>
              {appsData['app-name'] && (
                <>Is {appsData['app-name']} compatible with my Shopify theme?</>
              )}
            </FbAccordion.Title>
            <FbAccordion.Content {...contentProps}>
              <p>
                Please reach out to their support team at support-email to confirm its compatibility
                with your specific Shopify theme.
              </p>
            </FbAccordion.Content>
          </FbAccordion.Panel>
        </FbAccordion>
      </AppCardSection>
    </AppCard>
  );
}
