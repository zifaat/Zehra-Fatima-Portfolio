import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import Navbar from "./Navbar";
import SectionContainer from "./SectionContainer";
import ImageGallery from "./ImageGallery";
import ContactForm from "./ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import { workExperience } from "@/data/workExperience";
import { volunteering } from "@/data/volunteering";
import { creativePursuits } from "@/data/creativePursuits";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");

  // Function to handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Projects data
  const projects = [
    {
      title: "EY AI Industry Report",
      description:
        "Researched AI applications in retail/pharma for automation and ethics",
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813028c0?w=800&q=80",
      link: "https://ucd-my.sharepoint.com/:p:/g/personal/nik_haak_ucdconnect_ie/EaY7deV4KTpKoNICpYjSkywBVbL_JX7edzRbYMLMHExEdw?e=e1cemo",
    },
    {
      title: "Lynott Jewellery Strategy Plan",
      description:
        "Designed org chart, budget, and franchise roadmap for an Irish retail brand",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      link: "https://docs.google.com/presentation/d/1b5KCtp82S8eDSjAlM91jHkA-YZKG4Jb1/edit#slide=id.p1",
    },
    {
      title: "On x Whoop Collaboration Strategy",
      description:
        "Explored the strategic opportunity for a merger between On Holding AG and WHOOP",
      image:
        "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&q=80",
      link: "https://www.canva.com/design/DAGW67mJXxc/iAyICCkjMPfseNjzDMibmw/edit",
    },
    {
      title: "Website Development Project",
      description:
        "Built this portfolio as part of a Project Management module. Includes Gantt charts, WBS, stakeholder and risk analysis",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen bg-pattern">
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-lightblue-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://imgur.com/TvDvRNm.jpg"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-lightblue-100 to-transparent opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-0"></div>

        <SectionContainer>
          <div className="grid md:grid-cols-5 gap-8 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="text-left md:col-span-3 max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-lightblue-800 leading-tight">
                Welcome! I'm{" "}
                <span className="text-primary-600">Zehra Fatima</span>
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-700">
                A creative problem-solver, aspiring consultant, and MSc.
                Management Consulting student at UCD. I bring a unique blend of
                strategic thinking, data-driven insight, and cross-functional
                collaboration from experiences across consulting, analytics, and
                retail.
              </p>
              <p className="text-xl md:text-2xl font-medium italic text-lightblue-600 border-l-4 border-primary pl-4">
                Let's create meaningful change—together.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-lightblue-600 hover:bg-lightblue-700 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-lightblue-600 text-lightblue-600 hover:bg-lightblue-50 text-lg font-medium"
                >
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="md:col-span-2 flex justify-center md:justify-end"
            >
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="https://imgur.com/Q7IKW3m.jpg"
                    alt="Zehra Fatima"
                    className="w-full h-full object-cover scale-125 transform transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Zehra";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-lightblue-50/80 backdrop-blur-sm">
        <SectionContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Who I Am</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
                  I'm a versatile and curious learner with a background in
                  Business Administration and hands-on experience in data
                  analytics, customer experience, and project management.
                </p>
                <p className="text-lg mb-6">
                  From leading client projects at ZS Associates to hosting
                  events for kids at Bakingo, I've always thrived in diverse,
                  dynamic environments.
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Fun facts:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Born to explore ideas and cities</li>
                    <li>Baking is my creative therapy</li>
                    <li>Painting calms my soul</li>
                    <li>
                      I love building strategic plans and structured solutions
                    </li>
                    <li>Teamwork makes me tick</li>
                  </ul>
                </div>
                <p className="text-lg">
                  Currently based in Dublin, I'm studying at UCD and preparing
                  for the next big challenge in my consulting career.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                            {/* Replace with actual logo */}
                            <img
                              src={
                                edu.logo.replace(
                                  "https://imgur.com/",
                                  "https://i.imgur.com/",
                                ) + ".jpg"
                              }
                              alt={edu.school}
                              className="w-full h-full object-cover rounded-full"
                              onError={(e) => {
                                e.currentTarget.src =
                                  "https://api.dicebear.com/7.x/avataaars/svg?seed=" +
                                  edu.school;
                              }}
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold">
                              {edu.school}
                            </h4>
                            {edu.degree && (
                              <p className="text-sm">{edu.degree}</p>
                            )}
                            {edu.period && (
                              <p className="text-sm">{edu.period}</p>
                            )}
                          </div>
                        </div>
                        {edu.status && (
                          <Badge variant="outline" className="mt-2">
                            {edu.status}
                          </Badge>
                        )}
                        {edu.grade && (
                          <p className="text-sm mt-2 font-medium">
                            {edu.grade}
                          </p>
                        )}
                        {edu.societies && (
                          <div className="mt-3">
                            <p className="text-sm font-medium mb-1">
                              Societies:
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {edu.societies.map((society, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {society}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </SectionContainer>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-20 bg-lightblue-50/80 backdrop-blur-sm"
      >
        <SectionContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">My Journey</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://i.imgur.com/3XSDWMT.jpg"
                    alt="Family"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80";
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Family</h3>
                  <p className="text-gray-700 mb-3">
                    My constant cheerleaders and support system who provide
                    unconditional love and encouragement through every challenge
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Family, My Constant Cheerleaders
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://i.imgur.com/bOBZhnB.jpg"
                    alt="College Classmates"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80";
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    College Classmates
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Friends who made the academic journey memorable with
                    late-night study sessions and unforgettable campus
                    adventures
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    College Classmates, Memories from Bachelors
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://i.imgur.com/onz6J9Q.jpg"
                    alt="Colleagues"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80";
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Colleagues</h3>
                  <p className="text-gray-700 mb-3">
                    Professional connections that shaped my career path and
                    inspired growth through collaborative excellence
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Colleagues, Moments Beyond the Desk
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://i.imgur.com/e8hMNVV.jpg"
                    alt="Project Partners"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80";
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Project Partners
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Collaborators who helped bring ideas to life through
                    creative problem-solving and diverse perspectives that
                    enriched every project
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Project Partners, Teamwork in Action
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </SectionContainer>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-white/90 backdrop-blur-sm">
        <SectionContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Work Experience
            </h2>
            <div className="space-y-12">
              {workExperience.map((work, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="w-32 h-32 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={
                            work.logo.replace(
                              "https://imgur.com/",
                              "https://i.imgur.com/",
                            ) + ".jpg"
                          }
                          alt={work.company}
                          className="w-full h-full object-contain scale-90 transform transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://api.dicebear.com/7.x/avataaars/svg?seed=" +
                              work.company;
                          }}
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold mb-1">
                          {work.website ? (
                            <a
                              href={work.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              {work.company}
                            </a>
                          ) : (
                            work.company
                          )}
                        </h3>
                        <p className="text-lg font-medium mb-4">{work.role}</p>
                        <ul className="list-disc pl-6 space-y-2">
                          {work.description.map((item, i) => (
                            <li key={i} className="text-gray-700">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </SectionContainer>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-lightblue-50/80 backdrop-blur-sm"
      >
        <SectionContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden h-full">
                  {project.image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80";
                        }}
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-lightblue-600 hover:text-lightblue-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" /> View Project
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </SectionContainer>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/90 backdrop-blur-sm">
        <SectionContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    Business & Project Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.business.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-sm py-1 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    Technical Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-sm py-1 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Certifications</h3>
                  <ul className="space-y-3">
                    {skills.certifications.map((cert, index) => (
                      <li key={index} className="flex items-center">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:underline flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {cert.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </SectionContainer>
      </section>

      {/* Volunteering Section */}
      <section
        id="volunteering"
        className="py-20 bg-lightblue-50/80 backdrop-blur-sm"
      >
        <SectionContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Volunteering & Leadership
            </h2>
            <div className="space-y-10">
              {volunteering.map((vol, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-32 h-32 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <img
                          src={
                            vol.logo.replace(
                              "https://imgur.com/",
                              "https://i.imgur.com/",
                            ) + ".jpg"
                          }
                          alt={vol.organization}
                          className="w-28 h-28 object-contain"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://api.dicebear.com/7.x/avataaars/svg?seed=" +
                              vol.organization;
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {vol.organization}
                        </h3>
                        <p className="text-lg font-medium mb-1">{vol.role}</p>
                        {vol.location && (
                          <p className="text-sm text-gray-600 mb-3">
                            {vol.location}
                          </p>
                        )}

                        {typeof vol.description === "string" ? (
                          <p className="text-gray-700">{vol.description}</p>
                        ) : (
                          <ul className="list-disc pl-6 space-y-2">
                            {vol.description.map((item, i) => (
                              <li key={i} className="text-gray-700">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {vol.certificateLink && (
                          <div className="mt-3">
                            <a
                              href={vol.certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-lightblue-600 hover:text-lightblue-800 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" /> View
                              Certificate
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </SectionContainer>
      </section>

      {/* Creative Section */}
      <section id="creative" className="py-20 bg-white/90 backdrop-blur-sm">
        <SectionContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Creative Pursuits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {creativePursuits.map((creative, index) => (
                <Card key={index} className="overflow-hidden h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {creative.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{creative.description}</p>

                    {creative.images && creative.images.length > 0 && (
                      <ImageGallery
                        images={creative.images.map((img) => ({
                          src: img,
                          alt: creative.title,
                        }))}
                        columns={2}
                        aspectRatio="4:3"
                      />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center mt-10 text-lg italic">
              Want to see more of this? Reach out—I'd love to share!
            </p>
          </motion.div>
        </SectionContainer>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-lightblue-50/80 backdrop-blur-sm"
      >
        <SectionContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">
              Let's collaborate or connect!
            </h2>
            <p className="text-center text-lg mb-12">
              I'm always open to new opportunities and connections
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">
                      Contact Information
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <Mail className="w-5 h-5 mr-3" />
                        <a
                          href="mailto:zfatima444@gmail.com"
                          className="hover:underline"
                        >
                          zfatima444@gmail.com
                        </a>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="w-5 h-5 mr-3" />
                        <span>Based in Dublin, Ireland</span>
                      </li>
                      <li className="flex items-center">
                        <Linkedin className="w-5 h-5 mr-3" />
                        <a
                          href="https://linkedin.com/in/zefat"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          linkedin.com/in/zefat
                        </a>
                      </li>
                      <li className="flex items-center">
                        <Phone className="w-5 h-5 mr-3" />
                        <a href="tel:+353892481347" className="hover:underline">
                          +353 89 248 1347
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </SectionContainer>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-lightblue-800 text-white">
        <SectionContainer>
          <div className="text-center">
            <p>© 2025 Zehra Fatima. Built with purpose and passion.</p>
          </div>
        </SectionContainer>
      </footer>
    </div>
  );
};

export default Home;
