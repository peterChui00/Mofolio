'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Icons } from '../Icon';
import { Button } from '../ui/Button';
import SidebarNav from './SidebarNav';
import { navItems } from '@/data/constants';
import { TooltipProvider } from '../ui/Tooltip';
import Link from 'next/link';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <TooltipProvider>
      <aside
        className={cn(
          `hidden h-screen transition-all duration-300 md:block`,
          isCollapsed ? 'w-20' : 'w-[20rem]',
          className
        )}
      >
        {/* Sidebar header */}
        <div
          className={cn(
            'flex h-[52px] items-center justify-center',
            !isCollapsed && 'justify-start px-3'
          )}
        >
          <Button variant="ghost" size="icon" onClick={toggleCollapse}>
            <Icons.menu />
          </Button>

          {!isCollapsed && (
            <Link href="/dashboard" className="ml-2">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Mofolio
              </h3>
            </Link>
          )}
        </div>

        <SidebarNav items={navItems} isCollapsed={isCollapsed} />
      </aside>
    </TooltipProvider>
  );
}
