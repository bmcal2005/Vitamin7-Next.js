import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function Home() {
  const pathname = usePathname();

  return (
    <div className={clsx('container', { 'dark-mode': pathname === '/dark-mode' })}>
      <h1>Welcome to the {pathname === '/dark-mode' ? 'Dark' : 'Light'} Mode Page</h1>
      
      <Link href="/dark-mode">
        <button>Dark-Mode</button>
      </Link>
      
      <Link href="/light-mode">
        <button>Light-Mode</button>
      </Link>
      
      <p>Current mode: {pathname === '/dark-mode' ? 'Dark' : 'Light'}</p>
    </div>
  );
}

export default Home;