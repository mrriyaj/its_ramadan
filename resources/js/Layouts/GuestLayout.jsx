import ApplicationLogo from '@/Components/Logo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-main dark:bg-main">
      <div>
        <Link href="/">
          <ApplicationLogo className="w-48 mb-6 fill-current" />
        </Link>
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-main-dark shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
