import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <Aside />
        <section id="index">
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}
