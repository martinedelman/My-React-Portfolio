import GitHubSvg from "../assets/github-mark-white.svg";

export default function Hero() {
  return (
    <section className="min-h-svh flex flex-col items-center bg-gradient-to-tl from-cyan-600 to-blue-800">
      <img
        src="https://media.licdn.com/dms/image/v2/C4D03AQHRpmGDXEl91g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1658271358555?e=1737590400&v=beta&t=eZ82bCWOJ4oDH_H-LPHx_ZHpgSfSxqaylDn47Wy7jDM"
        alt="Hero"
        className="object-contain h-44 w-44 rounded-full mt-24 mb-2 shadow-xl"
      />
      <h1 className="text-white drop-shadow-xl my-2 font-semibold text-3xl tracking-wide">¡Hola, soy Martín!</h1>
      <h2 className="text-white drop-shadow-xl my-2 font-medium text-2xl">Fullstack Developer</h2>
      <p className="text-white drop-shadow-xl my-2 w-1/3">
        Soy una persona que le gusta trabajar en equipo, sociable y con
        habilidades de liderazgo, listo para nuevos desafíos. Siempre busco la
        manera de innovar, informándome diariamente sobre descubrimientos
        nuevos.
      </p>
      <div className="flex flex-row flex-wrap justify-evenly w-1/3 my-4">
        <div class="relative inline-flex  group">
          <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="#"
            class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Contactame
          </a>
        </div>
        <div class="relative inline-flex  group">
          <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="https://github.com/martinedelman?tab=repositories"
            target="_blank"
            class="relative inline-flex items-center justify-center pr-8 pl-6 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            <img src={GitHubSvg} alt="Github" className="max-h-5 mx-2" />
            Mis Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
