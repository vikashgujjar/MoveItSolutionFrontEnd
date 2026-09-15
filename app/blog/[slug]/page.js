import Link from "next/link";
import { notFound } from "next/navigation";
import BlogLeft from "@/app/Components/BlogLeft";
import BlogPostContent from "@/app/Components/BlogPostContent";
import { getBlogPostServer } from "@/app/lib/blogPosts";

// This route is entirely CMS-driven — a post can be created, edited, or
// deleted from the admin panel at any time, so it must never be pre-built
// or cached across requests. `getBlogPostServer` uses `cache: "no-store"`,
// which is what actually makes Next.js render this route fresh per request;
// this export just makes that intent explicit and future-proof.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const post = await getBlogPostServer(params.slug);
  if (!post) {
    return { title: "Blog | Move It Solution" };
  }
  return {
    title: post.seo_title || `${post.title} | Move It Solution`,
    description: post.seo_description || post.excerpt || undefined,
  };
}

const BlogPostPage = async ({ params }) => {
  const post = await getBlogPostServer(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] text-nowrap">{post.title}</li>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:flex mx-0 lg:mx-28 my-20">
        <div className="blog-details-desc w-full lg:w-2/3 px-3">
          <BlogPostContent post={post} />
        </div>
        <div className="widget-area widget-area-left w-full lg:w-1/3 px-3 mt-10 lg:mt-0">
          <BlogLeft />
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
