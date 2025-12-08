import { ViewTransition } from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ViewTransition>{children}</ViewTransition>;
}
