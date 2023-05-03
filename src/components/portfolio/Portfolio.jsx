import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.jpg";
import IMG2 from "../../assets/img2.jpg";
import IMG3 from "../../assets/img3.jpg";
import IMG4 from "../../assets/img4.jpg";
import IMG5 from "../../assets/img5.jpg";
import IMG6 from "../../assets/img6.jpg";
import IMG7 from "../../assets/img7.jpg";
import IMG8 from "../../assets/img8.jpg";
import IMG9 from "../../assets/img9.jpg";
import IMG10 from "../../assets/img10.jpg";
import IMG11 from "../../assets/img11.jpg";
import IMG12 from "../../assets/img12.jpg";
import IMG13 from "../../assets/img13.jpg";
import IMG14 from "../../assets/img14.jpg";
import IMG15 from "../../assets/img15.jpg";
import IMG16 from "../../assets/img16.jpg";
import IMG17 from "../../assets/img17.jpg";
import IMG18 from "../../assets/img18.jpg";


const Portfolio = () => {
  const soloprojects = [
    {
      id: 1,
      title: "Side supervision for BBS work checking",
      img: IMG1,
      description:
        "Checking the vendor's work as per given construction drawing",
     
    },
    {
      id: 2,
      title: "Building Slab Casting",
      img: IMG2,
      description:
        "Afer completion of Props, shuttering, BBS work and HDPE work for Electrical. ",
      
    },

    {
      id: 3,
      title: "Casting",
      img: IMG3,
      description: "Casting the massive structure via Concrete Mix Pumping Machine.",
     
    },

    {
      id: 4,
      title: "Site Inspection",
      img: IMG4,
      description: "Base preparation with Grader, Roller and WaterTank.",
      
    },

    {
      id: 5,
      title: "Base Preparation",
      img: IMG5,
      description: "Base work on Hulaki Highway.",

    },
    {
      id: 6,
      title: " Bitumen's Primer spraying",
      img: IMG6,
      description: "VG30 Grade Bitumen's Primer spraying",
      
    },

    {
      id: 7,
      title: "Design BBS",
      img: IMG7,
      description: "Design, Execute the BBS work for building slab.",

    },
    {
      id: 8,
      title: "Arranging Construction Material",
      img: IMG8,
      description: "For casting the building slab.",
  
    },

    {
      id: 9,
      title: "Site Inspection",
      img: IMG9,
      description: "Checking RCC work for Slab casting.",

    },

    {
        id: 10,
        title: "Survey",
        img: IMG10,
        description: "To locate and measure required building data. ",
  
      },

      {
        id: 11,
        title: "Designing",
        img: IMG11,
        description: "Designing the project as per client's requirement.",
  
      },

      {
        id: 12,
        title: "Work execution",
        img: IMG12,
        description: "As per given drawing and renders to vendor.",
  
      },

      {
        id: 13,
        title: "Site visit",
        img: IMG13,
        description: "Checking Interior work execution.",
  
      },

      {
        id: 14,
        title: "Carpentary Work",
        img: IMG14,
        description: "Laminate work on wooden partiton.",
  
      },

      {
        id: 15,
        title: "Carpentary and Electrical work",
        img: IMG15,
        description: "Interior work for Auditorium hall.",
  
      },

      {
        id: 16,
        title: "Civil Work",
        img: IMG16,
        description: "Brick Masonary, Plaster, Tiling, Electrical work.",
  
      },

      {
        id: 17,
        title: "Exterior Work",
        img: IMG17,
        description: "Glass and Aluminum fabrication, Putty, primer, Electrical, Aluminum fins work .",
  
      },

      
      {
        id: 18,
        title: "Building Project Submission",
        img: IMG18,
        description: "Civil, Electrical, Interior, Lift, Iron/Almunium/Glass fabrication, Plumbing, False ceiling, Tiling, Painting, CCTV Camera, Fire Alarm, IT, Sanotary etc related 100% work submission by matching the deadline  given by  client's on SARAWAGI COMPLEX BUILDING .",
  
      },






  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {soloprojects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title}></img>
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
            </div>
           
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
