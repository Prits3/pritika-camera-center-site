export interface CameraProduct {
  id: string;
  name: string;
  category:
    | "DSLR"
    | "Mirrorless"
    | "Lens"
    | "Tripod"
    | "Gimbal"
    | "Audio"
    | "Lighting"
    | "Accessory";
  brand: string;
  price?: string;
  status: "In Stock" | "Pre-order" | "On Request";
  image: string;
}

export const products: CameraProduct[] = [
  {
    id: "sony-a7rv",
    name: "Sony Alpha a7R V",
    category: "Mirrorless",
    brand: "Sony",
    status: "In Stock",
    image: "/images/products/sony.jpeg",
  },
  {
    id: "canon-r5",
    name: "Canon EOS R5",
    category: "Mirrorless",
    brand: "Canon",
    status: "In Stock",
    image: "/images/products/canon.jpeg",
  },
  {
    id: "nikon-z9",
    name: "Nikon Z9",
    category: "Mirrorless",
    brand: "Nikon",
    status: "On Request",
    image: "/images/products/nikon.jpeg",
  },
  {
    id: "sony-24-70",
    name: "Sony FE 24-70mm f/2.8 GM II",
    category: "Lens",
    brand: "Sony",
    status: "In Stock",
    image: "/images/products/lens.jpeg",
  },
  {
    id: "dji-rs3-pro",
    name: "DJI RS 3 Pro",
    category: "Gimbal",
    brand: "DJI",
    status: "In Stock",
    image: "/images/products/rs3.jpeg",
  },
  {
    id: "rode-wireless-go-ii",
    name: "Rode Wireless GO II",
    category: "Audio",
    brand: "Rode",
    status: "In Stock",
    image: "/images/products/rode-wireless.jpeg",
  },
  {
    id: "godox-ad600",
    name: "Godox AD600 Pro",
    category: "Lighting",
    brand: "Godox",
    status: "In Stock",
    image: "/images/products/godox.jpeg",
  },
];

export const services = [
  {
    title: "Repair & Servicing",
    description:
      "Expert diagnostics and repairs for DSLR and Mirrorless cameras with genuine parts.",
    icon: "Wrench",
  },
  {
    title: "Rental",
    description:
      "High-end cinema line cameras, lenses, and lighting equipment available for short and long term rent.",
    icon: "Camera",
  },
  {
    title: "Accessories & Spare Parts",
    description:
      "Large inventory of batteries, chargers, memory cards, and replacements.",
    icon: "Battery",
  },
  {
    title: "Studio Setup",
    description:
      "Consultation and installation of complete studio lighting and audio environments.",
    icon: "Sun",
  },
  {
    title: "Camera Cleaning",
    description:
      "Professional sensor cleaning and fungus removal for clear, pristine shots.",
    icon: "Sparkles",
  },
];
