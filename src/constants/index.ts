import {
  BellRing,
  CalendarCheck,
  Car,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  FileDown,
  FileText,
  Fuel,
  Gauge,
  ShieldCheck,
  Trash2,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const appName = "CarCare";
export const supportEmail = "ales.krejzl@gmail.com";

export const navItems = [
  { label: "Features", id: "features" },
  { label: "Demo", id: "demo" },
  { label: "Dashboard", id: "dashboard" },
  { label: "Privacy", id: "compliance" },
  { label: "FAQ", id: "faq" },
];

export const heroPills = [
  "Maintenance logbook",
  "Fuel and mileage history",
  "Service reminders",
  "CSV and PDF exports",
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const features: Feature[] = [
  {
    icon: Wrench,
    title: "Maintenance records",
    text: "Save service dates, costs, notes, mileage and the next due date for each vehicle.",
  },
  {
    icon: Fuel,
    title: "Fuel and mileage",
    text: "Track fill-ups and odometer history so ownership costs stay visible over time.",
  },
  {
    icon: BellRing,
    title: "Smart reminders",
    text: "Schedule local reminders for service windows, mileage intervals and document expiry dates.",
  },
  {
    icon: FileDown,
    title: "Private exports",
    text: "Export vehicle records as CSV or PDF when you need a backup or a handover file.",
  },
];

export type ShowcaseItem = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  preview: "garage" | "costs" | "reminders";
};

export const showcaseItems: ShowcaseItem[] = [
  {
    icon: Car,
    eyebrow: "Garage overview",
    title: "Keep every vehicle in one tidy place",
    description:
      "CarCare is built around a private garage, so daily cars, weekend cars and family vehicles can all keep their own service story.",
    bullets: [
      "Vehicle profile with key documents and notes",
      "Mileage, fuel type, VIN and license plate fields",
      "Quick dashboard for upcoming tasks",
    ],
    preview: "garage",
  },
  {
    icon: CircleDollarSign,
    eyebrow: "Running costs",
    title: "See what ownership really costs",
    description:
      "Fuel, service and mileage records become a practical cost view instead of loose receipts and forgotten notes.",
    bullets: [
      "Monthly spend and service totals",
      "Fuel entries with amount, price and station notes",
      "Exports for accounting, resale or personal records",
    ],
    preview: "costs",
  },
  {
    icon: CalendarCheck,
    eyebrow: "Service planning",
    title: "Catch small tasks before they become expensive",
    description:
      "Use due dates and mileage windows to plan maintenance with enough time instead of waiting for warning lights.",
    bullets: [
      "Date-based and mileage-based service reminders",
      "Document expiry tracking for insurance and checks",
      "Local notifications that can be disabled anytime",
    ],
    preview: "reminders",
  },
];

export const complianceLinks = [
  {
    icon: FileText,
    title: "Privacy Policy",
    text: "A permanent page that explains what the app stores, why it stores it and which infrastructure providers are used.",
    path: "privacy-policy/",
  },
  {
    icon: Trash2,
    title: "Delete Account",
    text: "Clear instructions for deleting a CarCare account and connected garage data from the app or by email request.",
    path: "delete-account/",
  },
  {
    icon: ShieldCheck,
    title: "Google Play ready",
    text: "The landing page keeps privacy, data deletion and support access visible for testers and app store review.",
    path: "#faq",
  },
];

export const faqItems = [
  {
    question: "Is CarCare already available on Google Play?",
    answer:
      "The Android app is currently prepared for Google Play testing. This page is ready to support testers and app review with clear privacy and account deletion links.",
  },
  {
    question: "Can users delete their data?",
    answer:
      "Yes. Users can delete their account and associated app data from the mobile app. If they cannot access the app, they can request deletion by email.",
  },
  {
    question: "Does CarCare sell personal data?",
    answer:
      "No. CarCare does not sell personal information and does not share user data with third parties for advertising.",
  },
  {
    question: "What services are used for app data?",
    answer:
      "CarCare uses Firebase services from Google for authentication and cloud database storage connected to the user account.",
  },
];

export const legalHighlights = [
  {
    icon: ClipboardList,
    title: "User-controlled records",
    text: "Drivers choose what vehicle, fuel, mileage and service details they add.",
  },
  {
    icon: CheckCircle2,
    title: "Clear deletion flow",
    text: "Account deletion removes the user account and app data connected to it.",
  },
  {
    icon: Gauge,
    title: "Practical data only",
    text: "The app focuses on vehicle care, reminders, exports and cost tracking.",
  },
];
