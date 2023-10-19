import Footer from "@/Component/Shared/Footer";
import Navbar from "@/Component/Shared/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
