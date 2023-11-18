const NewsLatterBox = () => {
  return (
    <div
      className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Our Physical Location
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base font-medium leading-relaxed dark:border-white dark:border-opacity-25">
        Swabah Financing Broker EST.<br/>
        Near KFC office-402<br/>
        Frij Al Murar Deira, Dubai - 21275
      </p>
     
      <div className="location mr-4" >

      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.7757611092193!2d55.30646137538445!3d25.278127677658915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzQxLjMiTiA1NcKwMTgnMzIuNSJF!5e0!3m2!1sen!2sae!4v1698509594241!5m2!1sen!2sae" width="300" height="300" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>




      </div>




    </div>
  );
};

export default NewsLatterBox;
