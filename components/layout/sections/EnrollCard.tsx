import { CalendarClock, BadgeCheck, Presentation } from 'lucide-react'

export default function EnrollCard() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 w-full max-w-sm">
      <h3 className="text-xl font-semibold mb-1">Start learning today!</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Maximize your productivity and apply it in your work to get best results
      </p>

      <p className="font-semibold mb-2">Inclusions</p>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <CalendarClock className="w-4 h-4" /> 2 months
        </li>
        <li className="flex items-center gap-2">
          <BadgeCheck className="w-4 h-4" /> upGrad and Microsoft joint Certification
        </li>
        <li className="flex items-center gap-2">
          <Presentation className="w-4 h-4" /> Masterclasses by Microsoft experts
        </li>
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-black dark:text-white">₹12499</p>
          <p className="text-sm text-gray-500 line-through">₹15499</p>
        </div>
        <span className="bg-cyan-100 text-cyan-700 px-2 py-1 text-xs rounded-md">
          19.4% off
        </span>
      </div>

      <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold">
        Enroll now
      </button>
    </div>
  )
}
