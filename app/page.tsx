import Card from "@/Components/Card";
import HeroSection from "@/Components/HeroSection";

export default function Home() {
  const Gallery = [
    {
      category: "Gallery",
      title: "Gary Nichols Bat Babar Azam Edition ",
      image: "/Gallery/garynicholsbat.png",
      price: "RS 14999",
    },
    {
      category: "Gallery",
      title: "Kookaburra Ball",
      image: "/Gallery/kookaburra ball.jpeg",
      price: "RS 499",
    },
    {
      category: "Gallery",
      title: "HL Blue Helmet",
      image: "/Gallery/HL-50-Blue-Helmet-Side.webp",
      price: "RS 1999",
    },
    {
      category: "Gallery",
      title: "Cricket Wicket",
      image: "/Gallery/images.jpeg",
      price: "RS 2999",
    },
    {
      category: "Gallery",
      title: "Mb Malik Gold Edition",
      image: "/Gallery/mbmalikgold.jpeg",
      price: "RS 1999",
    },
    {
      category: "Gallery",
      title: "CA Pads",
      image: "/Gallery/pads.jpeg",
      price: "RS 4999",
    },
    {
      category: "Gallery",
      title: "Tape Ball Bat Tm Edition",
      image: "/Gallery/tape ball bat.png",
      price: "RS 8999",
    },
    {
      category: "Gallery",
      title: "Tennis",
      image: "/Gallery/tennis.jpg",
      price: "RS 999",
    },
  ];

  return (
    <>
      <HeroSection imageSrc="/Gallery/our gallery.jpeg" />
      <section className="Galleryproducts">
        <div className="container">
          <div className="Wrap">
            {Gallery.map((item, index) => (
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
