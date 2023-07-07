import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content:
      "In my opinion, the most valuable skills any SWE can have are curiosity, persistence and passion. If you're dedicated and willing to put in the time and effort, everything else falls in line. These are skills that Nathan has in spades. There's not a book, blog, design principal or concept that I've mentioned to him that he didn't aquire/review and come back with questions or feedback on. When someone is willing to do the work it's an honor to be viewed as their mentor. If you're hiring junior SWEs and looking for someone who is willing to put in the time and effort to be the best he can be, please look no further than Nathan Foss",
    authorImage: "https://media.licdn.com/dms/image/C5603AQFEQW1q2pxR4g/profile-displayphoto-shrink_100_100/0/1615859344161?e=1694044800&v=beta&t=wbo-N-par04LE0u3usp4pz3v9m-WHaLgH0GyvoDCl-c",
    authorName: "Brian Riley",
    authorStatus: "Senior Software Engineer at Indeed.com",
    authorLink: "https://www.linkedin.com/in/brian-riley-developer/"
  },
  {
    id: 2,
    content:
      "I have had the pleasure of working with Nathan as a peer on several projects during my time as a software developer student. One of the things that stands out to me about Nathan is his resilience and determination. No matter how big the problem or obstacle, he always seems to find a way to figure it out. In addition to his problem-solving skills, Nathan is also an incredibly hard worker. He is always willing to put in the extra time and effort to ensure that the job is done right. His dedication to his work is truly admirable, and I believe it is one of the key reasons for his success as a software developer. Overall, I highly recommend Nathan for any software development opportunity. His combination of resilience, determination, and hard work make him an invaluable asset to any team.",
    authorImage: "https://media.licdn.com/dms/image/C4E03AQGrb3PUCvoWgg/profile-displayphoto-shrink_100_100/0/1643672724545?e=1694044800&v=beta&t=ZtWvUqclh71sqK_WTJOdeGXVHOn8rVR6OiAvDj-4WuU",
    authorName: "Pablo Fuentes Tudela",
    authorStatus: "Software Engineer",
    authorLink: "https://www.linkedin.com/in/pablo-fuentes-tudela/"
  },
  {
    id: 3,
    content:
      "I had the privilege of working with Nathan as a software engineer, and I wholeheartedly endorse him for any future software engineering positions. Nathan boasts a robust understanding of various programming languages, including JavaScript, React, Ruby, and Ruby on Rails. Nathan proved to be an outstanding team player, always offering support to his colleagues and playing an instrumental role in the team's success. He was also an invaluable resource for anyone in the team seeking help with their code, as he was always ready and willing to answer questions and offer guidance. Nathan's technical expertise and attention to detail were apparent in the outstanding work he delivered. He consistently produced code that was well-structured, efficient, and easy to maintain, and he displayed remarkable problem-solving skills and an ability to quickly adapt to new challenges. In conclusion, I highly recommend Nathan for any software engineering role. With his skills, experience, and positive attitude, he would be an invaluable addition to any team. I am confident that he would be a top-notch choice for any company seeking a talented and dedicated software engineer.",
    authorImage: "https://media.licdn.com/dms/image/D4E03AQFgkBGo5htAEg/profile-displayphoto-shrink_100_100/0/1668801659911?e=1694044800&v=beta&t=lsc2mohPvMAPDI9zuV30j0t223dFGKzCN73B9t6PkLc",
    authorName: "Isaac Jaquez",
    authorStatus: "Agricultural Systems Analyst | Full-Stack Developer",
    authorLink: "https://www.linkedin.com/in/isaac-jaquez/"
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
