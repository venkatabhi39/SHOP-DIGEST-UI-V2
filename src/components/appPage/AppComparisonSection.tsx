import AppCard, { AppCardSection, AppCardSubSectionTitle } from '@/components/appPage/AppCard';
import { AppsData, PropsWithAppData } from '@/models/appsData.model';
import AppComparisonTableByColumn from '@/components/appPage/AppComparisonTableByColumn';
import { FlexColumn } from '@/components/appPage/FlexColumn';

export default function AppComparisonSection({
  appsData,
  alternativeApps,
}: PropsWithAppData<{
  alternativeApps: AppsData[];
}>) {
  if (alternativeApps.length < 1) {
    return null;
  }

  return (
    <AppCard title="App Comparison" sectioned expandable expandableMaxHeight={1000}>
      <AppCardSection>
        <AppCardSubSectionTitle
          title={`Top ${appsData['app-name']} Alternatives Detailed Comparison:`}
        />
        <FlexColumn>
          <p>
            The table below highlights the crucial differences between {appsData['app-name']} and
            similar other Shopify apps in the same category.
          </p>
          <AppComparisonTableByColumn currentApp={appsData} apps={alternativeApps} />
        </FlexColumn>
      </AppCardSection>
    </AppCard>
  );
}
