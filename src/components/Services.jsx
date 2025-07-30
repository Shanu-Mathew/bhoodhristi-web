import { motion } from 'framer-motion';

const services = [
  {
    image: '../assets/Services/Services1.png',
    title: 'Customised Drone Design & Development',
    description:
      'We specialize in the design and development of custom drone systems tailored to meet unique requirements in industrial and academic environments. Whether it’s high-endurance drones for surveillance, payload-carrying quadcopters, or research-specific platforms, our team crafts solutions from concept to prototype, ensuring optimal performance, integration of sensors, and modular adaptability.',
  },
  {
    image: '../assets/Services/Services2.png',
    title: 'Integration & Deployment Support',
    description:
      'Our services go beyond just building drones—we ensure that they are fully integrated into your existing workflows. From on-site calibration, software-hardware interfacing, to training your staff and providing detailed operational manuals, we guarantee a smooth transition from setup to operation. We also offer post-deployment monitoring and technical support for continuous uptime.',
  },
  {
    image: '../assets/Services/Services3.png',
    title: 'Aerial Survey & Geographical Mapping',
    description:
      'We provide advanced aerial survey services using high-resolution cameras and LiDAR-equipped drones to capture precise topographical data. Our mapping solutions are ideal for agriculture, construction planning, infrastructure development, and environmental studies. Deliverables include orthomosaic maps, 3D terrain models, and actionable insights, all processed using state-of-the-art photogrammetry tools.',
  },
];

const industries = [
  {
    title: 'Mining',
    image: '../assets/Services/SerInd1.jpg',
    description:
      'Utilize drones for accurate stockpile verification, reducing manual errors and improving asset tracking in mines.',
  },
  {
    title: 'Construction',
    image: '../assets/Services/SerInd2.jpg',
    description:
      'Monitor site progress, perform aerial surveys, and use segmentation to track material flow and development phases.',
  },
  {
    title: 'Cement Plants',
    image: '../assets/Services/SerInd3.jpg',
    description:
      'Track raw material stockpiles, inspect silos and large structures, and optimize logistics with real-time drone insights.',
  },
  {
    title: 'Ports & Logistics',
    image: '../assets/Services/SerInd4.jpg',
    description:
      'Leverage aerial mapping for yard planning, cargo monitoring, and enhancing safety in port operations and freight yards.',
  },
  {
    title: 'Railways',
    image: '../assets/Services/SerInd5.jpg',
    description:
      'Survey track infrastructure, monitor construction progress, and ensure safe clearances in hard-to-access rail zones.',
  },
  {
    title: 'Heavy Industries',
    image: '../assets/Services/SerInd6.jpg',
    description:
      'Support steel plants and heavy industries with drone-based inspections, inventory audits, and maintenance surveillance in large-scale manufacturing sites.',
  },
  {
    title: 'Inventory Yards',
    image: '../assets/Services/SerInd7.jpg',
    description:
      'Perform rapid yard audits, track inventory levels from above, and optimize warehouse logistics with minimal human intervention.',
  },
  {
    title: 'Highway Infrastructures',
    image: '../assets/Services/SerInd8.jpg',
    description:
      'Conduct route surveys, track roadwork progress, and inspect bridges or elevated structures using high-resolution drone footage.',
  },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const Services = () => {
  return (
<section
  id="services"
  className="px-4 sm:px-8 md:px-16 py-10 bg-gradient-to-r from-purple-50 via-gray-100 to-cyan-50"
>



      {/* Services Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <div className="w-24 h-1 bg-gray-800 mx-auto mt-2 rounded-full" />
      </div>

      <div className="space-y-10 px-2 sm:px-8 md:px-25">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="max-w-xs h-[200px] md:max-w-sm rounded-xl shadow-md object-cover border-2"
            />
            <div className="md:w-3/5 text-center md:text-left">
              <h2
                className={`text-2xl font-semibold text-gray-800 mb-2 relative pb-2 inline-block ${
                  index % 2 !== 0 ? 'md:text-right' : ''
                }`}
              >
                {service.title}
                <span className="block h-1 w-20 bg-gray-400 mt-1 rounded-full mx-auto md:mx-0" />
              </h2>
              <p className="text-gray-600 text-justify">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Industries Section */}
      <div className="mt-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Industries We Support</h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md border hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative bg-gray-200 w-full h-48 rounded-t-xl overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-t-xl opacity-0 transition-opacity duration-700 ease-in-out"
                  onLoad={(e) => {
                    e.currentTarget.classList.remove('opacity-0');
                    e.currentTarget.classList.add('opacity-100');
                  }}
                />
                <div className="absolute inset-0 bg-black/50 rounded-t-xl pointer-events-none" />
              </div>
              <div className="p-3">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center relative">
                  {industry.title}
                  <span className="block h-0.5 w-12 bg-gray-400 mt-1 rounded-full mx-auto" />
                </h3>
                <p className="text-gray-600 text-sm text-justify">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>  
  );
};

export default Services;
