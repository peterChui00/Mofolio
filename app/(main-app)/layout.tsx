import PageContainer from '@/components/layout/PageContainer';
import Sidebar from '@/components/layout/Sidebar';

export default function MainAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1">
        <PageContainer scrollable>{children}</PageContainer>
      </main>
    </div>
  );
}
