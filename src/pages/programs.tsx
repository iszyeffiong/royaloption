import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
import servicesImage from '@/assets/services-support.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Services = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const getRowNumber = (index: number) => Math.floor(index / 3);
  const isCardExpanded = (index: number) => getRowNumber(index) === expandedRow;

  const handleCardClick = (index: number) => {
    const rowNumber = getRowNumber(index);
    setExpandedRow(expandedRow === rowNumber ? null : rowNumber);
  };

  const additionalServices = [
    {
      icon: HomeIcon,
      title: 'Community Living (Group Home)',
      image: 'src/assets/about-community.png',
      details: [
        'Royal Options will hire Direct Support Professionals (DSPs) who will help participants integrate and enroll into community leagues, libraries, clubs, and organizations of their choosing for personal growth and development, to learn a variety of skills.'
      ],
      extendedInfo: {
        title: 'Community Living (Group Home)',
        image: 'src/assets/Community Living.png',
        description: ``,
        sections: [
          {
            heading: 'Transforming Community Living',
            content: `Royal Options maintain adequate safety protocols as required to ensure appropriate integration within the community. All safety requirements shall be following the required state requirements without discrimination. To ensure the health and safety of the individuals, each individual will receive an appropriate staffing structure as specified in the individual’s Person-Centered Plan (PCP). The agency’s Program Manager will visit each site at least once weekly and put a phone call through at random to ensure the individuals are always receiving proper supervision`
          },
          {
            heading: 'Our Approach',
            content: `At Royal Options Inc., we take a collaborative approach to Group Living while following State regulations. We work closely with families to ensure integration into the Community for each participant. Our team is committed to providing evidence-based Community living interventions and support, and we stay up-to-date on the latest research and best practices in Group Living.`
          },

        ]
      }
    },
    {
      icon: Heart,
      title: 'Supported Living',
      image: 'src/assets/caregiver-home-support.png',
      details: [
        'Our Supported Living services incorporate safety requirements following the required state regulations without discrimination. This is to ensure the health and safety of the individuals.  Each individual will receive an appropriate staffing structure as specified in the individual’s Person-Centered Plan (PCP).'
      ],
      extendedInfo: {
        title: 'Supported Living',
        image: 'src/assets/caregiver-home-support.png',
        description: ``,
        sections: [
          
          {
            heading: 'We provide Inclusive Respite Care',
            content: `Royal Options will provide qualified staff to deliver respite care and support when the primary caregiver/ family has an unplanned life event, planned activities, or emergency that takes them away from the responsibility of caring for the participant. The respite will be completed through an approved plan for the participant by qualified direct support professionals trained on all person-centered plan needs and medical support needs. The training will be provided by a family member and/or a qualified team member.`
          },
          
          {
              heading: 'Scope of our Respite Care',
              content: [
                'During the approved respite time, the participant will have the opportunity to engage in new opportunities and experiences. Respite can be provided in:',
                '- The participant’s own home.',
                '- The home of a respite care provider.',
                '- A licensed residential site.'
              ]
          }

        ]
      }
    },
    {
      icon: UserCheck,
      title: 'Personal Support',
      image: 'src/assets/nursing-support.png',
      details: [
      ],
      extendedInfo: {
        title: 'Personal Support',
        image: 'src/assets/nursing-support.png',
        sections: [
          {
            heading: 'Our Services at Royal Options Inc.',
            content: `We provide a range of services to support students with diverse learning needs. Our services include individualized education plans, academic tutoring, behavior intervention, and social skills training. We believe that every student deserves access to the resources they need to succeed, and we are here to provide that support.`
          }
        ]
      }
    },
    {
      icon: Stethoscope,
      title: 'Nursing Support Services',
      image: 'src/assets/rop.png',
      details: [
      ],
      extendedInfo: {
        title: 'Nursing Support Services',
        image: 'src/assets/rop.png',
        description: ``,
        sections: [
        
          {
            heading: 'Unique Nursing Services for Participants',
            content: `Royal Options will hire a Registered Nurse RN to provide Nursing Support Services to participants with developmental disabilities. The Registered Nurses must be licensed in the state of Maryland before performing Nursing Consultation, Health Case Management, and Delegation services, based on the participant’s assessed needs.`
          }
        ]
      }
    },
    {
      icon: Clock,
      title: 'Respite Care Services',
      image: 'src/assets/rop3.png',
      details: [
        'Royal Options will provide qualified staff to deliver respite care and support when the primary caregiver/ family has an unplanned life event, planned activities, or emergency that takes them away from the responsibility of caring for the participant.'
      ],
      extendedInfo: {
        title: 'Respite Care Services',
        image: 'src/assets/rop3.png',
        description: `Respite Care offers short-term relief to primary caregivers while ensuring participants continue to receive quality support.`,
        sections: [
          {
            heading: 'Flexible Respite Options',
            content: `We provide planned and emergency respite with staff trained to maintain routines and safety.`
          },
          {
            heading: 'Continuity of Care',
            content: `Respite staff follow the participant’s PCP so routines, medications, and supports remain consistent.`
          }
        ]
      }
    },
    {
      icon: Car,
      title: 'Transportation Services',
      image: 'src/assets/transportation.png',
      details: [
        'Our transportation services are designed specially to improve the participant\'s and the family caregiver’s ability to independently access community activities in response to needs identified in the participant’s Person-Centered Plan (PCP).'
      ],
      extendedInfo: {
        title: 'Transportation Services',
        image: 'src/assets/transportation.png',
        description: `Transportation Services help participants and caregivers reach community activities, appointments, and other destinations safely and reliably.`,
        sections: [
          {
            heading: 'Safety & Accessibility',
            content: `Vehicles and drivers meet safety and licensing requirements and accommodate mobility needs.`
          },
          {
            heading: 'Scheduling & Reliability',
            content: `Routes and schedules are coordinated with the participant’s PCP to ensure timely access to services.`
          },
          {
            heading: 'Community Access',
            content: `We support transport to social, medical, and vocational activities to increase independence.`
          }
        ]
      }
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
          <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-10 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Core Programs</h2>
            <p className="text-xl text-muted-foreground">
              Essential support services tailored to individual needs and goals
            </p>
          </div>  
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-0 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card 
                key={index} 
                className={`text-center shadow-elegant hover:shadow-premium transition-premium group cursor-pointer relative overflow-hidden
                  ${isCardExpanded(index) ? 'ring-2 ring-primary' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="absolute top-2 right-2 bg-white text-primary text-xs py-1 px-2 rounded-full flex items-center gap-1 z-20 shadow-sm">
                  <span>Click to expand</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
                
                <div className="relative h-64 w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="w-12 h-12 mb-3 gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-premium bg-white/90">
                      <service.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-white px-4 text-center">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <CardContent>
                  {isCardExpanded(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="border-t pt-4 mt-4"
                    >
                      <ul className="text-left space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {service.extendedInfo && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              className="mt-4 w-full"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Learn More
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                            <DialogHeader className="sticky top-0 bg-background z-20 pb-4 border-b">
                              <DialogTitle className="text-2xl font-bold text-primary">
                                {service.extendedInfo.title}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6 py-4">
                              <div className="relative h-[250px] rounded-lg overflow-hidden">
                                <img
                                  src={service.extendedInfo.image}
                                  alt={service.title}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              </div>

                              <div className="space-y-6">
                                <p className="text-muted-foreground leading-relaxed">
                                  {service.extendedInfo.description}
                                </p>

                              {service.extendedInfo.sections?.map((section, idx) => (
                                  <div
                                    key={idx}
                                    className={
                                      (section.heading.toLowerCase().includes('health') || section.heading.toLowerCase().includes('safety'))
                                        ? "bg-muted/30 p-4 rounded-lg"
                                        : ""
                                    }
                                  >
                                    <h4 className="font-semibold mb-2">{section.heading}</h4>
                                    {Array.isArray(section.content) ? (
                                      <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                                        {section.content.map((line, i) => (
                                          <ol key={i}>{line}</ol>
                                        ))}
                                      </ol>
                                    ) : (
                                      <p className="text-sm text-muted-foreground">{section.content}</p>
                                    )}
                                  </div>
                                ))}


                                <div className="sticky bottom-0 bg-background pt-4 border-t">
                                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                                    <Link to="/contact">
                                      Contact Us
                                      <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Development Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/src/assets/about-community.png"
                alt="Community Development Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-4xl font-bold text-primary mb-6">Community Development Services</h2>
              <p className="text-lg text-muted-foreground">
                Royal Options will hire Direct Support Professionals (DSPs) that will help Participants integrate and enroll into community leagues, library, clubs, and organizations of their choosing for personal growth and development, to learn a variety of skills alongside other community members. Participants will develop positive relationships with others in the community.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Social Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Supporting participation in community activities and building social connections
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Skill Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Teaching practical life skills and promoting personal growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <div className="py-20 bg-muted/30">
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
      </div>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Support Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a consultation and discover how our person-centered services 
            can help you or your loved one achieve greater independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">
                Schedule Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="default" size="xl" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
