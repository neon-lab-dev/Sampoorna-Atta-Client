import React from 'react';
import { ArrowRight, Wheat, Clock, Truck } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Fresh Atta & Groceries",
  subtitle = "Farm-fresh essentials delivered to your doorstep",
  primaryCtaText = "Shop Now",
  secondaryCtaText = "View Offers"
}) => {
  return (
    <section className="relative bg-gradient-to-b from-white to-primary-10 py-16 md:py-24 overflow-hidden">
      {/* Minimal Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-10 border border-primary-20 text-white">
              <Wheat className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">
                100% Whole Grain
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
              <span className="block text-primary-60 mt-2">
                {subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Discover the finest quality Atta, grains, and daily essentials. 
              Fresh from the mill to your kitchen.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group px-6 py-3 bg-primary-60 text-white font-medium rounded-lg hover:bg-primary-70 transition-all duration-200 flex items-center justify-center">
                {primaryCtaText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-primary-30 hover:bg-primary-10 transition-all duration-200">
                {secondaryCtaText}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8 text-white">
              <div className="flex items-center">
                <div className="p-2 bg-primary-10 rounded-full mr-3">
                  <Clock className="h-4 w-4 text-primary-60" />
                </div>
                <span className="text-sm">Same Day Delivery</span>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 bg-primary-10 rounded-full mr-3">
                  <Truck className="h-4 w-4 text-primary-60" />
                </div>
                <span className="text-sm">Free Shipping over ₹499</span>
              </div>
            </div>
          </div>

          {/* Right Content - Minimal Product Showcase */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Main Image Placeholder - Replace with actual product image */}
              <div className="aspect-square bg-gradient-to-br from-primary-20 to-primary-10 rounded-2xl p-8">
                <div className="w-full h-full relative">
                  {/* Wheat icon pattern */}
                  <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-20">
                    {[...Array(9)].map((_, i) => (
                      <Wheat key={i} className="h-8 w-8 text-primary-60" />
                    ))}
                  </div>
                  
                  {/* Product cards floating effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-2xl font-bold text-primary-80">Fresh Atta</p>
                    <p className="text-primary-60">Stone Ground</p>
                  </div>
                </div>
              </div>

              {/* Floating price tag */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-primary-20">
                <p className="text-sm text-gray-500">Starting from</p>
                <p className="text-2xl font-bold text-secondary-60">₹49</p>
                <p className="text-xs text-gray-400">per kg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Categories */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Wheat', 'Rice', 'Dal', 'Flour', 'Spices'].map((category) => (
              <button
                key={category}
                className="group p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-30 hover:shadow-sm transition-all"
              >
                <p className="text-sm font-medium text-gray-700 group-hover:text-primary-60">
                  {category}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;