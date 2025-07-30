const Purpose = () => {
  const fullText = (
    <>
      With a faculty-led foundation, we bring together a unique blend of academic rigor and industry-driven innovation, ensuring our solutions are not only technologically superior but also practical and impactful. Our drones are designed to tackle real-world challenges, offering high precision data capture and analysis.
      At the heart of our operations is a commitment to <span className='font-semibold text-gray-900'>quality, safety, and sustainability</span>, empowering businesses to make data-driven decisions with confidence.<br /><br />
      <span className='font-semibold text-gray-900'>Join us</span> as we push the boundaries of aerial intelligence and redefine the future of industrial data management.&nbsp;
    </>
  );

  const features = [
    {
      icon: "🟣",
      title: "Tailored Drone Solutions",
      description: "We customize our drones to meet the unique needs of each client, ensuring precise performance across a wide range of applications."
    },
    {
      icon: "🔴",
      title: "Innovation-Driven Approach",
      description: "We continuously innovate and update our technologies to deliver cutting-edge aerial surveying and analysis solutions."
    }
  ];

  return (
    <section id="about" className='w-full bg-gradient-to-r from-purple-50 via-gray-100 to-cyan-50 py-16 px-4 md:px-8 sm:px-6'>
      <div className='max-w-6xl mx-auto space-y-12'>
        <div>
          <h1 className='text-4xl font-bold text-gray-800 text-center mb-8 tracking-tight'>About Us</h1>
          <p className='text-lg text-gray-700 leading-relaxed text-justify space-y-6'>
            <span className='font-semibold text-gray-900'>We are a faculty-led drone startup</span> based at IIITDM Kurnool, specializing in a diverse range of aerial solutions, including surveyance, stockpile verification, and volumetric analysis. Our mission is to harness the power of advanced drone technology to transform data collection and analysis, providing precise, reliable, and efficient insights for industries.&nbsp;
            {fullText}
          </p>

          {/* Vision & Values */}
          <div className='mt-12 grid md:grid-cols-2 grid-cols-1 gap-8'>
            <div className='bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md border border-purple-100'>
              <div className='flex items-center mb-4'>
                <span className='text-purple-600 text-2xl mr-2'>🌟</span>
                <h3 className='text-2xl font-semibold text-gray-900'>Our Vision</h3>
              </div>
              <p className='text-gray-700 leading-relaxed text-justify'>
                To revolutionize the industrial data landscape through intelligent aerial solutions that empower smarter decisions and foster sustainable growth.
              </p>
            </div>

            <div className='bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md border border-purple-100'>
              <div className='flex items-center mb-4'>
                <span className='text-green-600 text-2xl mr-2'>🌱</span>
                <h3 className='text-2xl font-semibold text-gray-900'>Core Values</h3>
              </div>
              <ul className='list-disc list-inside text-gray-700 leading-relaxed space-y-1 text-justify'>
                <li><span className='font-semibold text-gray-900'>Innovation</span> — Always evolving to stay ahead of the curve.</li>
                <li><span className='font-semibold text-gray-900'>Integrity</span> — Ethical operations at every level.</li>
                <li><span className='font-semibold text-gray-900'>Precision</span> — Focused on accuracy and reliability.</li>
                <li><span className='font-semibold text-gray-900'>Collaboration</span> — Working closely with partners and clients.</li>
                <li><span className='font-semibold text-gray-900'>Sustainability</span> — Building for a responsible future.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 bg-gradient-to-r from-purple-100 via-gray-200 to-red-50 py-10 rounded-lg px-5'>
          <div>
            <p className='text-sm text-purple-600 font-medium'>Pioneering Aerial Intelligence</p>
            <h2 className='text-2xl md:w-4/5 w-full md:text-2xl font-bold text-gray-900'>Delivering excellence in surveying through drone</h2>
          </div>
          <div className='md:col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8'>
            {
              features.map((feature, index) => (
                <div key={index} className='flex items-start space-x-4'>
                  <div className='w-12 h-12 flex items-center justify-start rounded-lg text-2xl'>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                    <p className='text-gray-600'>{feature.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
