import "./docs.css";

import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";
import { DocsBanner } from "./docs-banner";
import { ViewTransition } from "react";

export default async function Layout({
  params,
  children,
}: LayoutProps<"/[lang]/docs">) {
  const { lang } = await params;

  return (
    <ViewTransition update="none">
      <div className="flex min-h-screen flex-col">
        <DocsBanner />
        <DocsLayout
          tree={source.pageTree[lang]}
          {...baseOptions(lang)}
          githubUrl="https://github.com/HytaleModding/site"
        >
          {children}
        </DocsLayout>
      </div>
    </ViewTransition>
  );
}
