import Footer from "../components/Footer";
import ShopHeader from "../components/ShopHeader";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ShopHeader />
      {children}
      <Footer />
    </>
  );
}
