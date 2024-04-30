import React from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { SectionHeader } from '@/components/section/SectionHeader';
import { HiMail } from "react-icons/hi";

interface NewsletterSignUpProps {
  title: string;
  description: string;
  buttonText: string;
  onSubscribe: (email: string) => void; // A function to handle the subscribe action
  termsUrl: string; // URL for the Terms of Service
  privacyUrl: string; // URL for the Privacy Policy
}

const NewsletterSignUp: React.FC<NewsletterSignUpProps> = ({
  title,
  description,
  buttonText,
  onSubscribe,
  termsUrl,
  privacyUrl,
}) => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = () => {
    onSubscribe(email);
  };

  return (
    <Card className='rounded-none border-none bg-transparent shadow-none'>
      <div aria-label="Subscribe to the newsletter">
      <SectionHeader 
            title={title}
            description={description} className='lg:mb-5'/>
        <div className="flex items-end mt-3">
        <div class="relative w-full mr-0 formkit-field ">


 
          <TextInput
            id="member_email"
            type="email"
            placeholder="Email your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className='rounded-none !border-none'
            style={{border: '1px solid #ddd'}}
            icon={HiMail}
            color=""
            sizing="md"
          //   icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          //   <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
          // </svg>}
          />  
          </div>
          <Button color="blue" onClick={handleSubscribe} className='rounded-none -ml-3 rounded-tr-md rounded-br-md'>
            {buttonText}
          </Button>

        </div>
        <div className="text-sm text-gray-500 mt-3 text-center">
          By subscribing, you agree with ConvertKit's{' '}
          <a href={termsUrl} className="text-blue-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href={privacyUrl} className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </Card>
  );
};

export default NewsletterSignUp;
