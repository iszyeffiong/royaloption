import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import contactImage from '@/assets/contact-office.png';
import familyConsultationImage from '@/assets/family-consultation.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    helpType: '', // 'consultation' or 'inquiries'
    visitType: '', // 'in-person' or 'online'
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset related fields when changing help type
      ...(name === 'helpType' && { 
        visitType: '',
        subject: ''
      })
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      helpType: '',
      visitType: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(202) 400-8404',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: <a href="mailto:info@royaloptionsinc.com" className="text-primary hover:underline" target='_blank'>info@royaloptionsinc.com</a>,
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '33 West Franklin Street, Suite 201, Hagerstown, MD 21740, United States',
      description: 'By appointment only'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',
      description: 'Eastern Standard Time'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to learn more about our support services? Get in touch with our compassionate team of care professionals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 202-400-8404"
                      />
                    </div>
                  </div>
                  
                  {/* Help Type Radio Options - Moved after phone number */}
                  <div className="space-y-2">
                    <Label>How can we help?</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="consultation"
                          name="helpType"
                          value="consultation"
                          checked={formData.helpType === 'consultation'}
                          onChange={handleRadioChange}
                          className="h-4 w-4 text-primary"
                        />
                        <Label htmlFor="consultation" className="cursor-pointer">Book a Consultation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="inquiries"
                          name="helpType"
                          value="inquiries"
                          checked={formData.helpType === 'inquiries'}
                          onChange={handleRadioChange}
                          className="h-4 w-4 text-primary"
                        />
                        <Label htmlFor="inquiries" className="cursor-pointer">Inquiries</Label>
                      </div>
                    </div>
                  </div>

                  {/* Conditional Visit Type Radio Options */}
                  {formData.helpType === 'consultation' && (
                    <div className="space-y-2">
                      <Label>Visit Type</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="in-person"
                            name="visitType"
                            value="in-person"
                            checked={formData.visitType === 'in-person'}
                            onChange={handleRadioChange}
                            className="h-4 w-4 text-primary"
                          />
                          <Label htmlFor="in-person" className="cursor-pointer">In-Person Visit</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="online"
                            name="visitType"
                            value="online"
                            checked={formData.visitType === 'online'}
                            onChange={handleRadioChange}
                            className="h-4 w-4 text-primary"
                          />
                          <Label htmlFor="online" className="cursor-pointer">Online Visit</Label>
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.helpType === 'inquiries' && (
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="How can we help?"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your support needs and how we can help you or your loved one..."
                      className="min-h-32"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to help you and your loved ones access quality support services. Whether you're 
                  seeking group home services, supported living, or nursing support, our experienced team 
                  is ready to create a person-centered care plan that meets your unique needs.
                </p>
                
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-elegant">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 gradient-royal rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{info.details}</p>
                          <p className="text-xs text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-xl shadow-elegant overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192.01667638328422!2d-77.72061703564762!3d39.64370923370297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9ed385c0fffff%3A0x5092d1f1918d52fe!2s33%20W%20Franklin%20St%20%23344%2C%20Hagerstown%2C%20MD%2021740%2C%20USA!5e0!3m2!1sen!2sch!4v1754765851864!5m2!1sen!2sch"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors flex justify-between items-center text-left">
                <span className="text-left">What types of support services do you provide?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer group home services, supported living, nursing support, respite care, 
                personal support, transportation services, and community development programs 
                tailored to individual needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors flex justify-between items-center text-left">
                <span className="text-left">How do you develop support plans?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We use a person-centered approach, conducting thorough assessments to understand 
                individual needs, preferences, and goals. Each support plan is customized and 
                regularly reviewed to ensure effectiveness.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors flex justify-between items-center text-left">
                <span className="text-left">Are your services regulated and licensed?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, Royal Options Inc. is fully licensed and compliant with all applicable state 
                and federal regulations. Our staff are professionally trained and certified in 
                disability support services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors flex justify-between items-center text-left">
                <span className="text-left">Do you work with families and guardians?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! We believe in strong family involvement and maintain open communication 
                with families, guardians, and care coordinators throughout the support process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Contact;