import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";

export default function Home() {
  return (
    <div>
      <Header />
      <Featured />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProduct = "64992ea409faccb4d1b4677e";
  mongooseConnect();
  const product = await Porduct.findById(featuredProduct);
  return {
    props: { product },
  };
}
