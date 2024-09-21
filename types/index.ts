import { Icons } from '@/components/Icon';

export type NavItem = {
  title: string;
  href: string;
  label?: string;
  icon?: keyof typeof Icons;
};
