import { Card } from "./components/Card";
import { Header } from "./components/Header";

import pastaImage from "../../public/assets/pasta.jpeg";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="w-100">
        <Card
          title="Pasta"
          description="Delicious pasta with marinara sauce, basil, and parmesan cheese."
          price={20.99}
          imageUrl={pastaImage}
        />
      </div>
    </main>
  );
}
