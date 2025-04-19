export default function RatesAndFees() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">
        Check our rates and fees
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img 
            src="https://www.moneyme.com.au/images/PL/refresh/sec2-img-mobv3.png" 
            alt="Personal loan rates"
            className="w-full h-auto object-contain"
            style={{ maxHeight: '600px' }} // Increased height
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-semibold text-gray-600 mb-2">Variable interest rate</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">5.99%</p>
                <p className="text-sm text-gray-500">p.a.</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-1">up to</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold">24.49%</p>
                  <p className="text-sm text-gray-500">p.a.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-600 mb-2">Comparison rate<sup>*</sup></h2>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-green-600">6.70%</p>
                <p className="text-sm text-gray-500">p.a.</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-1">up to</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold">25.87%</p>
                  <p className="text-sm text-gray-500">p.a.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors text-lg font-semibold cursor-pointer">
              Get a quote
            </button>
            <p className="mt-4 text-sm font-bold text-red-600">Want impact your credit score!</p>
          </div>

          <div className="text-xs text-gray-500 space-y-4">
            <p>
              *This comparison rate is based on an unsecured variable rate personal loan of $30,000 for a term of 5 years.
              Rates displayed are for customers with an excellent credit history, where a $0 establishment fee applies.
              For other borrowers, an establishment fee of $395 or $495 will apply, based on loan amount. A $10 monthly fee applies to all personal loans.
              WARNING: This comparison rate is true only for the example given and may not include all fees and charges.
              Different terms, fees or other loan amounts might result in a different comparison rate.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Establishment fee</h3>
                <p className="text-gray-600">$0 - $395</p>
                <p className="text-sm">Loans up to $15,000</p>
                <p className="text-gray-600 mt-2">$0 - $495</p>
                <p className="text-sm">Loans above $15,001</p>
              </div>

              <div>
                <h3 className="font-semibold">Loan term</h3>
                <p className="text-gray-600">3 to 7 years</p>
                <h3 className="font-semibold mt-4">Our fees</h3>
                <p className="text-gray-600">$10 Monthly fee</p>
                <p className="text-gray-600">$0 Early exit fees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
