import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Tag } from "./components/Tag";
import { RestaurantDetails } from "./components/RestaurantDetails";

import bannerImage from "../../public/assets/banner.png";
import pastaImage from "../../public/assets/pasta.jpeg";
import Image from "next/image";
import { CategoryTitle } from "./components/CategoryTitle";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="w-100 max-w-800 m-auto">
        <Image
          src={bannerImage}
          alt="banner"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-64"
        />
        <RestaurantDetails
          isOpen
          category="Italian"
          openingHour={420}
          closingHour={1080}
          phoneNumber={551112345678}
          address="Ocean Avenue, 1234 - Miami/FL"
          storeUrl="https://google.com"
        />

        <div className="bg-gray-100 px-4 py-8 flex gap-3">
          <Tag text="Main entries" isActive />
          <Tag text="Main course" />
          <Tag text="Dessert" />
        </div>

        <CategoryTitle title="Main entries" />
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
        <CategoryTitle title="Main course" />
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
      </div>

      <Footer />
    </main>
  );
}
