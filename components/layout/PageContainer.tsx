import { ScrollArea } from '../ui/ScrollArea';

type Props = {
  children: React.ReactNode;
  scrollable?: boolean;
};

export default function PageContainer({ children, scrollable }: Props) {
  const Page = (
    <div className="flex h-full min-h-0 flex-1 flex-col p-4">{children}</div>
  );

  if (scrollable) {
    return <ScrollArea className="h-dvh">{Page}</ScrollArea>;
  }

  return Page;
}
