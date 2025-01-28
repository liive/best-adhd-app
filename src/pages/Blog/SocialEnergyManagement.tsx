import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { RelatedArticles } from '../../components/ContentSections/RelatedArticles';
import { Battery, Brain, Clock, Users } from 'lucide-react';

export function SocialEnergyManagement() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Managing Social Energy with ADHD | Social Fatigue & ADHD</title>
        <meta 
          name="description" 
          content="Learn how to manage social energy and fatigue with ADHD. Understand why social interactions can be draining and discover effective strategies for maintaining energy levels."
        />
        <link rel="canonical" href="https://bestadhdapp.com/blog/social-energy-management" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-6">Managing Social Energy with ADHD: Understanding and Overcoming Social Fatigue</h1>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700">
              For many women with ADHD, social interactions can be both rewarding and exhausting. Understanding why this happens and having strategies to manage your energy can help you maintain meaningful relationships while protecting your well-being.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Understanding Social Fatigue in ADHD</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6">
                Social fatigue in ADHD is more than just typical introversion or tiredness. It's a complex interplay of cognitive demands, sensory processing, and executive function challenges that can quickly deplete your energy reserves during social interactions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Common Experiences</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Feeling mentally drained after socializing</li>
                    <li className="text-gray-600">Difficulty maintaining conversation focus</li>
                    <li className="text-gray-600">Sensory overwhelm in social settings</li>
                    <li className="text-gray-600">Need for extended recovery time</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Contributing Factors</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Heightened sensory sensitivity</li>
                    <li className="text-gray-600">Executive function demands</li>
                    <li className="text-gray-600">Social masking and camouflaging</li>
                    <li className="text-gray-600">Emotional regulation challenges</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Energy Management Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Battery className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Before Social Events</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-gray-600">Schedule events during peak energy times</li>
                  <li className="text-gray-600">Plan recovery time afterward</li>
                  <li className="text-gray-600">Set clear time boundaries</li>
                  <li className="text-gray-600">Prepare conversation topics</li>
                  <li className="text-gray-600">Choose comfortable environments</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">During Social Events</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-gray-600">Take regular sensory breaks</li>
                  <li className="text-gray-600">Monitor energy levels</li>
                  <li className="text-gray-600">Use grounding techniques</li>
                  <li className="text-gray-600">Stay hydrated and nourished</li>
                  <li className="text-gray-600">Have an exit strategy ready</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Communicating with Others</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900">How to Explain Your Needs</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Clear Communication Examples</h4>
                  <ul className="space-y-3">
                    <li className="text-gray-600">
                      "I really enjoy spending time with you, and I also need some quiet time to recharge afterward."
                    </li>
                    <li className="text-gray-600">
                      "My brain processes social interactions differently, so I might need breaks during longer gatherings."
                    </li>
                    <li className="text-gray-600">
                      "When I leave early, it's not personal - it's about managing my energy levels."
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Setting Healthy Boundaries</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Be honest about your limitations</li>
                    <li className="text-gray-600">Suggest alternative ways to connect</li>
                    <li className="text-gray-600">Share your preferred social settings</li>
                    <li className="text-gray-600">Express appreciation while setting limits</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Neuroscience of Social Fatigue in ADHD</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6">
                Understanding the neurological basis of social fatigue in ADHD can help validate your experiences and inform better management strategies. Recent neuroscience research has revealed several key factors that contribute to social exhaustion in ADHD brains.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Executive Function Impact</h3>
                  <p className="text-gray-600">
                    The prefrontal cortex, responsible for executive functions, works harder in ADHD brains during social interactions. This region manages attention, filters irrelevant information, and coordinates appropriate responses - all simultaneously during conversations. This increased cognitive load leads to faster depletion of mental energy reserves.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Dopamine Dynamics</h3>
                  <p className="text-gray-600">
                    ADHD affects dopamine regulation, which plays a crucial role in motivation and reward processing. While social interactions can initially boost dopamine, maintaining consistent levels during extended social engagement is challenging for ADHD brains, leading to fluctuating energy and attention levels.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Working Memory Overload</h3>
                  <p className="text-gray-600">
                    Social interactions require constant use of working memory to follow conversations, remember context, and maintain appropriate responses. ADHD brains typically have reduced working memory capacity, meaning these tasks require more energy and conscious effort compared to neurotypical brains. This increased cognitive load contributes significantly to social fatigue.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Sensory Processing Differences</h3>
                  <p className="text-gray-600">
                    Many individuals with ADHD experience heightened sensory sensitivity. In social situations, this means your brain is processing not just the conversation, but also background noise, visual stimuli, and other sensory inputs at an intensified level. This multi-channel processing demands substantial energy from your nervous system, accelerating the onset of fatigue.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Working With Your Brain's Natural Patterns</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">
                      <strong>Energy Cycling:</strong> Plan social activities around your natural energy peaks, typically 2-3 hours after waking or after periods of rest
                    </li>
                    <li className="text-gray-600">
                      <strong>Recovery Windows:</strong> Build in 15-30 minute breaks every few hours during social events to allow your executive function systems to reset
                    </li>
                    <li className="text-gray-600">
                      <strong>Sensory Management:</strong> Choose environments that match your sensory preferences and wear noise-canceling headphones when needed
                    </li>
                    <li className="text-gray-600">
                      <strong>Dopamine Support:</strong> Engage in brief physical activity before social events to naturally boost dopamine levels
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="not-prose">
            <RelatedArticles currentPath={location.pathname} />
          </div>
        </article>
      </main>
    </>
  );
}