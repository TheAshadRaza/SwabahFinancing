import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Lixi Invest",
    href: "",
    image: "/images/brands/pahle.jpg",
  },
  {
    id: 2,
    name: "For Finance",
    href: "",
    image: "/images/brands/dusra.jpg",
  },
  {
    id: 3,
    name: "Bondra",
    href: "",
    image: "/images/brands/tisra.jpg",
  },
  {
    id: 4,
    name: "Riverty",
    href: "",
    image: "/images/brands/choutha.jpg",
  },
  {
    id: 5,
    name: "Nordea",
    href: "",
    image: "/images/brands/panchwa.jpg",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className=" flex flex-wrap items-center justify-center rounded-xl bg-white py-8 px-8   sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
             
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={""}
        rel="nofollow noreferrer"
        className="relative hover:scale-125  h-20 w-full "
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
