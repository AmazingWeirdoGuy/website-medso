import { Button } from "@/components/ui/button";

export default function Programs() {
  const programs = [
    {
      id: "clinical-skills",
      title: "Clinical Skills Workshop",
      subtitle: "First on the scene",
      description: "Hands-on training in basic medical procedures and patient care techniques.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: "disease-awareness",
      title: "Disease Awareness Campaigns",
      subtitle: "Fundraising events",
      description: "Initiatives to raise funds for hospitals.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: "hospital-volunteering",
      title: "Hospital Volunteering",
      subtitle: "Donation & charity",
      description: "Donations to charitable organizations or hospitals.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: "medical-research",
      title: "Medical Research Projects",
      subtitle: "Social media page",
      description: "Student-made short videos exploring current medical topics, with the aim to improve public health.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" data-testid="programs-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="programs-title">
            Our <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="programs-description">
            Empowering students with medical knowledge and practical healthcare experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              data-testid={`card-program-${program.id}`}
            >
              <img 
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
                data-testid={`img-program-${program.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`title-program-${program.id}`}>
                  {program.title}
                </h3>
                <h4 className="text-lg font-semibold text-primary mb-3" data-testid={`subtitle-program-${program.id}`}>
                  {program.subtitle}
                </h4>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-program-${program.id}`}>
                  {program.description}
                </p>
                <Button 
                  className="bg-primary text-white hover:bg-primary/90 w-full"
                  data-testid={`button-learn-${program.id}`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
