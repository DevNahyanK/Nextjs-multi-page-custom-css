import Card from "@/Components/Card"; 
import HeroSection from "@/Components/HeroSection";

export default function Home() {
  const Bats = [
    {
      category: "Bats",
      title: "CA Pro 15000",
      image: "/Bats/capro15000.jpg",
      price: "RS 12999",
    },
    {
      category: "Bats",
      title: "Gary Nichols Diamand Edition",
      image: "/Bats/garynicholsbat.png",
      price: "RS 14999",
    },
    {
      category: "Bats",
      title: "BOX OF 6",
      image: "/Bats/mb malik bat.jpeg",
      price: "RS 5999",
    },
    {
      category: "Bats",
      title: "MRF Virat Kohli Eition",
      image: "/Bats/mrf.jpeg",
      price: "RS 14999",
    },
    {
      category: "Bats",
      title: "Kookaburra Bat",
      image: "/Bats/hard ball bat.jpg",
      price: "RS 6999",
    },
    {
      category: "Bats",
      title: "JD Tape ball Bat TM Edition",
      image: "/Bats/tape ball bat.png",
      price: "RS 2099",
    },
    {
      category: "Bats",
      title: "SS Black Edition",
      image: "/Bats/SS bat.jpg",
      price: "RS 7999",
    },
    {
      category: "Bats",
      title: "Ton Player Edition",
      image: "/Bats/Ton player edition.webp",
      price: "RS 3999",
    },
    {
        category: "Bats",
        title: "HS ",
        image: "/Bats/hs.jpeg",
        price: "RS 4999",
      },
  ];

  return (
    <>
      <HeroSection imageSrc="/Bats/Cricket Bats.jpeg" />
      <section className="Section">
        <div className="container">
          <div className="Wrap">
            {Bats.map((item, index) => (
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
