import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Heart, Dumbbell, Coffee, Gamepad, Book, Music, Sun, Users, Check, X, Moon } from 'lucide-react';

interface Activity {
  name: string;
  benefit: string;
}

interface Category {
  category: string;
  icon: any;
  color: string;
  activities: Activity[];
}

export function DopamineMenu() {
  const loadSavedState = () => {
    const saved = localStorage.getItem('dopamineMenuState');
    return saved ? JSON.parse(saved) : {};
  };

  const loadQuestionResponses = () => {
    const saved = localStorage.getItem('dopamineMenuQuestions');
    return saved ? JSON.parse(saved) : {
      energyLevel: '',
      timeAvailable: '',
      location: ''
    };
  };

  const [completedActivities, setCompletedActivities] = useState(loadSavedState());
  const [questionResponses, setQuestionResponses] = useState(loadQuestionResponses());
  const [showQuestions, setShowQuestions] = useState(true);

  useEffect(() => {
    localStorage.setItem('dopamineMenuState', JSON.stringify(completedActivities));
  }, [completedActivities]);

  useEffect(() => {
    localStorage.setItem('dopamineMenuQuestions', JSON.stringify(questionResponses));
  }, [questionResponses]);

  const handleQuestionResponse = (question: string, value: string) => {
    setQuestionResponses(prev => ({
      ...prev,
      [question]: value
    }));
  };

  const questions = [
    {
      id: 'energyLevel',
      question: 'What is your current energy level?',
      options: ['Low', 'Medium', 'High']
    },
    {
      id: 'timeAvailable',
      question: 'How much time do you have available?',
      options: ['5-15 minutes', '15-30 minutes', '30+ minutes']
    },
    {
      id: 'location',
      question: 'Where are you right now?',
      options: ['Home', 'Work/School', 'Outside']
    }
  ];

  const filterActivities = (category: Category) => {
    let filteredActivities = [...category.activities];
    
    console.log('Initial activities:', filteredActivities.length);
    console.log('Current responses:', questionResponses);

    if (category.category.includes("Quick") && questionResponses.timeAvailable === '30+ minutes') {
      return [];
    }
    if (category.category.includes("Longer") && questionResponses.timeAvailable === '5-15 minutes') {
      return [];
    }
    if (category.category.includes("Evening") && questionResponses.location === 'Work/School') {
      return [];
    }

    if (questionResponses.energyLevel) {
      console.log('Filtering by energy:', questionResponses.energyLevel);
      
      if (questionResponses.energyLevel === 'Low') {
        filteredActivities = filteredActivities.filter(activity => {
          const name = activity.name.toLowerCase();
          return !name.includes('exercise') &&
                 !name.includes('workout') &&
                 !name.includes('walk') &&
                 !name.includes('dance') &&
                 !name.includes('sports') &&
                 !name.includes('bike');
        });
      }
      
      if (questionResponses.energyLevel === 'High') {
        filteredActivities = filteredActivities.filter(activity => {
          const name = activity.name.toLowerCase();
          return !name.includes('meditation') &&
                 !name.includes('reading') &&
                 !name.includes('journaling') &&
                 !name.includes('stretching') &&
                 !name.includes('bath');
        });
      }
    }

    if (questionResponses.timeAvailable) {
      console.log('Filtering by time:', questionResponses.timeAvailable);
      
      if (questionResponses.timeAvailable === '5-15 minutes') {
        filteredActivities = filteredActivities.filter(activity => {
          const name = activity.name.toLowerCase();
          return !name.includes('session') &&
                 !name.includes('project') &&
                 !name.includes('routine') &&
                 !name.includes('exercise session') &&
                 !name.includes('organization');
        });
      }
      
      if (questionResponses.timeAvailable === '30+ minutes') {
        filteredActivities = filteredActivities.filter(activity => {
          const name = activity.name.toLowerCase();
          return !name.includes('quick') &&
                 !name.includes('5-minute') &&
                 !name.includes('power pose');
        });
      }
    }

    if (questionResponses.location) {
      console.log('Filtering by location:', questionResponses.location);
      
      if (questionResponses.location === 'Work/School') {
        filteredActivities = filteredActivities.filter(activity => {
          const name = activity.name.toLowerCase();
          return !name.includes('cook') &&
                 !name.includes('shower') &&
                 !name.includes('bath') &&
                 !name.includes('pet') &&
                 !name.includes('home') &&
                 !name.includes('garden');
        });
      }
      
      if (questionResponses.location === 'Outside') {
        filteredActivities = filteredActivities.filter(activity => {
          const name = activity.name.toLowerCase();
          return !name.includes('meditation') &&
                 !name.includes('reading') &&
                 !name.includes('journaling') &&
                 !name.includes('indoor') &&
                 !name.includes('bath') &&
                 !name.includes('cook');
        });
      }
      
      if (questionResponses.location === 'Home') {
        filteredActivities = filteredActivities.filter(activity => {
          const name = activity.name.toLowerCase();
          return !name.includes('hike') &&
                 !name.includes('bike') &&
                 !name.includes('museum');
        });
      }
    }

    console.log('Filtered activities:', filteredActivities.length);
    return filteredActivities;
  };

  const toggleActivity = (categoryIndex: number, activityIndex: number) => {
    const key = `${categoryIndex}-${activityIndex}`;
    setCompletedActivities(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const activities = [
    {
      category: "Quick Boosts (5-15 mins)",
      icon: Coffee,
      color: "text-orange-600",
      activities: [
        { name: "Quick walk around the block", benefit: "Combines exercise and nature exposure" },
        { name: "Dance to favorite song", benefit: "Music + movement increases dopamine" },
        { name: "5-minute meditation", benefit: "Reduces cortisol, supports dopamine regulation" },
        { name: "Quick stretching routine", benefit: "Movement + mindfulness combination" },
        { name: "Pet cuddle session", benefit: "Oxytocin release supports dopamine" },
        { name: "Deep breathing exercises", benefit: "Stress reduction and focus improvement" },
        { name: "Quick journaling", benefit: "Emotional processing and clarity" },
        { name: "Power pose practice", benefit: "Confidence and hormone balance" },
        { name: "Listen to upbeat song", benefit: "Immediate mood elevation" },
        { name: "Quick declutter task", benefit: "Sense of accomplishment" }
      ]
    },
    {
      category: "Medium Activities (15-30 mins)",
      icon: Gamepad,
      color: "text-purple-600",
      activities: [
        { name: "Play a favorite game", benefit: "Gaming provides immediate rewards" },
        { name: "Creative sketching", benefit: "Art activates reward pathways" },
        { name: "Listen to a playlist", benefit: "Music enhances dopamine release" },
        { name: "Cook a simple recipe", benefit: "Completion satisfaction + sensory engagement" },
        { name: "Garden maintenance", benefit: "Nature + accomplishment boost" },
        { name: "Yoga session", benefit: "Mind-body connection and relaxation" },
        { name: "Puzzle solving", benefit: "Cognitive engagement and satisfaction" },
        { name: "Photography walk", benefit: "Creative expression and movement" },
        { name: "DIY craft project", benefit: "Creative satisfaction and focus" },
        { name: "Practice instrument", benefit: "Musical engagement and skill building" }
      ]
    },
    {
      category: "Longer Activities (30+ mins)",
      icon: Sun,
      color: "text-blue-600",
      activities: [
        { name: "Nature walk/hike", benefit: "Exercise + nature + exploration" },
        { name: "Social meetup", benefit: "Social connection boosts dopamine" },
        { name: "Exercise session", benefit: "Sustained dopamine increase" },
        { name: "Creative project", benefit: "Flow state activation" },
        { name: "Learn something new", benefit: "Novel experiences increase dopamine" },
        { name: "Bike riding", benefit: "Sustained exercise and outdoor exposure" },
        { name: "Art museum visit", benefit: "Cultural engagement and walking" },
        { name: "Group sports", benefit: "Exercise and social interaction" },
        { name: "Cooking new recipe", benefit: "Learning and sensory engagement" },
        { name: "Home organization", benefit: "Extended focus and visible results" }
      ]
    },
    {
      category: "Evening Wind-Down",
      icon: Moon,
      color: "text-indigo-600",
      activities: [
        { name: "Gentle stretching", benefit: "Physical relaxation and mindfulness" },
        { name: "Reading fiction", benefit: "Mental escape and relaxation" },
        { name: "Calming playlist", benefit: "Auditory relaxation" },
        { name: "Light therapy", benefit: "Circadian rhythm support" },
        { name: "Aromatherapy", benefit: "Sensory calming" },
        { name: "Gratitude journaling", benefit: "Positive reflection" },
        { name: "Bedtime routine", benefit: "Consistent wind-down signals" },
        { name: "Gentle yoga", benefit: "Physical and mental relaxation" },
        { name: "Meditation", benefit: "Mental clarity and calm" },
        { name: "Bath or shower ritual", benefit: "Temperature regulation and relaxation" }
      ]
    }
  ];

  const foodChoices = [
    {
      category: "Dopamine-Supporting Foods",
      items: [
        { name: "Dark Chocolate", benefit: "Contains tyrosine and tryptophan" },
        { name: "Eggs", benefit: "Rich in tyrosine and protein" },
        { name: "Fatty Fish", benefit: "Omega-3s support dopamine function" },
        { name: "Nuts and Seeds", benefit: "Provide L-phenylalanine" },
        { name: "Green Tea", benefit: "L-theanine supports dopamine" },
        { name: "Bananas", benefit: "Natural source of tyrosine" },
        { name: "Avocados", benefit: "Healthy fats and tyrosine" },
        { name: "Greek Yogurt", benefit: "Protein and probiotics" },
        { name: "Leafy Greens", benefit: "Folate and minerals" },
        { name: "Berries", benefit: "Antioxidants and natural sugars" }
      ]
    }
  ];

  const getCompletedCount = () => {
    return Object.values(completedActivities).filter(Boolean).length;
  };

  const getTotalActivities = () => {
    return activities.reduce((total, category) => total + category.activities.length, 0);
  };

  return (
    <>
      <Helmet>
        <title>ADHD Dopamine Menu | Activities for Natural Dopamine Boost</title>
        <meta 
          name="description" 
          content="Interactive dopamine menu with trackable activities and foods that naturally boost dopamine levels for ADHD management. Science-backed strategies for improving focus and motivation."
        />
        <link rel="canonical" href="https://bestadhdapp.com/blog/dopamine-menu" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-6">ADHD Dopamine Menu: Natural Ways to Boost Your Focus</h1>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Customize Your Menu</h2>
            <div className="space-y-6">
              {questions.map((q) => (
                <div key={q.id} className="space-y-2">
                  <p className="font-medium text-gray-900">{q.question}</p>
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleQuestionResponse(q.id, option)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          questionResponses[q.id as keyof typeof questionResponses] === option
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Understanding Dopamine and ADHD</h2>
            </div>
            <p className="text-gray-700">
              Track your dopamine-boosting activities by clicking the checkboxes. Your progress will be saved automatically.
            </p>
            
            <div className="mt-4 bg-white p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Activities Completed:</span>
                <span className="text-lg font-bold text-blue-600">
                  {getCompletedCount()} / {getTotalActivities()}
                </span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${(getCompletedCount() / getTotalActivities()) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Suggested Activities</h2>
            <div className="space-y-8">
              {activities.map((category, categoryIndex) => {
                const filteredActivities = filterActivities(category);
                return filteredActivities.length > 0 ? (
                  <div key={categoryIndex} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                    </div>
                    <div className="grid gap-4">
                      {filteredActivities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center gap-4">
                          <button
                            onClick={() => toggleActivity(categoryIndex, activityIndex)}
                            className={`w-6 h-6 rounded-md flex items-center justify-center border transition-colors ${
                              completedActivities[`${categoryIndex}-${activityIndex}`]
                                ? 'bg-green-500 border-green-500 text-white'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            {completedActivities[`${categoryIndex}-${activityIndex}`] && (
                              <Check className="w-4 h-4" />
                            )}
                          </button>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{activity.name}</p>
                            <p className="text-sm text-gray-600">{activity.benefit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Nutrition Support</h2>
            {foodChoices.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Tips for Using This Menu</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Match Activity to Energy</p>
                    <p className="text-gray-600">Choose activities that match your current energy and motivation levels</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Build Routines</p>
                    <p className="text-gray-600">Create daily routines incorporating these activities for consistent dopamine support</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Combine Activities</p>
                    <p className="text-gray-600">Stack activities for enhanced benefits (e.g., walking with a friend combines exercise and social connection)</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Scientific Background</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                Research has shown that engaging in rewarding activities and consuming certain nutrients can naturally support dopamine production and function. The activities and foods in this menu are selected based on their evidence-backed ability to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span className="text-gray-600">Increase dopamine synthesis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span className="text-gray-600">Support dopamine receptor function</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span className="text-gray-600">Enhance dopamine signaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span className="text-gray-600">Provide necessary precursors for dopamine production</span>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}