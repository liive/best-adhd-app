import React from 'react';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';

export function UserTestimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Marketing Professional",
      app: "Things 3",
      rating: 5,
      content: "As someone with ADHD, Things 3 has completely transformed how I manage my work projects. The ability to break down complex tasks into smaller, manageable steps has been a game-changer. I've seen a 40% improvement in my project completion rate since starting to use it 6 months ago.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      likes: 234,
      replies: 12,
      verified: true
    },
    {
      name: "David K.",
      role: "Software Engineer",
      app: "Forest",
      rating: 4.5,
      content: "Forest's gamification approach really works for my ADHD brain. Watching the virtual trees grow keeps me motivated during focus sessions. I've managed to increase my productive work time by almost 2 hours per day. The visual reward system is exactly what I needed.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      likes: 187,
      replies: 8,
      verified: true
    },
    {
      name: "Emily R.",
      role: "Graduate Student",
      app: "Structured",
      rating: 5,
      content: "The visual time-blocking in Structured has helped me understand and manage my time better than ever before. I've gone from constantly missing deadlines to submitting assignments early. It's like having a personal assistant who knows exactly how my ADHD mind works.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      likes: 156,
      replies: 15,
      verified: true
    },
    {
      name: "Michael P.",
      role: "High School Teacher",
      app: "Todoist",
      rating: 4.5,
      content: "Teaching with ADHD was challenging until I found Todoist. I use it to organize lesson plans, grade assignments, and track student progress. The natural language input is perfect for quickly capturing tasks between classes. My classroom management has improved significantly.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      likes: 142,
      replies: 9,
      verified: true
    },
    {
      name: "Lisa T.",
      role: "Freelance Designer",
      app: "Focus@Will",
      rating: 4,
      content: "The ADHD-optimized music streams have been crucial for my design work. I used to struggle with background noise, but Focus@Will helps me maintain concentration for hours. My clients have noticed the improvement in my turnaround times.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      likes: 98,
      replies: 6,
      verified: true
    },
    {
      name: "James H.",
      role: "Business Analyst",
      app: "Things 3",
      rating: 5,
      content: "The project management features in Things 3 are perfect for my ADHD. I can capture ideas quickly and organize them later. The ability to view tasks by area of responsibility has helped me maintain better work-life balance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      likes: 165,
      replies: 11,
      verified: true
    },
    {
      name: "Nina C.",
      role: "Healthcare Worker",
      app: "Due",
      rating: 4.5,
      content: "Working shifts with ADHD was a nightmare until I started using Due. The persistent reminders ensure I never miss medication rounds or patient checks. It's simple but incredibly effective for time-sensitive tasks.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      likes: 134,
      replies: 8,
      verified: true
    },
    {
      name: "Robert M.",
      role: "Entrepreneur",
      app: "Mindnode",
      rating: 5,
      content: "Mindnode has revolutionized how I brainstorm and plan business strategies. As someone with ADHD, my ideas often come rapidly and randomly. This app helps me capture and organize them visually. It's been instrumental in launching my latest venture.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      likes: 221,
      replies: 18,
      verified: true
    },
    {
      name: "Sophie L.",
      role: "Content Creator",
      app: "Forest",
      rating: 4.5,
      content: "The social features in Forest are fantastic! Competing with friends to stay focused has turned productivity into a fun challenge. I've reduced my social media usage by 70% and my content quality has improved dramatically.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      likes: 176,
      replies: 14,
      verified: true
    },
    {
      name: "Alex W.",
      role: "Research Assistant",
      app: "Focus@Will",
      rating: 4,
      content: "The different sound types in Focus@Will have been crucial for my research work. I switch between upbeat and calm tracks depending on my task. It's helped me maintain focus during long data analysis sessions.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      likes: 112,
      replies: 7,
      verified: true
    },
    {
      name: "Maria G.",
      role: "Project Manager",
      app: "Structured",
      rating: 5,
      content: "Managing multiple projects with ADHD became manageable with Structured. The time-blocking feature helps me allocate resources effectively and prevent hyperfocus on single tasks. My team has noticed the improvement in project delivery times.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      likes: 198,
      replies: 16,
      verified: true
    },
    {
      name: "Thomas B.",
      role: "Sales Executive",
      app: "Todoist",
      rating: 4.5,
      content: "Todoist's location-based reminders have been a game-changer for my sales calls. I never forget to prepare for meetings or follow up with clients anymore. My sales numbers have increased by 30% since I started using it.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      likes: 145,
      replies: 10,
      verified: true
    },
    {
      name: "Rachel K.",
      role: "Art Therapist",
      app: "Calm",
      rating: 5,
      content: "The ADHD-specific meditations in Calm have helped both me and my clients. I use it for personal regulation and recommend specific exercises to clients. The sleep stories have particularly helped with my racing thoughts at night.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      likes: 167,
      replies: 13,
      verified: true
    },
    {
      name: "Daniel F.",
      role: "Chef",
      app: "Due",
      rating: 4.5,
      content: "Kitchen timing is crucial in my profession, and Due helps me manage multiple dishes simultaneously. The auto-snooze feature ensures I don't miss critical steps in food preparation. It's simple but incredibly effective in a fast-paced environment.",
      image: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9",
      likes: 132,
      replies: 9,
      verified: true
    },
    {
      name: "Emma S.",
      role: "Law Student",
      app: "Mindnode",
      rating: 5,
      content: "Organizing complex legal concepts became much easier with Mindnode. I use it to create visual summaries of cases and connect different areas of law. It's particularly helpful during exam preparation when I need to see the bigger picture.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      likes: 189,
      replies: 15,
      verified: true
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">User Stories</h2>
      
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{testimonial.rating}</span>
                  </div>
                </div>
                
                <div className="mt-2">
                  <span className="text-sm font-medium text-blue-600">
                    Using {testimonial.app}
                  </span>
                </div>
                
                <p className="mt-3 text-gray-600">{testimonial.content}</p>
                
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-gray-700">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{testimonial.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-gray-700">
                    <MessageSquare className="w-4 h-4" />
                    <span>{testimonial.replies}</span>
                  </button>
                  {testimonial.verified && (
                    <span className="text-green-600 text-sm">Verified User</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}