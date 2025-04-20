import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "../SectionContainer";
import { Card, CardContent } from "@/components/ui/card";

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-lightblue-50/80 backdrop-blur-sm">
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
                  late-night study sessions and unforgettable campus adventures
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
                <h3 className="text-xl font-semibold mb-3">Project Partners</h3>
                <p className="text-gray-700 mb-3">
                  Collaborators who helped bring ideas to life through creative
                  problem-solving and diverse perspectives that enriched every
                  project
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
  );
};

export default GallerySection;
