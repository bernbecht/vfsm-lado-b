import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex gap-20 md:gap-32 flex-col md:flex-row md:h-full">
      <aside className="md:w-1/3 flex flex-col">
        <Image
          src="https://vamosfalarsobremusica.com.br/wp-content/uploads/2021/12/lado_b_16_1.jpg"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg	drop-shadow-2xl md:w-4/5 w-full"
        />
        <div className="mt-8">
          <h2 className="font-light">#017</h2>
          <h1 className="text-4xl font-bold ">
            10 FILMES DE TERROR COM TRILHAS SONORAS ASSUSTADORAS
          </h1>
          <h2 className="font-light mt-4">Novembro 9, 2023</h2>
          <button className="h-8 px-6 font-light text-indigo-100 transition-colors duration-150 bg-slate-950 rounded-full focus:shadow-outline hover:opacity-75 mt-8">
            Ouça no Spotify
          </button>
        </div>
        <div className="mt-auto hidden md:block">
          <p className="text-xs">
            Este é um site independente e nao relacionado ao podcast Vamos Falar
            Sobre Música. <br />
            <br />
            Ajude o podcast como puder.
          </p>
          <div className="mt-4 flex gap-2">
            <button className="h-8 px-6 font-light text-indigo-100 transition-colors duration-150 bg-slate-950 rounded-full focus:shadow-outline hover:opacity-75">
              Spotify
            </button>
            <button className="h-8 px-6 font-light border border-slate-950 transition-colors duration-150 bg-transparent rounded-full focus:shadow-outline hover:opacity-75 ">
              Website
            </button>
          </div>
        </div>
      </aside>
      <main className="md:w-2/3 md:max-h-screen md:overflow-x-scroll">
        <ul className="flex flex-col gap-8">
          <li>
            <iframe
              style={{ borderRadius: `12px` }}
              src="https://open.spotify.com/embed/album/1wwqM1k1J1UY74eEDav9rE?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              style={{ borderRadius: `12px` }}
              src="https://open.spotify.com/embed/album/1wwqM1k1J1UY74eEDav9rE?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              style={{ borderRadius: `12px` }}
              src="https://open.spotify.com/embed/album/1wwqM1k1J1UY74eEDav9rE?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              style={{ borderRadius: `12px` }}
              src="https://open.spotify.com/embed/album/1wwqM1k1J1UY74eEDav9rE?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              style={{ borderRadius: `12px` }}
              src="https://open.spotify.com/embed/album/1wwqM1k1J1UY74eEDav9rE?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              style={{ borderRadius: `12px` }}
              src="https://open.spotify.com/embed/album/1wwqM1k1J1UY74eEDav9rE?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              style={{ borderRadius: `12px` }}
              src="https://open.spotify.com/embed/album/1wwqM1k1J1UY74eEDav9rE?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Page;
