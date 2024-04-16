// eslint-disable-next-line camelcase
import { DM_Serif_Display as DmSerifDisplay } from 'next/font/google';
import classNames from 'classnames';
import classes from './Header.module.scss';

const logoTextFont = DmSerifDisplay({
  subsets: ['latin'],
  weight: '400',
});

export default function Header() {
  return (
    <header className={classes.container}>
      <a href="/" className={classNames(logoTextFont.className, 'my-0 2xl:mb-1 ')}>
        <h2 className="m-0">The Shop Digest.</h2>
      </a>
      <span className={classNames('text-xs 2xl:text-[1rem]')}>World wide ecommerce digest</span>
    </header>
  );
}
