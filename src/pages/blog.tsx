import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
  postData: any;
};

export default function Blog({ postData }: Props) {
  return (
    <div>
      <Head>
        <title>Blogs | Dummy Shop</title>
        <meta name="description" content="shoping, shop online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl mb-5">Blog Page</h1>
      <div>
        {postData.map((posts: any) => (
          <Link key={posts.id} href={`/blog/${posts.id}`}>
            <ul>
              <li className="hover:text-blue-500">{posts.title}</li>
            </ul>
          </Link>
        ))}
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
