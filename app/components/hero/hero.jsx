import Image from 'next/image';
import globalStyles from './styles.js';

export default function Hero() {
  return (
    <div className='c-hero'>
      <h1 className="hero__title">
        New <span>Music</span><br></br> Get Notified
      </h1>
      <div className="hero__image">
        <Image src="/phone.png" width="600" height="800" objectFit="contain" />
      </div>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}
