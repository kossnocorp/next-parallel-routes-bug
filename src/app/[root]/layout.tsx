export interface RootLayoutProps {
  children: React.ReactNode;
  category: React.ReactNode;
  workspace: React.ReactNode;
  params: {
    root: string;
  };
}

export default function RootLayout({
  category,
  workspace,
  params: { root },
}: RootLayoutProps) {
  const slug = decodeURIComponent(root);
  return slug[0] === "@" ? workspace : category;
}
