import Accordion from "./components/accordion/Accordion";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Accordion />
        </div>
        <div className="lg:col-span-1">
          <Checkout />
        </div>
      </div>
    </main>
  );
}

export default App;
