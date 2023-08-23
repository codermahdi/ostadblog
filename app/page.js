import Image from "next/image";
import ContactForm from "./components/ContactForm";
import NewestBlog from "./components/NewestBlog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Slider Section Start */}
      <>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <Image
              src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full"
              height={300}
              width={1920}
              alt="slider"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <Image
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
              height={300}
              width={1920}
              alt="slider"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <Image
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
              height={300}
              width={1920}
              alt="slider"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <Image
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
              height={300}
              width={1920}
              alt="slider"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-1 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </>
      {/* Slider Section End */}

      {/* Newest Blog Start */}
      <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
        Newest Blog
      </h1>
      <NewestBlog />
      {/* Newest Blog End */}

      {/* Contact Form Section Start */}
      <section className="py-16">
        <h2 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 text-center pb-9">
          Conatct Us
        </h2>
        <ContactForm />
      </section>

      {/* Contact Form Section End */}
    </main>
  );
}
