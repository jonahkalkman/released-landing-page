import Image from 'next/image';
import globalStyles from './styles.js';

export default function Nav() {
  return (
    <nav className='c-nav'>
      <Image src="/logo.svg" alt="Vercel Logo" width={120} height={40} objectFit="contain" />
      <div className="c-menu">
        <Image src="/hamburger.svg" alt="menu icon" width={22} height={18} />
      </div>
      <style jsx global>
        {globalStyles}
      </style>
    </nav>
  )
}
