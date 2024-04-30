// App.tsx
import React from 'react';

import NewsletterSignUp from '@/components/Cards/SubscriptionCard';

const NewsletterSubscription: React.FC = () => (
  <div className="bg-gray-50 flex justify-center py-5">
<NewsletterSignUp
  title="Sign up for our newsletter"
  description="Sign up for our newsletter and you'll be among the first to find out about new features. Here at Flowbite we focus on markets where technology, innovation."
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
