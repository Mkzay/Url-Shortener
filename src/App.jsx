import Head from "./components/header";
import Shortener from "./components/shortener";
import Body from "./components/body";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center text-lg font-Poppins">
      <Head />
      <Shortener />
      <Body />
      <Footer />
    </div>
  );
}
