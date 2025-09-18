import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Accessibility, Award } from 'lucide-react';
import aboutTeamImage from '@/assets/about-community.png';
import familyConsultationImage from '@/assets/familyconsultation.png';
import caregiverSupportImage from '@/assets/caregiverhomesupport.png';
import FacilitiesGallery from '@/components/FacilitiesGallery';

import facilityExterior from '@/assets/facility-exterior.png';
import facilityCommonRoom from '@/assets/facility-common-room.png';
import facilityKitchen from '@/assets/facility-kitchen.png';
import facilityBedroom from '@/assets/facility-bedroom.png';
import facilityBathroom from '@/assets/facility-bathroom.png';
import facilityActivityRoom from '@/assets/facility-activity-room.png';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Person-Centered',
      description: 'Every support plan is built around individual needs, preferences, and goals for maximum independence.'
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We provide caring, respectful support that honors the dignity and worth of every individual.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in fostering meaningful connections and integration within the broader community.'
    },
    {
      icon: Accessibility,
      title: 'Empowerment',
      description: 'We empower individuals to make their own choices and live their lives to the fullest potential.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years of Service' },
    { number: '200+', label: 'Individuals Supported' },
    { number: '24/7', label: 'Available Support' },
    { number: '98%', label: 'Family Satisfaction' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary mb-6">About Royal Options Inc.</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded on the principles of compassion, empowerment, and community, Royal Options Inc. has been 
              a trusted provider of quality support services for individuals with intellectual and developmental disabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Caregiver Support Image */}
          <div className="text-center mb-16">
            <img 
              src={caregiverSupportImage} 
              alt="Professional caregiving and support" 
              className="rounded-2xl shadow-premium w-full max-w-4xl mx-auto h-96 object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-elegant">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Royal Options Inc. is committed to delivering high-quality services to participants with 
                  intellectual and developmental disabilities, tailored to their preferences, and empowering them to lead fulfilling lives within the community of their choice.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To provide quality services to individuals with intellectual and developmental disabilities in compliance with the regulations to enable them to have full lives in their preferred community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Royal Options Inc. was founded with a simple yet powerful vision: to provide comprehensive, 
                  person-centered support services that empower individuals with intellectual and developmental 
                  disabilities to live their best lives. What started as a commitment to quality care has grown 
                  into a trusted provider of diverse support services.
                </p>
                <p>
                  Our journey has been marked by continuous learning, innovation, and an unwavering commitment 
                  to the individuals and families we serve. We've adapted to changing needs, embraced new 
                  approaches, and continuously evolved our services to deliver exceptional support and outcomes.
                </p>
                <p>
                  Today, we support over 200 individuals across multiple programs, maintaining strong 
                  partnerships with families and caregivers, and achieving a 98% satisfaction rate. Our success 
                  is measured not just in outcomes, but in the trust families place in us and the independence 
                  our participants achieve.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aboutTeamImage} 
                alt="Royal Options Community Support" 
                className="rounded-2xl shadow-premium w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-premium">
                <Award className="h-8 w-8 text-secondary mb-2" />
                <p className="text-sm font-semibold">Quality Care Provider</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The principles that guide everything we do. Our values shape how we support individuals 
                and families on their journey toward greater independence and fulfillment.
              </p>
            </div>
            <div>
              <img 
                src={familyConsultationImage} 
                alt="Family consultation and support planning" 
                className="rounded-2xl shadow-premium w-full h-80 object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-premium transition-premium group">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 gradient-royal rounded-xl flex items-center justify-center group-hover:scale-110 transition-premium">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl opacity-90">
              Delivering measurable results for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FacilitiesGallery */}
      <FacilitiesGallery initialItems={3} showTitle={true} />
      
    </div>
  );
};

export default About;