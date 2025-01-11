export function generateFAQSchema() {
  return {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the best ADHD apps for time management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The top ADHD time management apps include Structured, Due, and Forest. These apps offer features like visual time-blocking, persistent reminders, and focus tracking to help manage ADHD-related time blindness."
        }
      },
      {
        "@type": "Question",
        "name": "Are ADHD apps worth the investment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ADHD apps can be worth the investment. Research shows that digital tools can improve task completion rates by up to 45% and reduce stress levels by 38% when used consistently as part of an ADHD management strategy."
        }
      },
      {
        "@type": "Question",
        "name": "Which ADHD apps are best for students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For students with ADHD, apps like Forest for focus, Mindnode for visual note-taking, and Structured for schedule management are particularly effective. These apps help with study sessions, assignment planning, and deadline management."
        }
      }
    ]
  };
}