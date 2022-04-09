import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

const Footer = ({children}) => {
  return (
    <footer className={styles.footer}>
      {children}
      <Link
        href={`https://www.cosmicjs.com?ref=next-restaurant-cms`}
        passHref
      >
        <a
          target='_blank'
          rel='noopener noreferrer'>
          <div className={styles.footer_copyright}>
            <p className='opensans'>
              Powered by{' '}
            </p>
            <span className={styles.footer_logo}>
              <Image src="/cosmic.svg" alt="Cosmic Logo" width={90} height={40} />
            </span> 
          </div>
        </a>
      </Link>
    </footer>
  )
}

export default Footer;