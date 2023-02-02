import React from "react";
import { useParams } from "react-router-dom";
import classes from "./Products.module.css";
import Product from "../components/Products/Product";
import SectionKidOfProducts from "../components/Home/SectionKindOfProducts";
import headphonesIIJPG from "../../src/images/MOBILE/image-headphones-two.jpg";
import headphonesIIJPGDESKTOP from "../../src/images/DESKTOP/image-headphones-two-desktop.jpg";
import headphonesIJPG from "../images/MOBILE/image-headphones-one.jpg";
import headphonesIJPGDESKTOP from "../images/DESKTOP/image-headphones-one-desktop.jpg";
import headphonesXX59JPG from "../images/MOBILE/image-headphones-XX59.jpg";
import headphonesXX59JPGDESKTOP from "../images/DESKTOP/image-headphones-XX59-desktop.jpg";
import earphonesYX1JPG from "../images/MOBILE/image-earphones-yx11.jpg";
import earphonesYX1JPGDESKTOPM from "../images/DESKTOP/image-earphones-yx11-desktop.jpg";
import spekearZX7JPG from "../images/MOBILE/image-speaker-ZX77.jpg";
import spekaerZX7JPGDESKTOP from "../images/DESKTOP/image-speaker-zx7Desktop.jpg";
import speakerZX9JPG from "../images/MOBILE/image-speaker-zx9.jpg";
import speakerZX9JPGDESKTOP from "../images/DESKTOP/image-speaker-zx9-desktop.jpg";
import AnimatedPage from "./AnimatedPage";

const DUMMY_BACKEND = {
  HEADPHONES: [
    {
      product: "XX99 MARK II HEADPHONES",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      imgMOBILE: headphonesIIJPG,
      imgDESKTOP: headphonesIIJPGDESKTOP,
      id: 1,
    },
    {
      product: "XX99 MARK I HEADPHONES",
      description:
        " As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      imgMOBILE: headphonesIJPG,
      imgDESKTOP: headphonesIJPGDESKTOP,
      id: 2,
    },
    {
      product: "XX59 Headphones",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      imgMOBILE: headphonesXX59JPG,
      imgDESKTOP: headphonesXX59JPGDESKTOP,
      id: 3,
    },
  ],
  EARPHONES: [
    {
      product: "YX1 Wireless Earphones",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      imgMOBILE: earphonesYX1JPG,
      imgDESKTOP: earphonesYX1JPGDESKTOPM,
      id: 4,
    },
  ],
  SPEAKERS: [
    {
      product: "ZX7 Speaker",
      description:
        "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      imgMOBILE: spekearZX7JPG,
      imgDESKTOP: spekaerZX7JPGDESKTOP,
      id: 5,
    },
    {
      product: "ZX9 Speaker",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      imgMOBILE: speakerZX9JPG,
      imgDESKTOP: speakerZX9JPGDESKTOP,
      id: 6,
    },
  ],
};

function Products() {
  const param = useParams();
  let listProducts;
  let reverse;

  if (param.products === "headphones") {
    listProducts = DUMMY_BACKEND.HEADPHONES.map((headphones) => {
      if (headphones.id % 2 === 0) {
        reverse = true;
      } else reverse = false;
      return (
        <AnimatedPage key={headphones.id}>
          <Product
            key={headphones.id}
            product={headphones.product}
            description={headphones.description}
            imgDESKTOP={headphones.imgDESKTOP}
            imgMOBILE={headphones.imgMOBILE}
            reverse={reverse}
          />
        </AnimatedPage>
      );
    });
  }

  if (param.products === "earphones") {
    listProducts = DUMMY_BACKEND.EARPHONES.map((earphones) => {
      if (earphones.id % 2 === 0) {
        reverse = true;
      } else reverse = false;
      return (
        <AnimatedPage key={earphones.id}>
          <Product
            key={earphones.id}
            product={earphones.product}
            description={earphones.description}
            imgDESKTOP={earphones.imgDESKTOP}
            imgMOBILE={earphones.imgMOBILE}
            reverse={reverse}
          />
        </AnimatedPage>
      );
    });
  }
  if (param.products === "speakers") {
    listProducts = DUMMY_BACKEND.SPEAKERS.map((speakers) => {
      if (speakers.id % 2 === 0) {
        reverse = true;
      } else reverse = false;
      return (
        <AnimatedPage key={speakers.id}>
          <Product
            key={speakers.id}
            product={speakers.product}
            description={speakers.description}
            imgDESKTOP={speakers.imgDESKTOP}
            imgMOBILE={speakers.imgMOBILE}
            reverse={reverse}
          />
        </AnimatedPage>
      );
    });
  }
  console.log(listProducts);
  return (
    <div>
      <div className={classes.products}>HEADPHONES</div>
      {listProducts}
      <SectionKidOfProducts />
    </div>
  );
}

export default Products;
