import { useState } from "react";
import { CampusButton } from "@/components/CampusButton";
import InfoCard from "@/components/InfoCard";
import AIChat from "@/components/AIChat";
import { Home, Calendar, Building, PartyPopper, UtensilsCrossed } from "lucide-react";

type Page = 'home' | 'schedules' | 'facilities' | 'events' | 'services';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto p-5 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 max-w-7xl">
        {/* Main Content */}
        <div className="glass-card rounded-3xl p-8 lg:p-10 fade-in">
          {/* Navigation */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <CampusButton
              variant={currentPage === 'home' ? 'default' : 'outline'}
              onClick={() => navigateToPage('home')}
              className="flex items-center gap-2"
            >
              <Home size={18} />
              Home
            </CampusButton>
            <CampusButton
              variant={currentPage === 'schedules' ? 'default' : 'outline'}
              onClick={() => navigateToPage('schedules')}
              className="flex items-center gap-2"
            >
              <Calendar size={18} />
              Schedules
            </CampusButton>
            <CampusButton
              variant={currentPage === 'facilities' ? 'default' : 'outline'}
              onClick={() => navigateToPage('facilities')}
              className="flex items-center gap-2"
            >
              <Building size={18} />
              Facilities
            </CampusButton>
            <CampusButton
              variant={currentPage === 'events' ? 'default' : 'outline'}
              onClick={() => navigateToPage('events')}
              className="flex items-center gap-2"
            >
              <PartyPopper size={18} />
              Events
            </CampusButton>
            <CampusButton
              variant={currentPage === 'services' ? 'default' : 'outline'}
              onClick={() => navigateToPage('services')}
              className="flex items-center gap-2"
            >
              <UtensilsCrossed size={18} />
              Services
            </CampusButton>
          </div>

          {/* Page Content */}
          {currentPage === 'home' && <HomePage onNavigate={navigateToPage} />}
          {currentPage === 'schedules' && <SchedulesPage onNavigate={navigateToPage} />}
          {currentPage === 'facilities' && <FacilitiesPage onNavigate={navigateToPage} />}
          {currentPage === 'events' && <EventsPage onNavigate={navigateToPage} />}
          {currentPage === 'services' && <ServicesPage onNavigate={navigateToPage} />}
        </div>

        {/* AI Chat Sidebar */}
        <AIChat />
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <div className="space-y-8">
    {/* Header */}
    <div className="text-center space-y-4">
      <div className="genie-glow genie-bounce w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl cursor-pointer">
        🧞
      </div>
      <h1 className="text-5xl font-bold text-gradient-primary cursor-pointer">
        CampusGenie
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Your Intelligent Campus Companion - Making Campus Life Magical ✨<br />
        Discover, Connect, Excel - All in One Place!
      </p>
    </div>

    {/* Quick Links */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InfoCard
        title="Academic Schedules"
        icon="📅"
        onClick={() => onNavigate('schedules')}
      >
        <p className="text-muted-foreground">
          View class timings, exam dates, academic calendar, and important deadlines
        </p>
      </InfoCard>
      
      <InfoCard
        title="Campus Facilities"
        icon="🏢"
        onClick={() => onNavigate('facilities')}
      >
        <p className="text-muted-foreground">
          Explore library, sports complex, labs, and all campus infrastructure
        </p>
      </InfoCard>
      
      <InfoCard
        title="Events & Activities"
        icon="🎉"
        onClick={() => onNavigate('events')}
      >
        <p className="text-muted-foreground">
          Discover upcoming events, workshops, competitions, and student activities
        </p>
      </InfoCard>
      
      <InfoCard
        title="Campus Services"
        icon="🍽️"
        onClick={() => onNavigate('services')}
      >
        <p className="text-muted-foreground">
          Access dining, health, administrative, and support services information
        </p>
      </InfoCard>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <InfoCard title="Quick Stats" icon="📊">
        <div className="space-y-2 text-sm">
          <div><strong>Active Students:</strong> 15,000+</div>
          <div><strong>Expert Faculty:</strong> 800+</div>
          <div><strong>Academic Programs:</strong> 120+</div>
          <div><strong>Campus Area:</strong> 250 Acres</div>
          <div><strong>Research Labs:</strong> 50+</div>
        </div>
      </InfoCard>
      
      <InfoCard title="Achievements" icon="🏆">
        <div className="space-y-2 text-sm">
          <div><strong>NAAC Rating:</strong> A++ Grade</div>
          <div><strong>NIRF Ranking:</strong> Top 25 in India</div>
          <div><strong>Placement Rate:</strong> 95%+</div>
          <div><strong>Research Papers:</strong> 500+ Published</div>
          <div><strong>Industry Partners:</strong> 200+</div>
        </div>
      </InfoCard>
    </div>
  </div>
);

// Schedule Page Component
const SchedulesPage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <div className="space-y-8">
    <div className="flex items-center gap-4 mb-8">
      <CampusButton variant="outline" onClick={() => onNavigate('home')}>
        ← Back to Home
      </CampusButton>
    </div>
    
    <div className="text-center space-y-4 mb-8">
      <h2 className="text-3xl font-bold text-primary">📚 Academic Schedules</h2>
      <p className="text-muted-foreground">Complete overview of academic schedules, exam dates, and important deadlines</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <InfoCard title="Daily Class Schedule" icon="🕘">
        <div className="space-y-4">
          <div className="bg-white/90 p-4 rounded-lg border-l-4 border-primary">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Period 1 - Morning Session</span>
              <span className="text-primary text-sm">8:00 AM - 9:30 AM</span>
            </div>
            <p className="text-sm text-muted-foreground">Core subjects: Mathematics, Physics, Chemistry, Computer Science</p>
          </div>
          <div className="bg-white/90 p-4 rounded-lg border-l-4 border-primary">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Period 2 - Mid Morning</span>
              <span className="text-primary text-sm">9:45 AM - 11:15 AM</span>
            </div>
            <p className="text-sm text-muted-foreground">Laboratory sessions: Programming Labs, Science Labs</p>
          </div>
          <div className="bg-white/90 p-4 rounded-lg border-l-4 border-primary">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Period 3 - Pre-Lunch</span>
              <span className="text-primary text-sm">11:30 AM - 1:00 PM</span>
            </div>
            <p className="text-sm text-muted-foreground">Electives: Language Studies, Arts, Business Management</p>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Examination Schedule" icon="📝">
        <div className="space-y-4">
          <div className="bg-white/90 p-4 rounded-lg border-l-4 border-primary">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Mid-Term Examinations</span>
              <span className="text-primary text-sm">Oct 15-25, 2025</span>
            </div>
            <p className="text-sm text-muted-foreground">All departments • Hall tickets required • 30% weightage</p>
          </div>
          <div className="bg-white/90 p-4 rounded-lg border-l-4 border-primary">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Final Examinations</span>
              <span className="text-primary text-sm">Dec 10-20, 2025</span>
            </div>
            <p className="text-sm text-muted-foreground">Comprehensive exams • 60% weightage • Multiple sessions</p>
          </div>
        </div>
      </InfoCard>
    </div>
  </div>
);

