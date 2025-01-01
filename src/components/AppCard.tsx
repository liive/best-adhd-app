import type { App } from '../types/app';

interface AppCardProps {
  app: App;
}

export function AppCard({ app }: AppCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/4 p-6 flex items-center justify-center">
          <img 
            src={app.imageUrl} 
            alt={app.name} 
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-[22%] shadow-lg"
          />
        </div>
        
        <div className="w-full sm:w-3/4 p-4 sm:p-6">
          <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
          <p className="text-sm text-gray-500 mt-1">Productivity</p>
          <p className="mt-3 text-gray-600">{app.description}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {app.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}