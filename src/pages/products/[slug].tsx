import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

type Props = {
  productsData: any;
};

export default function ProductsSlug({ productsData }: Props) {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    autoplay: true,
  };
  return (
    <div className="max-w-6xl mx-auto py-8 min-h-screen">
      <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-0">
        <div className="w-full md:w-[600px] rounded-lg">
          <Slide {...properties}>
            {productsData.images.map((items: any, idx: any) => (
              <Image
                key={idx}
                src={items}
                width={800}
                height={400}
                alt={productsData.title}
                style={{ objectFit: "contain" }}
                priority={true}
                className="w-[600px] h-[400px]"
              />
            ))}
          </Slide>
        </div>
        <div className="container">
          <h1>
            <span className="font-bold">Title:</span> {productsData.title}
          </h1>
          <h1>
            <span className="font-bold">Brand:</span> {productsData.brand}
          </h1>
          <h1>
            <span className="font-bold">Category:</span> {productsData.category}
          </h1>
          <h1>
            <span className="font-bold">Description:</span>{" "}
            {productsData.description}
          </h1>
          <h1>
            <span className="font-bold">Price:</span> {productsData.price}$
          </h1>
          <h1>
            <span className="font-bold">Rating:</span> {productsData.rating}
          </h1>
          <h1>
            <span className="font-bold">Stock:</span> {productsData.stock}
          </h1>
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
