import { BlogPostContent } from "@/components/BlogPostContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";
//import siteMetaData from "../../../../utils/siteMetaData";

const siteMetadata = {
  title: "ZimDoc",
  author: "Jephias T Mundondo",
  headerTitle: "ZimDoc Blog",
  description: "A zimbabwean health tip blog",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "https://create-blog-with-nextjs.vercel.app", // your website URL
  siteLogo: "/logo.png",
  socialBanner: "/social-banner.png", // add social banner in the public folder
  email: "codebucks27@gmail.com",
  github: "https://github.com/codebucks27",
  twitter: "https://twitter.com/code_bucks",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com/codebucks",
  linkedin: "https://www.linkedin.com/in/codebucks/",
  dribbble: "https://www.dribbble.com",
  locale: "en-US",
};

export async function generateMetadata({
  params: { slug },
}: {
  params: Params;
}) {
  const result = await wisp.getPost(slug);
  if (!result || !result.post) {
    return {
      title: "Blog post not found",
    };
  }
  const { title, description, image, createdAt, updatedAt } = result.post;

  const publishedAt = new Date(createdAt).toISOString();
  const modifiedAt = new Date(updatedAt).toISOString();

  return {
    title,
    description,
    siteName: siteMetadata.title,
    locale: "en_US",
    type: "article",
    publishedTime: publishedAt,
    modifiedTime: modifiedAt,
    openGraph: {
      title,
      description,
      images: image ? [image] : [],
    },
  };
}
interface Params {
  slug: string;
}

const Page = async ({ params: { slug } }: { params: Params }) => {
  const result = await wisp.getPost(slug);

  if (!result || !result.post) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-5">
      <Header />
      <BlogPostContent post={result.post} />
      <Footer />
    </div>
  );
};

export default Page;
