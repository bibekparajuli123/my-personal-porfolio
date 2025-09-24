import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Java Developer and Aspiring Software Engineer
            </h3>

            <p className="text-muted-foreground">
              Experienced in Java Backend Development
            </p>

            <p className="text-muted-foreground">
              I’m a self-taught Java Backend Developer
              passionate about building scalable systems
              with Spring Boot, RESTful APIs, microservices,
              and MySQL, while ensuring security, efficiency,
              and continuous learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1Uw4ktBGMK1tsugapeXwHCK2V_DDLBH5q/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View CV
              </a>


            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Java Backend Development</h4>
                  <p className="text-muted-foreground">
                    Developing scalable systems using Spring Boot, REST APIs, and MySQL.
                    Focusing on secure authentication, microservices, and API documentation.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Flutter Development</h4>
                  <p className="text-muted-foreground">
                    Creating cross-platform mobile apps with custom UI/UX and Firebase.
                    Optimizing performance with state management and clean architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">US IT Sales Recruitment</h4>
                  <p className="text-muted-foreground">
                    Driving full-cycle IT recruitment, C2C/W2 placements, and vendor collaboration.
                    Building strong pipelines while ensuring compliance and client alignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
