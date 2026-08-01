import { Toaster } from "react-hot-toast";
import Accordion from "./components/accordion/Accordion";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <main className="max-w-7xl mx-auto md:px-2 py-8 min-h-screen">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div className="lg:col-span-4">
          <Accordion />
        </div>
        <div className="lg:col-span-2">
          <Checkout />
        </div>
      </div>
    </main>
  );
}

export default App;
