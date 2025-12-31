import { getPageImage, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { generate as DefaultImage } from "fumadocs-ui/og";

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  if (lang === "ar-SA") {
    return notFound();
  }

  const page = source.getPage([], lang);
  if (!page) return notFound();

  return new ImageResponse(
    (
      <DefaultImage
        title={page.data.title}
        description={page.data.description}
        site="HytaleModding"
      />
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return source.getPages()
    .filter((page) => getPageImage(page).segments.length === 0) 
    .map((page) => ({
      lang: page.locale,
    }));
}