import ThemeToggle from './ThemeToggle';
import MobileSidebar from './MobileSidebar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className="block md:hidden">
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
