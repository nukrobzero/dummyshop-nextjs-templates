import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
  postData: any;
};

export default function Blog({ postData }: Props) {
  return (
    <div className="min-h-screen max-w-7xl mx-auto p-8">
      <Head>
        <title>Blogs | Dummy Shop</title>
        <meta name="description" content="shoping, shop online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-4xl mb-5 text-center">Blog Page</h1>
        <div className="my-4">
          <ul className="grid md:grid-cols-2 gap-4">
            {postData.map((posts: any) => (
              <Link key={posts.id} href={`/blog/${posts.id}`}>
                <li className="hover:text-blue-500 shadow hover:shadow-lg p-12 rounded-md">
                  {posts.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://dummyjson.com/posts?limit=10`);
  const postData = await res.json();
  return {
    props: { postData: postData.posts },
    revalidate: 10,
  };
};
