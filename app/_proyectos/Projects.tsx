import Project from "./components/Project";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Crumbs & Beans",
      description1:
        "Aplicación web de una cafetería ficticia. Hecha en Angular v19 implementa carrito, gestión de pedidos y autenticación.",
      description2:
        "Permite crear perfiles, buscar y unirse a partidos y reservar canchas. Los administradores de clubes pueden gestionar turnos y canchas y la organización interna del club.\nIncluye autenticación, administración de disponibilidad por parte de clubes y un panel para la gestión interna de turnos y reservas.",
      imgSrc: "/ProyectoCrumbsBeans.png",
      imgMobileSrc: "/ProyectoCrumbsBeansMobile.jpg",
      techs: ["Angular", "Bootstrap", "Supabase"],
      githubLink: "https://github.com/pedro-arreguez-dev/Crumbs-Beans",
      demo: "https://crumbs-beans.netlify.app/",
    },
    {
      title: "Fútbol Fem CBA",
      description1:
        "Aplicación web para dar más visibilidad a la Liga Cordobesa de Fútbol femenino con info en tiempo real.",
      description2:
        "Permite consultar información de la LCF en tiempo real.",
      imgSrc: "/ProyectoFutFemCBA.png",
      imgMobileSrc: "/ProyectoFutFemCBA-Mobile.png",
      techs: ["Angular", "Bootstrap", "Supabase"],
      githubLink: "https://github.com/pedro-arreguez-dev",
      demo: "https://futbolfemcba.netlify.app/",
    },
    {
      title: "Padel App",
      description1:
        "Aplicación full stack desarrollada en equipo bajo metodologías ágiles para la gestión de partidos de pádel.",
      description2:
        "Permite crear perfiles, buscar y unirse a partidos y reservar canchas. Los administradores de clubes pueden gestionar turnos y canchas y la organización interna del club.\nIncluye autenticación, administración de disponibilidad por parte de clubes y un panel para la gestión interna de turnos y reservas.",
      imgSrc: "/ProyectoPadel2.png",
      techs: ["Angular", "Tailwind", "NodeJS", "MySQL"],
      githubLink: "https://github.com/pedro-arreguez-dev/Proyecto-Final-XAcademy",
      demo: "",
    },
    {
      title: "Hackaton Santex 2025 - Padel IA",
      description1:
        "Solución IA que nos llevó al TOP 5 de 35 en el Hackaton Santex 2025.",
      description2:
        "Utilizando pandas, procesa mensajes, calcula estadísticas relevantes y presenta visualizaciones interactivas que muestran la dinámica y evolución del vínculo.",
      imgSrc: "/ProyectoHackaton2.jpeg",
      techs: ["React", "FastAPI"],
      githubLink: "https://github.com/tatoclemente/matchmaking-ai-hackathon",
      demo: "",
    },
  ];

  /*
      {
      title: "Study Track",
      description1:
        "Aplicación Full Stack diseñada para organizar y realizar seguimiento de los temas de estudio de mis materias.",
      description2:
        "Permite registrar materias, marcar avances, visualizar pendientes y gestionar completamente el progreso académico desde una interfaz simple pero ordenada.",
      imgSrc: "/ProyectoStudyTrack.jpg",
      techs: ["NextJS", "Tailwind", "NodeJS", "MySQL"],
      githubLink: "https://github.com/Pedrosky21/Study-Tracker-Front",
      demo: "",
    },
  */

  return (
    <>
      <div
        id="proyectos"
        className="w-full flex flex-col items-center pt-20 pb-10"
      >
        <div className="w-full px-6 max-w-[1500px]">
          <div className="w-full md:w-2/5">
            <h2 className="text-3xl md:text-5xl  text-background-blue">
              Hitos en el proceso de aprendizaje
            </h2>
          </div>
          <p className="text-lg text-light-gray mt-5">
            Proyectos destacables que reflejan mi crecimiento y las habilidades
            que desarrollé en el proceso.
          </p>
          <div className="mt-10 flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-20">
            {projects.map((proj, index) => (
              <div className="h-full" key={index}>
                <Project
                  title={proj.title}
                  description1={proj.description1}
                  description2={proj.description2}
                  imgSrc={proj.imgSrc}
                  imgMobileSrc={proj.imgMobileSrc || ""}
                  techs={proj.techs}
                  githubLink={proj.githubLink}
                  demo={proj.demo}
                ></Project>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
