import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

type Props = {
  productsData: any;
};

export default function ProductsSlug({ productsData }: Props) {
  return (
    <div>
      <div key={productsData.id} className="flex flex-row">
        <div className="container grid grid-cols-2">
          {productsData.images.map((items: any) => (
            <Image
              key={items}
              src={items}
              width={200}
              height={200}
              alt={productsData.title}
            />
          ))}
        </div>
        <div className="container">
          <h1>Title: {productsData.title}</h1>
          <h1>Brand: {productsData.brand}</h1>
          <h1>Category: {productsData.category}</h1>
          <h1>Description: {productsData.description}</h1>
          <h1>Price: {productsData.price}$</h1>
          <h1>Rating: {productsData.rating}</h1>
          <h1>Stock: {productsData.stock}</h1>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://dummyjson.com/products?limit=10`);
  const productsData = await res.json();
  const paths = productsData.products.map((items: any) => {
    return {
      params: { slug: items.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const slug = params.slug;
  const res = await fetch(`https://dummyjson.com/products/${slug}`);
  const productsData = await res.json();
  return {
    props: { productsData },
    revalidate: 10,
  };
};
