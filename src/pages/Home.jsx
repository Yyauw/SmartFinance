import HomeCarrousel from "../components/HomeCarrousel";

export default function Home() {
  const data = [
    {
      image: "../../public/images/negocio.jpg",
      title: "Impulsa tu negocio",
      description: "Impulsa tu negocio con nuestras herramientas",
    },
    {
      image: "../../public/images/amortizacion.jpg",
      title: "Calculadora Financiera",
      description: "Tabla de amortizacion para ver los pagos",
    },
    {
      image: "../../public/images/depreciation.png",
      title: "Depreciacion Acumulada",
      description: "Observa la depreciacion de tus activos",
    },
  ];

  return (
    <>
      <header className="py-5" style={{ backgroundColor: "#031633" }}>
        <div className="px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Smartfinance: Soluciones Financieras Para Tu Negocio
                </h1>
                <p className="lead fw-normal text-white-50 mb-4">
                  En Smartfinance, te ofrecemos soluciones financieras
                  personalizadas y avanzadas para que puedas gestionar
                  eficientemente todos los aspectos económicos de tu empresa.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a
                    className="btn btn-primary btn-lg px-4 me-sm-3"
                    href="#features"
                  >
                    Empezar
                  </a>
                  <a className="btn btn-outline-light btn-lg px-4" href="#!">
                    Acerca
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 h-50 d-none d-xl-block text-center h-100">
              <HomeCarrousel data={data} />
            </div>
          </div>
        </div>
      </header>

      <section className="py-5" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0">
                Herramientas Financieras Completas para Tu Negocio
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-collection"></i>
                  </div>
                  <h2 className="h5">Calculadora Financiera</h2>
                  <p className="mb-0">
                    Nuestro generador de tabla de amortización te permite
                    visualizar claramente los pagos de tu préstamo a lo largo
                    del tiempo.
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-building"></i>
                  </div>
                  <h2 className="h5">Depreciación Acumulada</h2>
                  <p className="mb-0">
                    El cálculo de depreciación acumulada es esencial para llevar
                    un control preciso del valor de tus activos a lo largo del
                    tiempo.
                  </p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-toggles2"></i>
                  </div>
                  <h2 className="h5">Punto de Equilibrio</h2>
                  <p className="mb-0">
                    Determinar el punto de equilibrio de tu negocio es crucial
                    para comprender cuándo comenzarás a generar ganancias.
                  </p>
                </div>
                <div className="col h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-toggles2"></i>
                  </div>
                  <h2 className="h5">Balance General</h2>
                  <p className="mb-0">
                    El balance general es una de las herramientas más
                    importantes para evaluar la salud financiera de tu empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-10 col-xl-7">
              <div className="text-center">
                <div className="fs-4 mb-4 fst-italic">
                  "Smartfinance ha revolucionado la gestión financiera de mi
                  negocio. Las herramientas son intuitivas y completas: desde la
                  generación de tablas de amortización y el cálculo de
                  depreciación acumulada, hasta el punto de equilibrio y el
                  balance general. Ahora puedo tomar decisiones estratégicas con
                  confianza y precisión. Recomiendo encarecidamente Smartfinance
                  a cualquier empresa que busque mejorar su administración
                  financiera."
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="rounded-circle me-3 icon"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt="..."
                  />
                  <div className="fw-bold">
                    Laura Gómez
                    <span className="fw-bold text-primary mx-1">/</span>
                    Directora Financiera de Innovatech
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
