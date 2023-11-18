import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Welcome to Swabah Financing Broker"
        description="At Swabah Financing Broker, we are dedicated to simplifying the complex world of banking and finance. Established with a vision to empower individuals and businesses, we specialize in connecting our clients with tailored financial solutions that match their unique needs."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
