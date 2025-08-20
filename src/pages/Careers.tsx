import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  GraduationCap, 
  Upload,
  MapPin,
  Clock,
  DollarSign,
  Send
} from 'lucide-react';

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    coverLetter: '',
    consent: false
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobListings = [
    {
      id: 1,
      title: 'Direct Support Professional (DSP)',
      department: 'Community Living',
      location: 'Hagerstown, MD',
      type: 'Full-time',
      salary: '$30,000 - $45,000',
      description: 'Provide direct support to individuals in our group homes and community settings, promoting independence and personal growth.',
      requirements: [
        'High school diploma or equivalent',
        'Valid driver\'s license and clean driving record',
        'CPR and First Aid certification (or willing to obtain)',
        'Strong communication and interpersonal skills'
      ]
    },
    {
      id: 2,
      title: 'Residential Program Manager',
      department: 'Group Home Services',
      location: 'Hagerstown, MD',
      type: 'Full-time',
      salary: '$45,000 - $60,000',
      description: 'Oversee daily operations of residential programs, supervise staff, and ensure quality care delivery.',
      requirements: [
        '3+ years experience in disability services',
        'Bachelor\'s degree in Human Services or related field',
        'Supervisory experience preferred',
        'Knowledge of state regulations and compliance requirements'
      ]
    },
    {
      id: 3,
      title: 'Personal Support Worker',
      department: 'Personal Support Services',
      location: 'Hagerstown, MD',
      type: 'Part-time/Full-time',
      salary: '$28,000 - $40,000',
      description: 'Assist individuals with daily living activities and personal care in their homes.',
      requirements: [
        'Previous caregiving experience preferred',
        'Reliable transportation',
        'Flexibility with scheduling',
        'Compassionate and patient demeanor'
      ]
    },
    {
      id: 4,
      title: 'Community Support Specialist',
      department: 'Community Development',
      location: 'Hagerstown, MD',
      type: 'Full-time',
      salary: '$32,000 - $48,000',
      description: 'Support individuals in community integration activities and skill development programs.',
      requirements: [
        'Experience working with individuals with disabilities',
        'Strong organizational skills',
        'Ability to work independently',
        'Knowledge of community resources and programs'
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries with performance bonuses and equity participation'
    },
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuous learning opportunities and support for professional certifications'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive team environment'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths and opportunities for leadership roles'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Please accept the terms",
        description: "You must consent to data processing to submit your application.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission and file upload
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Application submitted successfully!",
      description: "We'll review your application and get back to you within 5 business days.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      education: '',
      coverLetter: '',
      consent: false
    });
    setResumeFile(null);
    setIsSubmitting(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Build your career with Royal Options Inc. and be part of a team that's shaping the future of finance.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Royal Options?</h2>
            <p className="text-xl text-muted-foreground">
              Join a company that values excellence, innovation, and professional growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-premium transition-premium">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-3 gradient-royal rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Discover exciting career opportunities in finance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobListings.map((job) => (
              <Card key={job.id} className="shadow-elegant hover:shadow-premium transition-premium">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-secondary">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="premium" className="w-full mt-4">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-premium">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Apply for a Position</CardTitle>
              <CardDescription className="text-base">
                Submit your application and join our team of financial professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="position">Position *</Label>
                    <Select onValueChange={(value) => handleSelectChange('position', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobListings.map((job) => (
                          <SelectItem key={job.id} value={job.title}>
                            {job.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level *</Label>
                    <Select onValueChange={(value) => handleSelectChange('experience', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                        <SelectItem value="executive">Executive Level</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education">Education *</Label>
                    <Select onValueChange={(value) => handleSelectChange('education', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="mba">MBA</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume Upload *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-premium">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <Label htmlFor="resume" className="cursor-pointer">
                      {resumeFile ? (
                        <span className="text-primary font-medium">{resumeFile.name}</span>
                      ) : (
                        <>
                          <span className="text-primary font-medium">Click to upload</span>
                          <span className="text-muted-foreground"> or drag and drop</span>
                        </>
                      )}
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                    className="min-h-32"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, consent: !!checked }))
                    }
                    required
                  />
                  <Label htmlFor="consent" className="text-sm">
                    I consent to the processing of my personal data for recruitment purposes *
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  variant="premium" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Submitting Application...'
                  ) : (
                    <>
                      Submit Application <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;