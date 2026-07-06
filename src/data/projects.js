import animal from "../assets/images/animal.png";
import golden from "../assets/images/goldencrumbz.png";

const projects = [
  {
    id: 1,
    title: "Animal Vocalization Recognition System",
    image: animal,
    description:
      "A Machine Learning project that recognizes animal vocalizations using MFCC feature extraction and deep learning techniques. Built to assist wildlife monitoring and biodiversity conservation.",
    tech: [
      "Python",
      "TensorFlow",
      "Librosa",
      "Flask",
      "Machine Learning",
    ],
    github: "https://github.com/07anushka",
    demo: "#",
  },
  {
    id: 2,
    title: "Golden Crumbz",
    image: golden,
    description:
      "A responsive bakery website developed using React with a modern UI, menu showcase, product gallery, contact page and mobile-first responsive design.",
    tech: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive Design",
    ],
    github: "https://github.com/07anushka",
    demo: "#",
  },
];

export default projects;