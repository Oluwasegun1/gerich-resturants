import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle:
      "Recognized for offering exceptional food at a great value, showcasing our dedication to quality and taste.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle:
      "Honored for innovation and excellence, highlighting our commitment to pushing culinary boundaries",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle:
      "Celebrated for delivering outstanding service and creating a welcoming atmosphere for all our guests.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle:
      "Awarded for culinary mastery and creativity, reflecting our chef’s passion and expertise in every dish.",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { wines, cocktails, awards };
