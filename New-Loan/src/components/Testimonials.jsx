export default function LoanSection() {
    const steps = [
      {
        number: '01',
        title: 'Fill out the application form',
        description: 'Complete our simple, secure application form from any device. Assistance is readily available if you encounter any questions or require help during the process.'
      },
      {
        number: '02',
        title: 'Connect us to your bank',
        description: 'Link your bank account securely to speed up the verification process. This step ensures your loan offer is personalized and that your financial details are kept confidential.'
      },
      {
        number: '03',
        title: 'Receive your cash loan offer',
        description: 'Review the personalized loan offer detailing amount, rates, and terms at your convenience. Our team is ready to help you understand and feel confident about your options.'
      },
      {
        number: '04',
        title: 'Get the funds that you need',
        description: 'Accept the offer and receive the funds directly in your bank account swiftly. Use the money as needed and rely on our customer support throughout the loan’s duration.'
      }
    ];
  
    return (
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 flex flex-col space-y-12">
          {/* Heading and Intro Text */}
          <div className="text-center md:text-left md:w-3/4 mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-500">
              Secure the funds you need with the best service.
            </h2>
            <p className="text-lg">
              Cash loans without all the usual hassle and wait time.
            </p>
          </div>
  
          {/* Image and Steps Layout */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
            {/* Image on Left or Bottom */}
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://cdn.prod.website-files.com/637208799daf10fa213fa833/66b4b1ee30d8a89dbd1879c8_Money%20motivation%20illustration%203.svg" 
                alt="Cash loan illustration"
                className="w-[600px] max-w-full h-auto"
              />
            </div>
  
            {/* Steps on Right */}
            <div className="md:w-1/2 space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <span className=" text-pink-600 font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2 text-pink-500">
                      {step.title}
                    </h3>
                    <p className="">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <p className=" italic text-center md:text-left">
            *Cash loans without all the usual hassle and wait time.
          </p>
        </div>
      </section>
    );
  }
  