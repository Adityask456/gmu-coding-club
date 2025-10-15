import { useState } from "react";
import { ExternalLink, Code, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import webProjectImg from "@/assets/project-web.jpg";
import aiProjectImg from "@/assets/project-ai.jpg";
import iotProjectImg from "@/assets/project-iot.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoLink?: string;
  codeLink?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    {
      id: "1",
      title: "Campus Connect Platform",
      description: "A social networking platform exclusively for GMU students to connect, collaborate, and share resources.",
      image: webProjectImg,
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Web",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "2",
      title: "AI Study Companion",
      description: "An AI-powered chatbot that helps students with doubt resolution and personalized learning recommendations.",
      image: aiProjectImg,
      technologies: ["Python", "TensorFlow", "Flask", "NLP"],
      category: "AI",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "3",
      title: "Smart Attendance System",
      description: "IoT-based attendance tracking system using RFID and real-time cloud synchronization.",
      image: iotProjectImg,
      technologies: ["Arduino", "Firebase", "React", "RFID"],
      category: "IoT",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "4",
      title: "GMU Event Manager",
      description: "Comprehensive event management system for organizing and tracking club activities and workshops.",
      image: webProjectImg,
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
      category: "Web",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "5",
      title: "Code Plagiarism Detector",
      description: "ML-based tool to detect code plagiarism and similarity across multiple programming languages.",
      image: aiProjectImg,
      technologies: ["Python", "Scikit-learn", "FastAPI", "React"],
      category: "AI",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "6",
      title: "Library Automation Bot",
      description: "Mobile app with IoT integration for automated book tracking and reservation in campus library.",
      image: iotProjectImg,
      technologies: ["React Native", "ESP32", "MongoDB", "MQTT"],
      category: "Mobile",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "7",
      title: "Virtual Lab Simulator",
      description: "Interactive 3D physics and chemistry lab simulations for online learning and experimentation.",
      image: webProjectImg,
      technologies: ["Three.js", "WebGL", "React", "Node.js"],
      category: "Web",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "8",
      title: "Voice-Based Navigation App",
      description: "Accessibility-focused mobile app with voice commands for visually impaired campus navigation.",
      image: aiProjectImg,
      technologies: ["React Native", "Google Speech API", "TensorFlow", "Maps API"],
      category: "Mobile",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "9",
      title: "Smart Parking System",
      description: "IoT solution for real-time parking space detection and reservation using sensors and mobile app.",
      image: iotProjectImg,
      technologies: ["ESP8266", "React Native", "Firebase", "Ultrasonic Sensors"],
      category: "IoT",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "10",
      title: "Resume Builder AI",
      description: "AI-powered resume generator with ATS optimization and industry-specific templates.",
      image: aiProjectImg,
      technologies: ["GPT-4", "React", "Node.js", "PDF.js"],
      category: "AI",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "11",
      title: "College Placement Portal",
      description: "Complete placement management system connecting students, companies, and placement cell.",
      image: webProjectImg,
      technologies: ["Vue.js", "Express", "MySQL", "Redis"],
      category: "Web",
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: "12",
      title: "Food Waste Tracker",
      description: "IoT-enabled system to monitor and reduce food waste in campus cafeterias with analytics dashboard.",
      image: iotProjectImg,
      technologies: ["Raspberry Pi", "Python", "React", "InfluxDB"],
      category: "IoT",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const filters = ["All", "Web", "AI", "IoT", "Mobile", "Other"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built by our talented members
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="gap-2"
            >
              <Filter className="h-4 w-4" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.demoLink && (
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.codeLink && (
                    <Button size="sm" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20" asChild>
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Code className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
