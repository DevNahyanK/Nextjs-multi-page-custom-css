
import HeroSection from "@/Components/HeroSection";
import Card from "@/Components/Card";

export default function GiftBasket() {
  const otheritems= [
    {
      category: "Other Items",
      title: "Cricket Pads",
      image: "/other items/cricket pads.webp",
      price: "RS 4999",
    },
    {
      category: "Other Items",
      title: "Ludo",
      image: "/other items/ludo.webp",
      price: "RS 2499",
    },
    {
      category: "Other Items",
      title: "Mb Malik Gold Edition",
      image: "/other items/mbmalikgold.jpeg",
      price: "RS 1999",
    },
    {
      category: "Other Items",
      title: "6 Ball Pack",
      image: "/other items/ball 6 pack.jpeg",
      price: "RS 1999",
    },
    {
      category: "Other Items",
      title: "Tennis",
      image: "/other items/tennis.jpg",
      price: "RS 999",
    },
    {
      category: "Other Items",
      title: "Carom ",
      image: "/other items/carom board.jpg",
      price: "RS 2499",
    },
    {
      category: "Other Items",
      title: "HL Blue Helmet",
      image: "/other items/HL-50-Blue-Helmet-Side.webp",
      price: "RS 1999",
    },
    {
      category: "Other Items",
      title: "Wicket",
      image: "/other items/images.jpeg",
      price: "RS 2999",
    },
  ];

  return (
    <>
      <HeroSection imageSrc="/other items/other items.jpeg" />
      <section className="Section">
        <div className="container">
          <div className="Wrap">
            {otheritems.map((item, index) => (
              <div key={index} className="Card">
                <Card
                  category={item.category}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
