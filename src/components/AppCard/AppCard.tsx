import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeatureList } from '../FeatureList/FeatureList';
import type { App } from '../../types/app';

interface AppCardProps {
  app: App;
  rank: number;
  isLink?: boolean;
}

export function AppCard({ app, rank, isLink = false }: AppCardProps) {
  const CardContent = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/4 p-6 flex items-center justify-center relative">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32">
            <img 
              src={app.imageUrl} 
              alt={app.name} 
              className="w-full h-full object-cover rounded-[22%] shadow-lg"
            />
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 sm:hidden">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold">{rank}</span>
              </div>
            </div>
            <div className="hidden sm:block absolute -right-10 top-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold">{rank}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full sm:w-3/4 p-4 sm:p-6">
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
              <div>
                <Link 
                  to={`/app-reviews/${app.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {app.name}
                </Link>
                <p className="text-sm text-gray-500 mt-1">Productivity</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                  {app.price}
                </span>
              </div>
            </div>
            <p className="mt-3 text-gray-600 text-sm sm:text-base">{app.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <FeatureList title="Pros" items={app.pros} type="pros" />
            </div>
            <div>
              <FeatureList title="Cons" items={app.cons} type="cons" />
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-[#0066CC] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full text-sm sm:text-base font-medium"
              >
                <Download className="w-4 h-4" />
                <span>View in App Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <CardContent />;
}