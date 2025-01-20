import Image from 'next/image';
import React from 'react';

const FeaturedSection = () => {
  const features = [
    {
      id: 1,
      title: 'ডেঙ্গু জ্বর',
      description:
        'ডেঙ্গু জ্বরে যারা আক্রান্ত হন, তাদের প্রতি ১০ জনের মধ্যে একজনের অবস্থা মারাত্মক হয়। তবে জ্বর হলে সেটা ডেঙ্গু কি না তা আগে থেকেই ধরে ফেলে সময়মতো চিকিৎসা নিলে ভয়াবহতা অনেকখানি কমিয়ে আনা যায়।',
      image:
        'https://assets.shohay.health/uploads/2022/11/dengue-fever--560x290.png.webp',
      tag: 'সংক্রামক রোগ',
    },
    {
      id: 2,
      title: 'গর্ভাবস্থায় চামড়ার ফুসকুড়ি',
      image:
        'https://assets.shohay.health/uploads/2023/07/Skin-Rash-During-Pregnancy-390x219.png.webp',
    },
    {
      id: 3,
      title: 'গর্ভাবস্থায় নাক ডাক',
      image:
        'https://assets.shohay.health/uploads/2023/09/Snoring-During-Pregnancy-390x219.png.webp',
    },
    {
      id: 4,
      title: 'এপিসিওটমি বা সাইড কাট',
      image:
        'https://assets.shohay.health/uploads/2023/07/Episiotomy-390x219.png.webp',
    },
    {
      id: 5,
      title: 'গর্ভাবস্থায় চোখে ঝাপসা দেখা',
      image:
        'https://assets.shohay.health/uploads/2023/07/Blurred-Vision-During-Pregnancy-390x219.png.webp',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold  text-gray-800">
        সর্বশেষ প্রকাশিত
      </h2>
      <div className="border-t-2 mb-6 border-solid border-gray-300 w-full h-0"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Main featured item */}
        <div className="md:col-span-2 lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src={features[0].image}
              alt={features[0].title}
              width={560}
              height={290}
              className="w-full h-64 object-cover"
            />
            {features[0].tag && (
              <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                {features[0].tag}
              </span>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{features[0].title}</h3>
            <p className="text-gray-600">{features[0].description}</p>
          </div>
        </div>

        {/* Secondary items */}
        {features.slice(1).map(feature => (
          <div
            key={feature.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <Image
                src={feature.image}
                alt={feature.title}
                width={390}
                height={219}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
