import { Card } from "./components/Card";
import { Header } from "./components/Header";

import pastaImage from "../../public/assets/pasta.jpeg";
import { RestaurantDetails } from "./components/RestaurantDetails";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="w-100 max-w-800 m-auto">
        <Card
          title="Pasta"
          description="Delicious pasta with marinara sauce, basil, and parmesan cheese."
          price={20.99}
          imageUrl={pastaImage}
        />
        <Card
          title="Pasta"
          description="Delicious pasta with marinara sauce, basil, and parmesan cheese."
          price={20.99}
          imageUrl={pastaImage}
        />
        <RestaurantDetails />
      </div>
    </main>
  );
}
