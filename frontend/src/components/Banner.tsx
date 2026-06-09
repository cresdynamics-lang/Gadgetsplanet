import ProductImage from './ProductImage';

const Banner = () => {
  return (
    <section className="px-8 py-10">
      <div className="max-w-7xl mx-auto min-h-[400px] rounded-[40px] bg-black relative overflow-hidden group grid grid-cols-1 md:grid-cols-2">
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 py-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Score An Extra 40% off <br /> Your Entire Order
          </h2>
          <button type="button" className="bg-cta text-white px-10 py-4 rounded-full font-bold hover:bg-cta/90 transition-all shadow-xl shadow-cta/20">
            Shop Now
          </button>
        </div>
        <div className="relative min-h-[280px] md:min-h-full flex items-center justify-center p-8 bg-black/40">
          <ProductImage
            src="/macbook air m5.jpg"
            alt="Banner"
            className="w-full h-full max-h-[320px]"
            frameClassName="bg-transparent opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