// Facilities Page Component  
const FacilitiesPage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <div className="space-y-8">
    <div className="flex items-center gap-4 mb-8">
      <CampusButton variant="outline" onClick={() => onNavigate('home')}>
        ← Back to Home
      </CampusButton>
    </div>
    
    <div className="text-center space-y-4 mb-8">
      <h2 className="text-3xl font-bold text-primary">🏢 Campus Facilities</h2>
      <p className="text-muted-foreground">Explore our world-class campus infrastructure and facilities</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <InfoCard title="Central Library" icon="📚">
        <div className="space-y-2 text-sm">
          <div><strong>Hours:</strong> 8:00 AM - 10:00 PM (Mon-Sat)</div>
          <div><strong>Capacity:</strong> 500 students</div>
          <div><strong>Books:</strong> 50,000+ volumes</div>
          <div><strong>Digital Resources:</strong> Available 24/7</div>
          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Open</span>
        </div>
      </InfoCard>

      <InfoCard title="Sports Complex" icon="🏃‍♂️">
        <div className="space-y-2 text-sm">
          <div><strong>Facilities:</strong> Gym, Pool, Courts</div>
          <div><strong>Hours:</strong> 6:00 AM - 10:00 PM</div>
          <div><strong>Membership:</strong> Free for students</div>
          <div><strong>Trainers:</strong> Professional coaches available</div>
          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Open</span>
        </div>
      </InfoCard>
    </div>
  </div>
);

