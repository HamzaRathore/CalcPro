import { Calculator } from "lucide-react"
import { FOOTER_LINKS, SITE_CONFIG } from '../constants/calculator'

const Footer = () =>{
  return (
    <footer name="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">{SITE_CONFIG.description}</p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{SITE_CONFIG.stats.calculators}</div>
                <div className="text-sm text-gray-400">Calculators</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{SITE_CONFIG.stats.users}</div>
                <div className="text-sm text-gray-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{SITE_CONFIG.stats.availability}</div>
                <div className="text-sm text-gray-400">Available</div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-4">Quick Access</h5>
            <ul className="space-y-3 text-gray-400">
              {FOOTER_LINKS.quickAccess.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-4">Company</h5>
            <ul className="space-y-3 text-gray-400">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {SITE_CONFIG.name}. Made with Love for calculation enthusiasts worldwide.</p>
        </div>
      </div>
    </footer>
  )
}


export default Footer