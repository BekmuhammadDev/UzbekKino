import { motion } from "framer-motion";
import muzeyimg from "../assets/muzey.svg";
import secondCard from "../assets/secondCard.svg";
import secondMusey from "../assets/secondMusey.svg";
import samarqand from "../assets/samarqand.svg";

// Rasmlar va ma'lumotlar ro‘yxati
const cards = [
  { img: muzeyimg, title: "— Teatr", date: "7 oy avval" },
  { img: secondCard, title: "— Konsert", date: "3 oy avval" },
  { img: secondMusey, title: "— Muzey", date: "2 hafta avval" },
  { img: samarqand, title: "— Festival", date: "1 oy avval" },
  { img: secondMusey, title: "— Kino", date: "5 kun avval" },
  { img: muzeyimg, title: "— Kino", date: "5 kun avval" },
];

const InfiniteSlider = () => {
  return (
    <div className="overflow-hidden w-full mt-24">
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-80%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // ⬅️ Animatsiyani sekinlashtirish uchun 30 soniya qo‘yildi
          ease: "linear",
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <div key={index} className="flex-col gap-5 min-w-[250px]">
            <img
              src={card.img}
              alt=""
              className="w-[250px] h-[200px] object-cover"
            />
            <article>
              <p className="mont font-bold text-[20px]">{card.title}</p>
              <span className="mont text-[16px]">{card.date}</span>
            </article>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
