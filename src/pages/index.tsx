import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Dummy Shop | Dummy Shop</title>
        <meta name="description" content="shoping, shop online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col md:flex-row justify-center items-center text-center h-screen">
          <div className="container mb-5 md:mb-0">
            <h1 className=" text-4xl">Welcome to Dummy Shop</h1>
          </div>
          <div className="container flex justify-center items-center">
            <Image
              src="/hero.png"
              width={800}
              height={600}
              alt="Hero image"
              className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-md"
            />
          </div>
        </div>
      </main>
    </>
  );
}
