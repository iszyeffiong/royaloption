import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Home as HomeIcon, Heart, Users, Award, Star, Phone, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import heroImage from '@/assets/hero-care.png';
import communityActivitieImages from '@/assets/communityActivitieImages.png';
import caregiverSupportImage from '@/assets/caregiverhomesupport.png';
import FacilitiesGallery from '@/components/FacilitiesGallery';


const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a next route in the state
    if (location.state?.nextRoute && location.state.nextRoute !== '/') {
      // Add a small delay to allow the hero page to load first
      const timer = setTimeout(() => {
        navigate(location.state.nextRoute);
      }, 1000); // Adjust timing as needed

      return () => clearTimeout(timer);
    }
  }, [location.state, navigate]);

  const services = [
    {
      icon: HomeIcon,
      title: 'Group Home Services',
      description: 'Community living with safety protocols and family involvement in a supportive environment.'
    },
    {
      icon: Heart,
      title: 'Supported Living',
      description: 'In-home support and oversight to help individuals live independently with dignity.'
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Skill-building and social integration programs to enhance quality of life.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Garcia',
      role: 'Family Member',
      content: 'Royal Options has given my son the independence he always dreamed of while providing the support our family needed.',
      rating: 5
    },
    {
      name: 'James Thompson',
      role: 'Program Participant',
      content: 'The staff at Royal Options treats me with respect and helps me live my best life in my own home.',
      rating: 5
    },
    {
      name: 'Linda Wilson',
      role: 'Guardian',
      content: 'Professional, caring, and dedicated to quality service. Royal Options exceeded all our expectations.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.6)), url(${heroImage})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Empowering Lives
            <span className="block text-secondary">Together</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Royal Options Inc. provides compassionate, person-centered support services for individuals 
            with intellectual and developmental disabilities to live fulfilling, independent lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button variant="gold" size="xl" asChild> */}
           <Button variant="gold" size="xl" asChild className='hover:bg-blue hover:text-primary border-white text-blue'>

              <Link to="/services">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="gold" size="xl" asChild className='hover:bg-blue hover:text-primary border-white text-blue'>
              <Link to="/contact">Get Support</Link>
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-lg opacity-90">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>(202) 400-8404</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span><a href="mailto:info@royaloptionsinc.com" target='_blank'>info@royaloptionsinc.com</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">Our Support Services</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive support programs designed to promote independence and enhance quality of life. 
                Our experienced team provides person-centered care in community settings.
              </p>
            </div>
            <div>
              <img 
                src={communityActivitieImages} 
                alt="Community activities and support programs" 
                className="rounded-2xl shadow-premium w-full h-80 object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-premium transition-premium group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-royal rounded-xl flex items-center justify-center group-hover:scale-110 transition-premium">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="premium" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">About Royal Options Inc.</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated to empowering individuals with intellectual and developmental disabilities to live fulfilling, independent lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Royal Options Inc. is committed to delivering high-quality services to participants with 
                  intellectual and developmental disabilities, tailored to their preferences, and empowering them to lead fulfilling lives within the community of their choice.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Royal Options provides quality services to individuals with developmental disabilities. The agency's purpose is to enable individuals with developmental disabilities to lead the most fulfilling lives possible, fostering a familial atmosphere that involves both participants and their families in their daily activities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To provide quality services to participants with intellectual and developmental disabilities in 
                  compliance with the regulations to enable them to have full lives in their preferred community settings.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button variant="premium" size="lg" asChild>
              <Link to="/about">
                Read More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Royal Options?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Person-Centered Approach</h3>
                    <p className="text-muted-foreground">Every support plan is tailored to individual needs, preferences, and goals for maximum independence.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Compassionate Care</h3>
                    <p className="text-muted-foreground">Our trained staff provides caring, respectful support with safety protocols and family involvement.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Community Integration</h3>
                    <p className="text-muted-foreground">We help participants engage meaningfully with their communities and build lasting relationships.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={caregiverSupportImage} 
                alt="Professional caregiver providing home support" 
                className="rounded-2xl shadow-elegant w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-primary/90 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-6">Ready to Get Support?</h3>
                  <p className="mb-6 opacity-90">
                    Join the many families who trust Royal Options Inc. to provide quality, person-centered care.
                  </p>
                  <Button variant="gold" size="lg" className="w-full" asChild>
                    <Link to="/contact">Contact Us Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* FacilitiesGallery */}
      <section className="py-20 bg-muted/30">
      <FacilitiesGallery initialItems={3} showTitle={true} />
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Family & Participant Stories</h2>
            <p className="text-xl text-muted-foreground">
              Hear from families and participants about their experience with Royal Options Inc.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-elegant">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;