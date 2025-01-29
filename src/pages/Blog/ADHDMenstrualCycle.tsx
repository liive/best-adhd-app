import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Clock, AlertCircle, Heart } from 'lucide-react';

export function ADHDMenstrualCycle() {
  return (
    <>
      <Helmet>
        <title>ADHD in Women and Menstrual Cycle | Hormonal Impact on ADHD</title>
        <meta 
          name="description" 
          content="Understand how menstrual cycles affect ADHD symptoms in women. Learn about hormonal fluctuations, symptom management, and coping strategies throughout your cycle."
        />
        <meta 
          name="keywords" 
          content="adhd in women and menstrual cycle, adhd and menstruation, adhd symptoms during period, adhd hormones women, adhd pms symptoms, adhd period symptoms, adhd menstrual cycle symptoms, adhd hormone fluctuations, adhd estrogen, adhd progesterone"
        />
        <link rel="canonical" href="https://bestadhdapp.com/blog/adhd-menstrual-cycle" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-gray max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-6">ADHD in Women and Menstrual Cycle: Understanding the Connection</h1>
            
            <div className="relative rounded-xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3"
                alt="Woman practicing self-care and mindfulness"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-sm">
                  Understanding the relationship between ADHD and your menstrual cycle can help you better manage symptoms and improve overall well-being
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700">
              The interaction between ADHD and the menstrual cycle is complex and significant. Hormonal fluctuations throughout the month can dramatically impact ADHD symptoms, making it crucial for women to understand this relationship for better symptom management and self-care.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Menstrual Cycle and ADHD Symptoms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Cycle Phases and Symptoms</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                    <span>Menstrual Phase: Often increased ADHD symptoms due to low estrogen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2"></span>
                    <span>Follicular Phase: Improving focus as estrogen rises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                    <span>Ovulation: Peak cognitive performance with high estrogen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <span>Luteal Phase: Increasing symptom severity as hormones decline</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Hormonal Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <span>Estrogen affects dopamine production and regulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <span>Progesterone can impact medication effectiveness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <span>Hormonal fluctuations influence emotional regulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <span>PMS can amplify existing ADHD symptoms</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Brain,
                  phase: "Menstrual Phase",
                  days: "Days 1-5",
                  symptoms: "Increased difficulty with focus and organization"
                },
                {
                  icon: Clock,
                  phase: "Follicular Phase",
                  days: "Days 6-14",
                  symptoms: "Improving concentration and energy levels"
                },
                {
                  icon: Heart,
                  phase: "Ovulation",
                  days: "Day 14-16",
                  symptoms: "Peak cognitive performance and motivation"
                },
                {
                  icon: AlertCircle,
                  phase: "Luteal Phase",
                  days: "Days 17-28",
                  symptoms: "Increasing ADHD symptoms and emotional sensitivity"
                }
              ].map((phase, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <phase.icon className="w-5 h-5 text-blue-600" />
                    <h4 className="font-medium">{phase.phase}</h4>
                  </div>
                  <p className="text-sm text-blue-600 mb-2">{phase.days}</p>
                  <p className="text-sm text-gray-600">{phase.symptoms}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Managing ADHD Throughout Your Cycle</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-4">Tracking and Planning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <span>Use cycle tracking apps to predict symptom changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <span>Schedule important tasks during high-energy phases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <span>Build in extra support during challenging phases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    <span>Monitor medication effectiveness throughout cycle</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-4">Self-Care Strategies</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                    <span>Adjust exercise routines based on energy levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                    <span>Prioritize sleep during high-symptom phases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                    <span>Maintain consistent nutrition and hydration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                    <span>Practice stress-reduction techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Working with Healthcare Providers</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-xl mb-4">Discussion Points</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                      <span>Medication adjustments throughout cycle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                      <span>Hormonal treatment options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                      <span>Symptom tracking and patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                      <span>Integrated treatment approaches</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-4">Treatment Considerations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></span>
                      <span>Hormone-sensitive medication timing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></span>
                      <span>Supplementary support during PMS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></span>
                      <span>Regular treatment plan reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2"></span>
                      <span>Monitoring side effects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <ul className="space-y-4">
                <li>
                  <a href="/adhd-symptoms-and-apps" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    <span>ADHD Symptom Management Tools</span>
                  </a>
                </li>
                <li>
                  <a href="/blog/adhd-women-symptoms" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    <span>Understanding ADHD in Women</span>
                  </a>
                </li>
                <li>
                  <a href="/expert-insights" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>Expert Insights on Hormones and ADHD</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}