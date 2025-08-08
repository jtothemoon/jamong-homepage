import Footer from "@/components/Footer";

interface ScrollLayoutProps {
  children: React.ReactNode;
}

const ScrollLayout = ({ children }: ScrollLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ScrollLayout;