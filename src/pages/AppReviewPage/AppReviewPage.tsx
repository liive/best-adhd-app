import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, Download, ArrowRight, Layout, Brain, Clock, BookOpen, Users, Lightbulb, ExternalLink } from 'lucide-react';
import { apps } from '../../data/apps';
import { FeatureList } from '../../components/FeatureList/FeatureList';

export function AppReviewPage() {
  const { appName } = useParams();
  const app = apps.find(a => a.name.toLowerCase().replace(/\s+/g, '-') === appName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appName]);

  if (!app) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">App not found</h1>
      </main>
    );
  }

  const getAppCategory = (app: typeof apps[0]) => {
    if (app.pros.some(pro => pro.toLowerCase().includes('focus'))) return 'focus';
    if (app.pros.some(pro => pro.toLowerCase().includes('time'))) return 'time';
    if (app.pros.some(pro => pro.toLowerCase().includes('organiz'))) return 'organization';
    return 'other';
  };

  const currentCategory = getAppCategory(app);
  const relatedApps = apps
    .filter(a => 
      a.name !== app.name && 
      getAppCategory(a) === currentCategory
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const categories = [
    {
      name: "Organization Apps",
      icon: Layout,
      path: "/best-adhd-organization-apps",
      matches: app.pros.some(pro => 
        pro.toLowerCase().includes('organiz') || 
        pro.toLowerCase().includes('task')
      )
    },
    {
      name: "Focus Apps",
      icon: Brain,
      path: "/adhd-symptoms-and-apps",
      matches: app.pros.some(pro => 
        pro.toLowerCase().includes('focus') || 
        pro.toLowerCase().includes('distraction')
      )
    },
    {
      name: "Time Management Apps",
      icon: Clock,
      path: "/best-adhd-time-management-apps",
      matches: app.pros.some(pro => 
        pro.toLowerCase().includes('time') || 
        pro.toLowerCase().includes('schedule')
      )
    }
  ].filter(category => category.matches);

  const contextualLinks = [
    {
      title: "Understanding ADHD Symptoms",
      description: "Learn how this app addresses specific ADHD challenges",
      icon: Brain,
      path: "/adhd-symptoms-and-apps"
    },
    {
      title: "Expert Insights",
      description: "Read what ADHD specialists say about digital tools",
      icon: BookOpen,
      path: "/expert-insights"
    },
    {
      title: "User Stories",
      description: "See how others are using this app to manage ADHD",
      icon: Users,
      path: "/testimonials"
    }
  ];

  const getQuickTips = () => {
    switch (currentCategory) {
      case 'focus':
        return [
          "Start with short focus sessions",
          "Use the app's built-in breaks",
          "Track your most productive times",
          "Customize notification settings"
        ];
      case 'time':
        return [
          "Begin with your most important tasks",
          "Use time-blocking features",
          "Set realistic time estimates",
          "Review your time logs regularly"
        ];
      case 'organization':
        return [
          "Start with one project or area",
          "Use tags for easy filtering",
          "Review and adjust categories weekly",
          "Keep task descriptions clear and actionable"
        ];
      default:
        return [
          "Customize settings to your needs",
          "Start with basic features first",
          "Track your usage patterns",
          "Adjust notifications as needed"
        ];
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${app.name} Review 2024 | Best ADHD App Review & Rating`}</title>
        <meta 
          name="description" 
          content={`Detailed review of ${app.name} for ADHD management. Learn about features, pricing, pros and cons, and how it helps with ADHD symptoms.`}
        />
        <link rel="canonical" href={`https://bestadhdapp.com/app-reviews/${appName}`} />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article>
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link to="/" className="hover:text-blue-600">Home</Link>
              </li>
              <li>
                <ArrowRight className="w-4 h-4" />
              </li>
              <li>
                <Link to="/best-adhd-apps-2024" className="hover:text-blue-600">Best Apps 2024</Link>
              </li>
              <li>
                <ArrowRight className="w-4 h-4" />
              </li>
              <li className="text-gray-900 font-medium">{app.name}</li>
            </ol>
          </nav>

          <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <img 
                  src={app.imageUrl} 
                  alt={`${app.name} app interface`}
                  className="w-48 h-48 object-cover rounded-[22%] shadow-lg"
                />
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{app.name} Review</h1>
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    <span className="text-xl font-bold">{app.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{app.description}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-medium">
                    {app.price}
                  </span>
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100"
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>

                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>Download App</span>
                </a>
              </div>
            </div>
          </div>

          <section className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-6">Features Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <FeatureList title="Pros" items={app.pros} type="pros" />
              </div>
              <div>
                <FeatureList title="Cons" items={app.cons} type="cons" />
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold">Quick Tips for Getting Started</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {getQuickTips().map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-medium">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-6">Learn More</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contextualLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <link.icon className="w-5 h-5 text-blue-600" />
                    <h3 className="font-medium text-gray-900">{link.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{link.description}</p>
                  <div className="mt-4 text-blue-600 text-sm font-medium inline-flex items-center gap-1">
                    Learn more
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {relatedApps.length > 0 && (
            <section className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Similar Apps You Might Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedApps.map((relatedApp) => (
                  <Link
                    key={relatedApp.name}
                    to={`/app-reviews/${relatedApp.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block group"
                  >
                    <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-4">
                        <img 
                          src={relatedApp.imageUrl} 
                          alt={relatedApp.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {relatedApp.name}
                          </h3>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm font-medium">{relatedApp.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}