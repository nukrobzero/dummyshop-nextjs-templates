import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  postData: any;
};

export default function BlogSingle({ postData }: Props) {
  return (
    <div className="min-h-screen max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2">{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://dummyjson.com/posts?limit=10`);
  const postData = await res.json();
  const paths = postData.posts.map((post: any) => {
    return {
      params: { slug: post.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(`https://dummyjson.com/posts/${params.slug}`);
  const postData = await res.json();
  return {
    props: { postData },
    revalidate: 10,
  };
};
