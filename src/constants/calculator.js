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
      { name: "BMI Calculator", path: "/health/bmi", popular: true },
      { name: "Calorie Intake Calculator", path: "/health/calories", popular: true },
      { name: "BMR Calculator", path: "/health/bmr", popular: false },
      { name: "Body Fat Percentage Calculator", path: "/health/body-fat", popular: false },
      { name: "Pregnancy Due Date Calculator", path: "/health/pregnancy", popular: false },
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
      { name: "Unit Converter", path: "/science/unit", popular: true },
      { name: "Speed, Distance, Time Calculator", path: "/science/sdt", popular: false },
      { name: "Power Consumption Calculator", path: "/science/power", popular: false },
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
      { name: "Percentage Calculator", path: "/math/percentage", popular: true },
      { name: "Simple & Compound Interest Calculator", path: "/math/interest", popular: false },
      { name: "Quadratic Equation Solver", path: "/math/quadratic", popular: false },
      { name: "Area & Perimeter Calculator", path: "/math/geometry", popular: false },
      { name: "Probability Calculator", path: "/math/probability", popular: false },
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
      { name: "Love Compatibility Calculator", path: "/daily/love", popular: false },
      { name: "Tip Calculator", path: "/daily/tip", popular: false },
      { name: "Time Zone Converter", path: "/daily/timezone", popular: false },
    ],
  },
];


export const NAVIGATION_LINKS = [
  { name: "Home", type: "route", href: "/" },
  { name: "About",type: "scroll", href: "about" },
  { name: "Contact",type: "scroll", href: "footer" },
]

export const FOOTER_LINKS = {
  quickAccess: [
    { name: "BMI Calculator", href: "#" },
    { name: "Loan Calculator", href: "#" },
    { name: "Scientific Calculator", href: "#" },
    { name: "Unit Converter", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
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
