import Footer from "./footer";
import Nav from "./nav";

type Prop = {
  children: any;
};

export default function Layout({ children }: Prop) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
