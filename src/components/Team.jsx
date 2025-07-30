import React from 'react';

import ekvImg from '../assets/ekv.png';
import shounakImg from '../assets/shounak.png';
import jitImg from '../assets/jit.jpeg';

const founders = [
  {
    name: 'Dr. Eswaramoorthy K.V.',
    image: ekvImg,
    intro: [
      'Dr. Eswaramoorthy K.V. is an Assistant Professor in the Department of Electronics and Communication Engineering at IIITDM Kurnool. He holds a Ph.D. from the Indian Institute of Science (IISc) Bangalore, specializing in electrochemical sensors. His expertise spans biomedical instrumentation, IoT for smart cities and agriculture, and embedded system design, with over a dozen peer-reviewed journal publications and several patents to his credit.',
      'His academic contributions include designing intelligent systems for real-time sensing and automation across diverse domains. With a strong foundation in both analog and digital technologies, Dr. Eswaramoorthy integrates cutting-edge sensor systems with AI to enable smart, efficient, and responsive drone-based solutions for industrial monitoring and data acquisition.'
    ],
  },
  {
    name: 'Dr. Shounak Chakraborty',
    image: shounakImg,
    intro: [
      'Dr. Shounak Chakraborty is an Assistant Professor in the Department of Computer Science & Engineering at IIITDM Kurnool. He is a distinguished researcher in remote sensing, pattern recognition, and AI-based image analysis, with an academic journey that spans IIIT Guwahati and Assam University. His research work focuses on developing scalable AI systems for industrial applications, particularly in drone-based aerial imaging and semantic segmentation.',
      'He has led multiple prestigious government-funded projects and collaborated with industry partners on AI-enabled drones. Dr. Chakraborty’s work bridges innovation and implementation, aiming to simplify complex industrial processes through deep learning and computer vision technologies.'
    ],
  },
  {
    name: 'Dr. Jit Mukherjee',
    image: jitImg,
    intro: [
      'Dr. Jit Mukherjee is currently a Postdoctoral Researcher at the University of Pavia, Italy, with a research focus on remote sensing, environmental monitoring, and AI applications in agriculture. He earned his Ph.D. from IIT Kharagpur, where he developed novel unsupervised methods for land cover analysis in coal mine regions using multi-spectral imagery.',
      'His work spans AI-driven remote sensing, SAR image processing, and automated detection systems, with over 25 peer-reviewed conference papers and multiple journal publications. Dr. Mukherjee has held academic positions at BIT Mesra and VIT Amaravati, and has contributed significantly to projects funded by ISRO, DST, and Vizag Steel. His blend of academic rigor and real-world applications has led to impactful solutions in geospatial analysis and environmental data intelligence.'
    ],
  },
];

const Team = () => {
  return (
    <section id='team' className='py-16 bg-gray-100'>
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Meet our Founders</h1>
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">
        {founders.map((founder, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-40 h-40 rounded-full object-cover mb-6 shadow-md"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{founder.name}</h2>
            {founder.intro.map((para, i) => (
              <p key={i} className="text-gray-600 text-justify mb-3">{para}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
