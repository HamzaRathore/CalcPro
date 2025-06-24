import React from 'react'

  const About= () => {
  return (
    <div name="about" className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About CalcPro</h2>
        <p className="text-gray-600 text-md leading-relaxed max-w-3xl mx-auto">
          CalcPro is your go-to platform for a wide range of professional-grade calculators,
          designed to make your daily life, academic tasks, and business operations easier.
          Whether you're crunching numbers, planning finances, or tracking health metrics —
          CalcPro is here to simplify every calculation.
        </p>
        <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500">
          <div>
            <span className="font-semibold text-gray-800">30+</span> Calculators
          </div>
          <div>
            <span className="font-semibold text-gray-800">1M+</span> Users
          </div>
          <div>
            <span className="font-semibold text-gray-800">24/7</span> Availability
          </div>
        </div>
      </div>
    </div>
  );
};


export default About
