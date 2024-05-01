// App.tsx
import React from 'react';

import NewsletterSignUp from '@/components/Cards/SubscriptionCard';

const NewsletterSubscription: React.FC = () => (
  <div className="bg-gray-50 flex justify-center py-10 sm:py-16 lg:py-20 ">
<NewsletterSignUp
  title="Sign up for our newsletter"
  description="Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter and you will be among the first to find out about new features, components, versions, and tools."
  buttonText="Subscribe"
  onSubscribe={(email) => {
    // Handle the subscription logic here
  }}
  termsUrl="/terms-of-service"
  privacyUrl="/privacy-policy"
/>
  </div>
);

export default NewsletterSubscription;
