import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home as HomeIcon, 
  Heart, 
  Users, 
  Stethoscope, 
  Clock, 
  Car, 
  GraduationCap, 
  UserCheck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import servicesImage from '@/assets/services-support.jpg';
import nursingImage from '@/assets/nursing-support.jpg';
import independentLivingImage from '@/assets/independent-living.jpg';
import groupHomeImage from '@/assets/group-home-activities.jpg';

const Services = () => {
  const mainServices = [
    {
      icon: HomeIcon,
      title: 'Group Home Services',
      description: 'Community living with safety protocols and family involvement in supportive residential settings.',
      features: [
        '24/7 professional support staff',
        'Safety protocols and emergency procedures',
        'Family involvement and communication',
        'Community integration activities'
      ],
      price: 'Contact for assessment'
    },
    {
      icon: Heart,
      title: 'Supported Living',
      description: 'In-home support and oversight to help individuals live independently with dignity.',
      features: [
        'Personalized support plans',
        'Independent living skills training',
        'Regular oversight and monitoring',
        'Crisis intervention when needed'
      ],
      price: 'Tailored to individual needs'
    },
    {
      icon: Stethoscope,
      title: 'Nursing Support',
      description: 'Licensed nurse services and comprehensive case management for health and wellness.',
      features: [
        'Licensed nursing professionals',
        'Medication management',
        'Health monitoring and coordination',
        'Medical appointment coordination'
      ],
      price: 'Based on care level required'
    }
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: 'Respite Care',
      description: 'Temporary support for families during planned absences or emergencies'
    },
    {
      icon: UserCheck,
      title: 'Personal Support',
      description: 'Help with daily living activities and personal care in the home'
    },
    {
      icon: Car,
      title: 'Transportation Services',
      description: 'Safe community outings and transportation to appointments'
    },
    {
      icon: GraduationCap,
      title: 'Community Development',
      description: 'Skill-building programs and social integration opportunities'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.6)), url(${servicesImage})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Support Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Comprehensive support programs designed to help individuals with intellectual and 
            developmental disabilities live fulfilling, independent lives.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Core Services</h2>
            <p className="text-xl text-muted-foreground">
              Essential support services tailored to individual needs and goals
            </p>
          </div>
          
          {/* Service Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
              <img 
                src={groupHomeImage} 
                alt="Group home support activities" 
                className="rounded-xl shadow-elegant w-full h-48 object-cover group-hover:scale-105 transition-premium"
              />
              <div className="absolute inset-0 bg-primary/70 rounded-xl opacity-0 group-hover:opacity-100 transition-premium flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Group Home Services</h3>
              </div>
            </div>
            <div className="relative group">
              <img 
                src={independentLivingImage} 
                alt="Independent living skills training" 
                className="rounded-xl shadow-elegant w-full h-48 object-cover group-hover:scale-105 transition-premium"
              />
              <div className="absolute inset-0 bg-primary/70 rounded-xl opacity-0 group-hover:opacity-100 transition-premium flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Supported Living</h3>
              </div>
            </div>
            <div className="relative group">
              <img 
                src={nursingImage} 
                alt="Professional nursing support" 
                className="rounded-xl shadow-elegant w-full h-48 object-cover group-hover:scale-105 transition-premium"
              />
              <div className="absolute inset-0 bg-primary/70 rounded-xl opacity-0 group-hover:opacity-100 transition-premium flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Nursing Support</h3>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-premium transition-premium group relative">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-royal rounded-xl flex items-center justify-center group-hover:scale-110 transition-premium">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary mb-3">{service.price}</p>
                    <Button variant="premium" className="w-full" asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Complementary services to support your complete journey to independence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-premium transition-premium group">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-3 gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-premium">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A person-centered approach to developing and implementing support plans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Initial evaluation of individual needs, preferences, and goals' },
              { step: '02', title: 'Planning', description: 'Development of personalized person-centered support plan' },
              { step: '03', title: 'Implementation', description: 'Delivery of tailored support services and programs' },
              { step: '04', title: 'Monitoring', description: 'Ongoing evaluation and adjustment of support services' }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 gradient-royal rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Support Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a consultation and discover how our person-centered services 
            can help you or your loved one achieve greater independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Schedule Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;