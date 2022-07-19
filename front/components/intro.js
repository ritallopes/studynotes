
export default function Intro() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <div
          className="grid-cols-1"
          style={{
            marginRight: "-50px",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: 1,
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Diário de estudos
          </h1>
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
            Suas melhores notas para maiores aprendizados
          </h4>
        </div>
        <img src="assets/intro/intro.jpg" width={1000} />
      </section>
    </>
  );
}
