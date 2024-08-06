"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";

import Logo from "@/assets/logo.svg";
import IconGoogle from "@/assets/link-google.svg";
import IconFacebook from "@/assets/link-facebook.svg";
import IconTwitter from "@/assets/link-twitter.svg";
import IconInstagram from "@/assets/link-instagram.svg";
import IconPlay from "@/assets/icon-play.svg";
import ImageMain from "@/assets/main-art.png";

const Home: React.FC = () => {
  return (
    <>
      <section className="w-full lg:h-screen bg-img_bg_hero bg-no-repeat bg-center bg-cover gap-4">
        <header className="container mx-auto flex items-center justify-between py-12">
          <div>
            <Image src={Logo} alt="Studio Ghibi" />
          </div>
          <ul className="flex items-center gap-6">
            <li>
              <Image src={IconGoogle} alt="Google" />
            </li>
            <li>
              <Image src={IconFacebook} alt="Facebook" />
            </li>
            <li>
              <Image src={IconTwitter} alt="Twitter" />
            </li>
            <li>
              <Image src={IconInstagram} alt="Instagram" />
            </li>
          </ul>
        </header>

        <main className="container mx-auto grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 lg:px-6 order-1 lg:order-0 mb-10">
            <h6 className="font-secondary uppercase text-white font-bold text-base lg:text-xl">
              HAYAO MIYAZAKI
            </h6>
            <h1 className="mt-1 font-primary uppercase text-white text-5xl lg:text-7x1">
              A VIAGEM DE CHIHIRO
            </h1>
            <p className="font-display mt-8 text-white">
              Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles
              que a desobedecem são transformados em animais.
            </p>
            <div className="mt-12 flex items-center gap-8 flex-wrap lg:flex-nowrap">
              <Button
                startContent={<Image src={IconPlay} alt="play" />}
                className="rounded uppercase bg-pink-200 font-bold px-8 w-full lg:w-auto"
              >
                Assistir Agora
              </Button>
              <Button
                variant="bordered"
                className="rounded uppercase text-white font-bold px-8 border-2 border-pink-200 w-full lg:w-auto"
              >
                Assista o trailer
              </Button>
            </div>
          </div>
          <div className="flex justify-center order-0 lg:order-1">
            <Image src={ImageMain} alt="Ghosts" />
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
