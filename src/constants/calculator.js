import { Calculator, TrendingUp, Heart, Calendar, DollarSign, Zap } from "lucide-react"

export const CALCULATOR_CATEGORIES = [
  {
    id: "finance",
    title: "Finance & Business",
    description: "Smart tools to manage money and business",
    icon: DollarSign,
    gradient: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    count: 8,
    subtypes: [
      { name: "Loan EMI Calculator", path: "/finance/loan-emi", popular: true },
      { name: "Mortgage Calculator", path: "/finance/mortage", popular: false },
      { name: "Compound Interest Calculator", path: "/finance/compound-interest", popular: false },
      { name: "Currency Converter", path: "/finance/currency", popular: false },
      { name: "Retirement Savings Calculator", path: "/finance/retirement-saving", popular: false },
      { name: "Budget Planner Calculator", path: "finance/budget-planner", popular: false },
      { name: "Profit Margin Calculator", path: "/finance/profit-margin", popular: false },
      { name: "Tax Calculator", path: "/finance/tax-calculator", popular: false },
    ],
  },
  {
    id: "health",
    title: "Health & Fitness",
    description: "Track your health and body stats",
    icon: Heart,
    gradient: "from-red-400 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    count: 6,
    subtypes: [
      { name: "BMI Calculator", path: "/health/bmi-calculator", popular: true },
      { name: "Calorie Intake Calculator", path: "/health/calorie-intake", popular: true },
      { name: "BMR Calculator", path: "/health/bmr-calculator", popular: false },
      { name: "Body Fat Percentage Calculator", path: "/health/body-fat", popular: false },
      { name: "Pregnancy Due Date Calculator", path: "/health/pregnancy-due-date", popular: false },
      { name: "Water Intake Calculator", path: "/health/water-intake", popular: false },
    ],
  },
  {
    id: "science",
    title: "Science & Engineering",
    description: "Engineering and science-based calculations",
    icon: Zap,
    gradient: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    count: 6,
    subtypes: [
      { name: "Ohm's Law Calculator", path: "/science/ohms-law", popular: true },
      { name: "Physics Force Calculator", path: "/science/force", popular: false },
      { name: "Molarity Calculator", path: "/science/molarity", popular: false },
      { name: "Unit Converter", path: "/science/unit-converter", popular: true },
      { name: "Speed, Distance, Time Calculator", path: "/science/speed-distance-time", popular: false },
      { name: "Power Consumption Calculator", path: "/science/power-consumption", popular: false },
    ],
  },
  {
    id: "math",
    title: "Math",
    description: "General and advanced math calculators",
    icon: TrendingUp,
    gradient: "from-indigo-400 to-indigo-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    count: 5,
    subtypes: [
      { name: "Percentage Calculator", path: "/math/percentage-calculator", popular: true },
      { name: "Simple & Compound Interest Calculator", path: "/math/interest-calculator", popular: false },
      { name: "Quadratic Equation Solver", path: "/math/quadratic-equation", popular: false },
      { name: "Area & Perimeter Calculator", path: "/math/area-perimeter", popular: false },
      { name: "Probability Calculator", path: "/math/probability-calculator", popular: false },
    ],
  },
  {
    id: "daily",
    title: "Daily Life Tools",
    description: "Useful everyday calculators",
    icon: Calendar,
    gradient: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    count: 5,
    subtypes: [
      { name: "Age Calculator", path: "/daily/age", popular: true },
      { name: "Date Difference Calc", path: "/daily/date-difference", popular: true },
      { name: "Love Compatibility Calculator", path: "/daily/love-compatibility", popular: false },
      { name: "Tip Calculator", path: "/daily/tip-calculator", popular: false },
      { name: "Time Zone Converter", path: "/daily/time-zone-calculator", popular: false },
    ],
  },
];


export const NAVIGATION_LINKS = [
  { name: "Home", type: "route", href: "/" },
  { name: "About",type: "scroll", href: "about" },
  { name: "Contact",type: "scroll", href: "footer" },
]

export const FOOTER_LINKS = {
  contact: [
    { name: "Hamza R" },
    { name: "+92 3956732794"  },
    { name: "xyz@gmail.com"  },
    
    
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Privacy Policy", href: "privacy-policy" },
    { name: "Terms And Condition", href: "termsAndCondition" },
  ],
}

export const SITE_CONFIG = {
  name: "CalcPro",
  description: "The ultimate collection of professional calculators. Built for accuracy, designed for simplicity.",
  stats: {
    calculators: "30+",
    users: "1M+",
    availability: "24/7",
  },
}
