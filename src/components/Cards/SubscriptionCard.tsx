import React from 'react';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { SectionHeader } from '@/components/section/SectionHeader';


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
    <div className='rounded-none border-none bg-transparent shadow-none !p-0'>
      <div aria-label="Subscribe to the newsletter" className='px-4 mx-auto max-w-8xl'>
      <SectionHeader 
            title={title}
            description={description} className='lg:mb-5 max-w-screen-md'/>
        <div className="flex items-end mt-3 max-w-screen-sm m-auto  mb-4">
        <div className="w-full" data-style="clean">
          <label for="member_email" class="hidden">Email address</label>
          <div className="relative h-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16"><path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path><path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path></svg>
              </div>
              <input type="email" id="member_email" name="email_address" className="block w-full px-3 py-4 pl-11 text-base text-gray-900 bg-white border border-gray-200 rounded-l-xl formkit-input focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required="" fdprocessedid="07lv3s"/>
              </div>
              </div>
        {/* <div class="relative w-full mr-0 formkit-field ">


 
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
          </div> */}
          <Button color="blue" onClick={handleSubscribe} className='rounded-none -ml-0 rounded-tr-xl rounded-br-xl px-4 py-2.5 text-base font-medium'>
            {buttonText}
          </Button>

        </div>
        <div className="text-sm text-gray-500 text-center">
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
    </div>
  );
};

export default NewsletterSignUp;
