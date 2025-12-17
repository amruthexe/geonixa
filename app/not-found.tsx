import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-16 text-center sm:px-6 lg:px-8">
      {/* Visual Element - Abstract Shapes (CSS only to avoid dep issues) */}
      <div className="relative mb-8 h-40 w-40">
        <div className="absolute left-0 top-0 h-full w-full rounded-full bg-orange-100 opacity-50 blur-xl"></div>
        <div className="absolute right-0 bottom-0 h-32 w-32 rounded-full bg-black/5 opacity-20 blur-xl"></div>
        
        {/* 404 Number */}
        <div className="relative flex h-full w-full items-center justify-center">
             <h1 className="text-9xl font-black tracking-tighter text-orange-600">
            404
          </h1>
        </div>
      </div>

      <div className="z-10 max-w-lg space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Page not found
          </h2>
          <p className="text-lg text-gray-600">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">
              &larr;
            </span>
            Return Home
          </Link>
          
          <Link
            href="/support"
             className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-3 text-sm font-medium text-black transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2"
          >
            Contact Support
          </Link>
        </div>
      </div>

      {/* Footer minimal decor */}
      <div className="fixed bottom-0 left-0 h-2 w-full bg-gradient-to-r from-orange-400 via-orange-600 to-black"></div>
    </div>
  )
}
