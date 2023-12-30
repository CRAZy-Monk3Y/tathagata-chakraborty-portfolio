import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-[#FBFBFE] dark:bg-[#191627] font-poppins">
      <div className="max-w-4xl w-full mx-auto min-h-[95vh]">
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
