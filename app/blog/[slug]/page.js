import Link from "next/link";
import BlogLeft from "@/app/Components/BlogLeft";
import BlogPostContent from "@/app/Components/BlogPostContent";
import { getBlogPostsStatic, getBlogPostStatic } from "@/app/lib/blogPosts";

export async function generateStaticParams() {
  const posts = await getBlogPostsStatic();
  // `output: "export"` fails the ENTIRE site build if a dynamic route's
  // generateStaticParams() resolves to an empty array (e.g. zero posts
  // published yet, or the API being briefly unreachable at build time) — so
  // this must always return at least one param. The placeholder slug simply
  // renders the existing "post could not be found" fallback below.
  if (!Array.isArray(posts) || posts.length === 0) {
    return [{ slug: "_placeholder" }];
  }
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getBlogPostStatic(params.slug);
  if (!post) {
    return { title: "Blog | Move It Solution" };
  }
  return {
    title: post.seo_title || `${post.title} | Move It Solution`,
    description: post.seo_description || post.excerpt || undefined,
  };
}

const BlogPostPage = async ({ params }) => {
  const post = await getBlogPostStatic(params.slug);

  return (
    <>
      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] text-nowrap">
                {post?.title || "Blog Post"}
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:flex mx-0 lg:mx-28 my-20">
        <div className="blog-details-desc w-full lg:w-2/3 px-3">
          {post ? (
            <BlogPostContent slug={params.slug} initialPost={post} />
          ) : (
            <p className="text-gray-500">This post could not be found.</p>
          )}
        </div>
        <div className="widget-area widget-area-left w-full lg:w-1/3 px-3 mt-10 lg:mt-0">
          <BlogLeft />
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
