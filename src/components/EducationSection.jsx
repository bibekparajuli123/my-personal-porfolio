import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A brief overview of my academic journey and milestones.
        </p>

        <div className="space-y-8 border-l-2 border-primary/30 pl-6">
          {/* Bachelors */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">B.Tech CSE (Current)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                2022 – 2026 • KIIT UNIVERSITY, Bhubaneswar, Odisha
              </p>
              <p className="text-sm">
                CGPA: <span className="font-semibold">8.90</span> • Currently in{" "}
                <span className="font-semibold">7th Semester</span>
              </p>
            </div>
          </div>

          {/* High School */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">High School</h3>
              <p className="text-sm text-muted-foreground mb-2">
                2020 – 2022 • Annapurna Model College, Butwal, Nepal
              </p>
              <p className="text-sm">Computer Science Stream</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
