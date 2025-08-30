import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stethoscope } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 flex items-center justify-center px-4 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 max-w-6xl w-full mx-4" data-testid="hero-card">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <Badge className="inline-flex items-center space-x-2 bg-primary/10 text-primary hover:bg-primary/20 mb-6" data-testid="hero-badge">
              <Stethoscope className="w-4 h-4" />
              <span>MedSociety</span>
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="hero-title">
              Welcome to <br />
              <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">
                ISB MedSociety
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="hero-description">
              "Our mission is to educate the public on diseases and advocate for healthcare equity everywhere."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-primary text-white hover:bg-primary/90" data-testid="button-join">
                Join Our Community
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" data-testid="button-learn">
                Learn More
              </Button>
            </div>
          </div>

          {/* Circular Images */}
          <div className="flex justify-center lg:justify-end" data-testid="hero-images">
            <div className="grid grid-cols-3 gap-4 items-center">
              {/* Medical students studying together */}
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                alt="Medical students studying" 
                className="w-24 h-24 rounded-full object-cover shadow-lg"
                data-testid="img-students-1"
              />
              
              {/* Healthcare professional with stethoscope */}
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                alt="Healthcare professional" 
                className="w-32 h-32 rounded-full object-cover shadow-xl"
                data-testid="img-professional-1"
              />
              
              {/* Medical equipment and tools */}
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                alt="Medical equipment" 
                className="w-24 h-24 rounded-full object-cover shadow-lg"
                data-testid="img-equipment-1"
              />
              
              {/* Student workshop activity */}
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                alt="Student workshop" 
                className="w-28 h-28 rounded-full object-cover shadow-lg"
                data-testid="img-workshop-1"
              />
              
              {/* Medical students in classroom */}
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                alt="Medical students in classroom" 
                className="w-20 h-20 rounded-full object-cover shadow-lg"
                data-testid="img-students-2"
              />
              
              {/* Healthcare team meeting */}
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                alt="Healthcare team meeting" 
                className="w-26 h-26 rounded-full object-cover shadow-lg"
                data-testid="img-team-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
