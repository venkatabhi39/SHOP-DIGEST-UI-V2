import React from 'react';
import Link, { LinkProps } from 'next/link';
import teamOne from '@/images/team/team-05.png';
import teamTwo from '@/images/team/team-06.png';
import teamThree from '@/images/team/team-07.png';
import teamFour from '@/images/team/team-08.png';

interface Team {
  image: string;
  name: string;
  position: string;
}

const teamItems: Team[] = [
  {
    image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    name: 'Matheus Ferrero',
    position: 'Marketing Expert',
  },
  {
    image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    name: 'Stuard Ferrel',
    position: 'Digital Marketer',
  },
  {
    image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    name: 'Eva Hudson',
    position: 'Creative Designer',
  },
  {
    image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    name: 'Jackie Sanders',
    position: 'SEO Expert',
  },
];

const TeamTwo: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[1170px]">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4">
        {teamItems.map((item, index) => (
          <div
            key={index}
            className="group rounded-[10px] border border-stroke px-4 pb-10 pt-12 dark:border-strokedark"
          >
            <div className="relative z-1 mx-auto h-30 w-full max-w-30 rounded-full">
              <img className="rounded-full" src={item.image} alt="team" />
            </div>

            <div className="my-5 text-center">
              <h4 className="mb-0.5 text-lg font-bold text-black dark:text-white">{item.name}</h4>
              <p className="text-xs font-medium">{item.position}</p>
            </div>

            <div className="flex items-center justify-center gap-5.5">
              <Link href="#" className="text-bodydark2 hover:text-primary">
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3328 7.25625H11.7578H11.1953V6.69375V4.95V4.3875H11.7578H12.9391C13.2484 4.3875 13.5016 4.1625 13.5016 3.825V0.84375C13.5016 0.534375 13.2766 0.28125 12.9391 0.28125H10.8859C8.66406 0.28125 7.11719 1.85625 7.11719 4.19062V6.6375V7.2H6.55469H4.64219C4.24844 7.2 3.88281 7.50937 3.88281 7.95937V9.98438C3.88281 10.3781 4.19219 10.7438 4.64219 10.7438H6.49844H7.06094V11.3063V16.9594C7.06094 17.3531 7.37031 17.7188 7.82031 17.7188H10.4641C10.6328 17.7188 10.7734 17.6344 10.8859 17.5219C10.9984 17.4094 11.0828 17.2125 11.0828 17.0437V11.3344V10.7719H11.6734H12.9391C13.3047 10.7719 13.5859 10.5469 13.6422 10.2094V10.1813V10.1531L14.0359 8.2125C14.0641 8.01562 14.0359 7.79063 13.8672 7.56562C13.8109 7.425 13.5578 7.28437 13.3328 7.25625Z"
                    fill=""
                  />
                </svg>
              </Link>

              <Link href="#" className="text-bodydark2 hover:text-primary">
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                    fill=""
                  />
                </svg>
              </Link>

              <Link href="#" className="text-bodydark2 hover:text-primary">
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.0252 11.8065C10.5752 11.8065 11.8317 10.55 11.8317 9.00005C11.8317 7.4501 10.5752 6.1936 9.0252 6.1936C7.47524 6.1936 6.21875 7.4501 6.21875 9.00005C6.21875 10.55 7.47524 11.8065 9.0252 11.8065Z"
                    fill=""
                  />
                  <path
                    d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                    fill=""
                  />
                  <path
                    d="M13.1119 4.06445C12.7974 4.06445 12.5312 4.33058 12.5312 4.6451C12.5312 4.95961 12.7974 5.22574 13.1119 5.22574C13.4264 5.22574 13.6925 4.95961 13.6925 4.6451C13.6925 4.33058 13.4506 4.06445 13.1119 4.06445Z"
                    fill=""
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTwo;
