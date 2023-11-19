import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section id="blog" className=" py-16 md:py-20 lg:py-28">
      <div className="container bg-rose">
        <SectionTitle
          title="Our Services"
          paragraph="Our Financial Solutions: Tailored to Your Needs."
          center
        />

        <div className="grid grid-cols-1 gap-x-12  gap-y-12 md:grid-cols-2 md:gap-x-6 lg:gap-x-12 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full shadow-2xl hover:shadow-sm cursor-hower shadow-white">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