// Events Page Component
const EventsPage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <div className="space-y-8">
    <div className="flex items-center gap-4 mb-8">
      <CampusButton variant="outline" onClick={() => onNavigate('home')}>
        ← Back to Home
      </CampusButton>
    </div>
    
    <div className="text-center space-y-4 mb-8">
      <h2 className="text-3xl font-bold text-primary">🎉 Events & Activities</h2>
      <p className="text-muted-foreground">Discover exciting events, workshops, and student activities</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <InfoCard title="Upcoming Events" icon="📅">
        <div className="space-y-4">
          <div className="bg-white/90 p-4 rounded-lg border-l-4 border-primary">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Tech Fest 2025</span>
              <span className="text-primary text-sm">March 15-17</span>
            </div>
            <p className="text-sm text-muted-foreground">Annual technology festival with competitions and workshops</p>
          </div>
          <div className="bg-white/90 p-4 rounded-lg border-l-4 border-primary">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Cultural Night</span>
              <span className="text-primary text-sm">January 25</span>
            </div>
            <p className="text-sm text-muted-foreground">Showcase of music, dance, and cultural performances</p>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Sports Events" icon="🏆">
        <div className="space-y-4">
          <div className="bg-white/90 p-4 rounded-lg border-l-4 border-primary">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Annual Sports Meet</span>
              <span className="text-primary text-sm">February 10-12</span>
            </div>
            <p className="text-sm text-muted-foreground">Inter-department sports competition and awards ceremony</p>
          </div>
        </div>
      </InfoCard>
    </div>
  </div>
);

// Services Page Component
const ServicesPage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <div className="space-y-8">
    <div className="flex items-center gap-4 mb-8">
      <CampusButton variant="outline" onClick={() => onNavigate('home')}>
        ← Back to Home
      </CampusButton>
    </div>
    
    <div className="text-center space-y-4 mb-8">
      <h2 className="text-3xl font-bold text-primary">🍽️ Campus Services</h2>
      <p className="text-muted-foreground">Access dining, health, and administrative services</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <InfoCard title="Dining Services" icon="🍽️">
        <div className="space-y-2 text-sm">
          <div><strong>Main Cafeteria:</strong> 7:00 AM - 9:00 PM</div>
          <div><strong>Coffee Corner:</strong> Open 24/7</div>
          <div><strong>Food Court:</strong> 11:00 AM - 10:00 PM</div>
          <div><strong>Today's Special:</strong> Butter Chicken & Biryani</div>
          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Open</span>
        </div>
      </InfoCard>

      <InfoCard title="Health Services" icon="🏥">
        <div className="space-y-2 text-sm">
          <div><strong>Medical Center:</strong> 24/7 Emergency</div>
          <div><strong>Regular Hours:</strong> 8:00 AM - 6:00 PM</div>
          <div><strong>Services:</strong> General checkup, First aid</div>
          <div><strong>Pharmacy:</strong> Basic medicines available</div>
          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Available</span>
        </div>
      </InfoCard>
    </div>
  </div>
);

export default Index;
