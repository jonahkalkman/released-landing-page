import Image from 'next/image';
import globalStyles from './styles.js';

export default function Nav() {
  return (
    <nav className='c-nav'>
      <Image src="/logo.svg" alt="Vercel Logo" width={120} height={40} />
      <style jsx global>
        {globalStyles}
      </style>
    </nav>
  )
}
