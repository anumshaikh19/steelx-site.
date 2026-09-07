export const BRAND = {
  name: "DHANURVEDA",
  subtitle: "MARTIAL ARTS & CALISTHENICS",
  phone: "098337 89020",
  phoneHref: "tel:+919833789020",
  site: "http://www.thedhanurveda.com/",
  established: "2011",
  rating: "4.9",
  reviews: "65+",
  address:
    "PT Mane Garden, Police Station, opposite Sagar Hotel, Police Colony, New Nagpada, Nagpada, Mumbai, Maharashtra 400008",
  mapsQuery:
    "Dhanurveda Martial Arts %26 Calisthenics, PT Mane Garden, New Nagpada, Mumbai, Maharashtra 400008",
};

export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(
    "Dhanurveda Martial Arts & Calisthenics, PT Mane Garden, New Nagpada, Nagpada, Mumbai, Maharashtra 400008",
  );

export const MAP_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(
    "PT Mane Garden, Police Colony, New Nagpada, Nagpada, Mumbai, Maharashtra 400008",
  ) +
  "&z=16&output=embed";

export const REVIEWS = [
  {
    name: "Noorusaba Shaikh",
    quote:
      "My son joined Aakash sir's karate class when he was just 2.5 yrs old. Aakash sir is one of the best human being and a mentor. In this institute children not only learn quality martial arts training but also learn good values.",
  },
  {
    name: "Vanshu Fullellu",
    quote:
      "This place has had a special place in the heart of everyone who has been here. I had joined Dhanurveda in March 2011 and since then, not only have I been helped grow as a Karateka, but also have grown into a better human.",
  },
];

export const BELTS = [
  { name: "WHITE", color: "#efeae0", note: "The beginning. Empty cup." },
  { name: "YELLOW", color: "#e8c14a", note: "First light. Basic stance." },
  { name: "ORANGE", color: "#d4823a", note: "Heat. Kihon under pressure." },
  { name: "GREEN", color: "#5d7d4b", note: "Growth. Kata takes shape." },
  { name: "BLUE", color: "#3c5a76", note: "Depth. Timing over force." },
  { name: "BROWN", color: "#6b4a33", note: "Earth. Teaching begins." },
  { name: "BLACK", color: "#141414", note: "Not the end. The first real step." },
];
