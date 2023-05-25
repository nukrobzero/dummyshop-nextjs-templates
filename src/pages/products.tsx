import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type Props = {
  productsData: any;
};

export default function Products({ productsData }: Props) {
  return (
    <div>
      <Head>
        <title>All Products | Dummy Shop</title>
        <meta name="description" content="shoping, shop online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-red-300 mb-5 text-white text-4xl flex justify-center items-center h-[100px]">
        <h1>Products</h1>
      </div>
      <div className="grid md:grid-cols-4 gap-8 gap-y-14 justify-items-center items-center mb-16 p-8">
        {productsData.map((items: any) => (
          <div key={items.id} className="shadow-md hover:shadow-lg">
            <Link href={`/products/${items.id}`}>
              <div>
                <div>
                  <Image
                    src={items.thumbnail}
                    width={800}
                    height={400}
                    alt={items.title}
                    priority={true}
                    style={{ objectFit: "cover" }}
                    className="w-[300px] h-[200px] justify-items-center rounded-t-md"
                  />
                </div>
                <div className="p-4">
                  <h1>{items.title}</h1>
                  <p>{items.discountPercentage}$</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://dummyjson.com/products?limit=10`);
  const productsData = await res.json();
  return {
    props: { productsData: productsData.products },
    revalidate: 10,
  };
};
