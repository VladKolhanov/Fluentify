export type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type PageProps = {
  params: Promise<Record<string, string | string[]>>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
