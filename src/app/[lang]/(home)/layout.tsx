import { ViewTransition, type ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  return (
    <ViewTransition update="none">
      <HomeLayout {...baseOptions(lang)}>{children}</HomeLayout>
    </ViewTransition>
  );
}
