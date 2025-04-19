import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function InterestRates() {
  const loans = [
    {
      title: "Unsecured personal loans from",
      rate: "6.56%",
      comparison: "(6.56%)",
    },
    {
      title: "Secured personal loans from",
      rate: "6.49%",
      comparison: "(6.84%)",
    },
    {
      title: "Green personal loans from",
      rate: "5.49%",
      comparison: "(5.49%)",
    },
    {
      title: "Fixed rate personal loans from",
      rate: "5.76%",
      comparison: "(6.55%)",
    },
    {
      title: "Variable rate personal loans from",
      rate: "6.54%",
      comparison: "(7.59%)",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-pink-600">
        Current Cheapest Personal Loan Interest Rates
      </h2>

      <div className="relative px-10">
        <Slider {...sliderSettings}>
          {loans.map((loan, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-2xl shadow-2xl p-10 hover:shadow-3xl transition-shadow h-full">
                <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                  {loan.title}
                </h3>

                <div className="flex items-baseline gap-3">
                  <p className="text-5xl font-extrabold text-pink-600">
                    {loan.rate}
                  </p>
                  <span className="text-lg text-gray-500">
                    {loan.comparison}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mt-6">
                  Comparison rate* p.a.
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
