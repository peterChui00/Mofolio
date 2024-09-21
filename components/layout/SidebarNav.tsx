'use client';

import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '../Icon';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { buttonVariants } from '../ui/Button';

type Props = {
  items: NavItem[];
  isCollapsed: boolean;
};

export default function SidebarNav({ items, isCollapsed }: Props) {
  const path = usePathname();

  if (!items?.length) return null;

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-3 px-3 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {items.map((item, index) => {
          const isActive = path === item.href;
          const variant = isActive ? 'default' : 'ghost';
          const Icon = Icons[item.icon ?? ''];

          return isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({
                      variant,
                      size: 'icon',
                    }),
                    'h-9 w-9',
                    variant === 'default' &&
                      'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{item.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {item.title}
                {item.label && (
                  <span className="ml-auto text-muted-foreground">
                    {item.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={item.href}
              className={cn(
                buttonVariants({ variant: variant, size: 'sm' }),
                variant === 'default' &&
                  'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                'justify-start'
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.title}
              {item.label && (
                <span
                  className={cn(
                    'ml-auto',
                    variant === 'default' && 'text-background dark:text-white'
                  )}
                >
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  /* return (
    <nav className={cn('grid gap-1', isCollapsed && 'justify-center')}>
      {items.map((item, index) => {
        const Icon = Icons[item.icon ?? ''];
        const isSelected = item.href === path;

        return (
          <Tooltip key={index} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  buttonVariants({
                    variant: isSelected ? 'default' : 'ghost',
                    size: isCollapsed ? 'icon' : 'sm',
                  }),
                  'h-9 w-9',
                  isSelected &&
                    'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                )}
              >
                <Icon className="h-4 w-4" />

                {!isCollapsed && item.title}
              </Link>
            </TooltipTrigger>

            <TooltipContent
              side="right"
              className={cn(
                'flex items-center gap-4',
                !isCollapsed && 'hidden'
              )}
            >
              {item.title}
              {item.label && (
                <span className="ml-auto text-muted-foreground">
                  {item.label}
                </span>
              )}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </nav>
  ); */
}
