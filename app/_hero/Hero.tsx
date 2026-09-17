"use client";

import Image from "next/image";
import abstractImageHero from "../../public/abstract.png";
import myImage from "../../public/yo3.jpeg";

import ContactModal from "../components/ContactModal";
import GithubIcon from "../components/icons/github";
import InstagramIcon from "../components/icons/instagram";
import LinkedInIcon from "../components/icons/linkedin";
import ProjectModal from "../components/projects/ProjectModal";
import ProjectList from "../components/projects/ProyectList";
import Navbar from "../components/Navbar";
import { useRef, useState, useEffect } from "react";
import { animate, stagger } from "animejs";

export default function HeroPage() {
  const [showModal, setShowModal] = useState(false);
  const [projectToShow, setProjectToShow] = useState(0);
  const [showContactModal, setShowContact] = useState(false);

  const projects = [
    {
      imageURL: "/ProyectoCrumbsBeans.png",
      title: "Crumbs & Beans",
      description: "",
      techs: ["Angular", "Supabase"],
    },
    {
      imageURL: "/ProyectoPadel2.png",
      title: "Padel App",
      techs: ["Angular", "NodeJS"],
    },
    {
      imageURL: "/ProyectoHackaton2.jpeg",
      title: "Hackaton Santex 2025",
      techs: ["React", "FastAPI"],
    },
  ];

  const detailedProjects = [
    {
      title: "Crumbs & Beans",
      description:
        "Aplicación web desarrollada por mí que simula una tienda de café online. Permite crear cuentas, agregar productos al carrito y realizar pedidos con historial de compras. Desarrollada con Angular 19 utilizando signals para mejorar el rendimiento y la gestión del estado.",
      imageURL: "/ProyectoCrumbsBeans.png",
      techs: ["Angular", "Tailwind", "Supabase"],
      githubLink: "",
    },
    {
      title: "Padel App",
      description:
        "Aplicación web para organizar partidos de pádel. Permite crear perfiles, buscar y unirse a partidos, reservar canchas y gestionar turnos. Los clubes cuentan con un panel para administrar disponibilidad, reservas y canchas.",
      imageURL: "/ProyectoPadel2.png",
      techs: ["Angular", "Tailwind", "NodeJS", "MySQL"],
      githubLink: "",
    },
    {
      title: "Padel IA - Hackaton Santex 2025",
      description:
        "Aplicación con IA desarrollada en equipo durante una hackathon de 24 horas. Utiliza recomendaciones inteligentes para conectar jugadores según sus preferencias y nivel. El proyecto quedó en el top 5 entre 35 equipos.",
      imageURL: "/ProyectoHackaton2.jpeg",
      techs: ["React", "Tailwind", "FastAPI"],
      githubLink: "",
    },
  ];

  const handleModal = (projectIndex: number) => {
    setShowModal(!showModal);
    setProjectToShow(projectIndex);
  };

  // Para animacion del boton de descargar
  const outlineRef = useRef<HTMLAnchorElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const [isAnimating, setIsAnimating] = useState(false);

  const [icon, setIcon] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>,
  );

  const handleClick = () => {
    // primeras lineas para no interrumpir animacion o reiniciar con clicks
    if (isAnimating) return; // si ya hay animación, salir
    setIsAnimating(true); // animando

    let reversed = false;
    const circle = circleRef.current;
    if (!circle) return;
    const circleAnimation = animate(circle, {
      autoplay: false,
      rotate: "1turn",
      duration: 600,
      ease: "easeOut",
      loop: false,
      onComplete: () => {
        if (!reversed) {
          // Para que solo se ejecute al completar una vez y no en reversed
          reversed = true;
          circle.style.backgroundColor = "#178236";
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>,
          );
        }
      },
    });

    const outline = outlineRef.current;
    if (!outline) return;
    const outlineAnimation = animate(outline, {
      autoplay: false,
      width: "54px",
      duration: 600,
      onComplete: (self) => {
        setTimeout(() => {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>,
          );
          self.reverse();
          circleAnimation.reverse();
          circle.style.backgroundColor = "";
        }, 1000);
      },
    });

    let reversedText = false;
    const text = textRef.current;
    if (!text) return;
    animate(text, {
      translateY: ["0%", "50%"],
      duration: 300,
      ease: "linear",
      loop: false,
      onComplete: (self) => {
        if (!reversedText) {
          reversedText = true;
          const el = document.getElementById("text");
          if (el) el.style.display = "none";
          outlineAnimation.play();
          circleAnimation.play();
          setTimeout(() => {
            self.reverse();
            if (el) el.style.display = "block";
            setTimeout(() => setIsAnimating(false), 100);
          }, 2300);
        }
      },
    });
  };

  useEffect(() => {
    const words = document.querySelectorAll<HTMLElement>(".hero-role-word");
    if (!words.length) return;

    animate(words, {
      opacity: [0, 1],
      translateY: ["0.75rem", "0rem"],
      duration: 700,
      easing: "easeOutExpo",
      delay: stagger(80),
    });
  }, []);

  return (
    <>
      <div className="relative hidden md:flex h-dvh w-full p-6">
        <div className="h-full w-full grid grid-cols-7 grid-rows-9">
          <div className="col-start-1 col-span-9 lg:col-span-4 row-span-1">
            <div className="flex justify-between lg:justify-start">
              <Navbar></Navbar>
              <button
                onClick={() => setShowContact(true)}
                className="z-20 group bg-almost-black px-8 text-white rounded-full cursor-pointer flex lg:hidden justify-center items-center gap-2 max-h-20 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-out"
              >
                <p className="font-medium tracking-wide">Contactame</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden lg:block col-start-5 col-span-3 row-span-9 relative rounded-4xl">
            <Image
              src={abstractImageHero}
              alt="abstract image"
              fill
              sizes="(max-width: 3000px) 100vw, 33vw"
              quality={100}
              placeholder="blur"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover rounded-4xl"
            ></Image>

            <div className="absolute inset-0 w-full h-full grid grid-cols-3 grid-rows-9 z-10">
              <div className="col-start-3 pb-2 pl-2 bg-white flex h-full w-full rounded-bl-4xl">
                <button
                  onClick={() => setShowContact(true)}
                  className="z-20 group w-full bg-almost-black p-2 lg:p-5 lg:px-8 text-white rounded-full cursor-pointer hidden md:flex justify-center items-center gap-2 max-h-20 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-out"
                >
                  <p className="font-medium tracking-wide">Contactame</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 hidden xl:block"
                  >
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                  </svg>
                </button>
              </div>

              {/* Right top  button borders*/}
              <div className="col-start-2 row-start-1 w-full relative h-full">
                <div className="absolute right-0 top-0 w-9 h-9 bg-transparent rounded-tr-full shadow-[40px_-40px_0_40px_white]"></div>
              </div>
              <div className="col-start-3 row-start-2 w-full relative h-full">
                <div className="absolute right-0 top-0 w-9 h-9 bg-transparent rounded-tr-full shadow-[40px_-40px_0_40px_white]"></div>
              </div>

              {/* Right bottom button*/}
              <div className="flex items-end justify-end col-start-3 row-start-9 p-4">
                <a
                  download
                  href="/CV Pedro Arreguez.pdf"
                  className="flex space-x-8 w-32 h-14 items-center z-20 bg-almost-black py-2 px-3 text-white rounded-4xl no-underline hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-out"
                  onClick={handleClick}
                  ref={outlineRef}
                >
                  <div
                    ref={circleRef}
                    className="rounded-full bg-white text-black p-2"
                  >
                    {icon}
                  </div>
                  <p id="text" ref={textRef}>
                    CV
                  </p>
                </a>
              </div>
            </div>

            {/* Rounded inverted borders over the image */}

            {/* Left top carrousell*/}
            <div className="absolute inset-x-0 top-0 h-1/9">
              <div className="absolute left-0 bottom-0 w-9 h-9 bg-transparent rounded-bl-full shadow-[-40px_40px_0_40px_white]"></div>
            </div>
            {/* Left bottom carrousell*/}
            <div className="absolute inset-x-0 bottom-0 h-5/9">
              <div className="absolute left-0 top-0 w-10 h-10 bg-transparent rounded-tl-full shadow-[-40px_-40px_0px_40px_white]"></div>
            </div>
          </div>

          <div className="w-full col-span-9 lg:col-span-1 lg:w-[60vw] row-start-2 row-span-3">
            <ProjectList projects={projects} sendProjectIndex={handleModal} />
          </div>

          <div className="col-start-1 row-start-5 col-span-9 lg:col-span-4 mt-6 pl-2 pr-6">
            <div className="flex md:items-baseline pt-4 md:p-0 justify-between mr-0">
              <h1 className="text-left text-4xl md:text-6xl font-normal flex flex-wrap gap-x-3 justify-start md:justify-start">
                {"Pedro Arreguez".split(" ").map((word, i) => (
                  <span
                    key={`name-${i}`}
                    className="hero-role-word opacity-0 inline-block"
                  >
                    {word}
                  </span>
                ))}
              </h1>
              <div className="hidden md:flex h-10 w-auto space-x-10">
                <div className="board">
                  <a
                    href="https://github.com/pedro-arreguez-dev"
                    className="key flex p-4 transition-all duration-100 hover:text-slate-700"
                    id="githubIcon"
                    target="_blank"
                  >
                    <GithubIcon></GithubIcon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pedro-arreguez/"
                    className="key flex p-4 transition-all duration-100 hover:text-blue-800"
                    id="linkedin"
                    target="_blank"
                  >
                    <LinkedInIcon></LinkedInIcon>
                  </a>
                  <a
                    href="https://www.instagram.com/pedro.sky21/"
                    className="key flex p-4 transition-all duration-100 hover:text-pink-600"
                    id="instagram"
                    target="_blank"
                  >
                    <InstagramIcon></InstagramIcon>
                  </a>
                </div>
              </div>
            </div>

            <h2 className="text-left text-2xl mt-4 px-4 md:p-0 md:text-5xl text-light-gray flex flex-wrap gap-x-3 justify-start md:justify-start overflow-hidden py-1">
              {"Desarrollador Full Stack".split(" ").map((word, i) => (
                <span key={i} className="hero-role-word opacity-0 inline-block">
                  {word}
                </span>
              ))}
            </h2>
          </div>

          <div className="flex justify-end col-start-1 row-start-9 col-span-9 lg:hidden pr-6">
            <a
              download
              href="/CV Pedro Arreguez.pdf"
              className="flex space-x-8 w-32 h-14 items-center z-20 bg-almost-black py-2 px-3 text-white rounded-4xl no-underline hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-out"
              onClick={handleClick}
              ref={outlineRef}
            >
              <div
                ref={circleRef}
                className="rounded-full bg-white text-black p-2"
              >
                {icon}
              </div>
              <p id="text-smaller" ref={textRef}>
                CV
              </p>
            </a>
          </div>
        </div>

        <div
          className={`fixed inset-0 backdrop-blur-2xl flex justify-center items-center w-full h-full z-50 ${showModal ? "" : "hidden"
            }`}
        >
          <div className="w-1/3">
            <ProjectModal
              show={showModal}
              project={detailedProjects[projectToShow]}
              closeModal={handleModal}
            ></ProjectModal>
          </div>
        </div>
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center backdrop-blur-2xl ${showContactModal ? "" : "hidden"}`}
        >
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-1/3">
              <ContactModal
                onClose={() => setShowContact(false)}
              ></ContactModal>
            </div>
          </div>
        </div>
      </div>

      {/** Mobile version */}
      <div className="flex flex-col items-center md:hidden h-dvh w-full p-6">
        <Navbar></Navbar>

        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <div className="card p-2 pb-6 w-full border mt-6 border-gray-200 rounded-2xl">
            <div className="w-full aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src={myImage}
                alt="foto mia"
                fill
                placeholder="blur"
                loading="eager"
                sizes="(max-width: 640px) 100vw, 50vw"
                className="rounded-2xl object-cover sm:object-contain"
              />
            </div>

            <div className="flex md:items-baseline pt-4 md:p-0 justify-between mr-0">
              <h1 className="text-left text-4xl md:text-6xl font-normal flex flex-wrap gap-x-3 justify-start md:justify-start">
                {"Pedro Arreguez".split(" ").map((word, i) => (
                  <span
                    key={`name-${i}`}
                    className="hero-role-word opacity-0 inline-block"
                  >
                    {word}
                  </span>
                ))}
              </h1>
            </div>

            <h2 className="text-left text-2xl mt-2 md:text-5xl text-light-gray flex flex-wrap gap-x-3 justify-start md:justify-start overflow-hidden py-1">
              {"Desarrollador de Software".split(" ").map((word, i) => (
                <span key={i} className="hero-role-word opacity-0 inline-block">
                  {word}
                </span>
              ))}
            </h2>

            <div className="flex w-full justify-end h-10 mt-10">
              <div className="board">
                <a
                  href="https://github.com/Pedrosky21"
                  className="key flex p-4 transition-all duration-100 hover:text-slate-700"
                  id="githubIcon"
                  target="_blank"
                >
                  <GithubIcon></GithubIcon>
                </a>
                <a
                  href="https://www.linkedin.com/in/pedro-arreguez-6785261b8/"
                  className="key flex p-4 transition-all duration-100 hover:text-blue-800"
                  id="linkedin"
                  target="_blank"
                >
                  <LinkedInIcon></LinkedInIcon>
                </a>
                <a
                  href="https://www.instagram.com/pedro.sky21/"
                  className="key flex p-4 transition-all duration-100 hover:text-pink-600"
                  id="instagram"
                  target="_blank"
                >
                  <InstagramIcon></InstagramIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
