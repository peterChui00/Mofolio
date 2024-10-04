'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/Sheet';
import { Icons } from '../Icon';
import { Button } from '../ui/Button';
import SidebarNav from './SidebarNav';
import { navItems } from '@/data/constants';
import Link from 'next/link';

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-2">
        {/* MobileSidebar header */}
        <div className="flex h-[52px] items-center justify-center">
          <Link href="/dashboard">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Mofolio
            </h3>
          </Link>
        </div>

        <SidebarNav items={navItems} />
      </SheetContent>
    </Sheet>
  );
}
