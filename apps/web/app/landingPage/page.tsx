import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section
        id="getting-started"
        className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-blue-500 to-green-500"
      >
        <h1 className="text-4xl font-bold mb-4">
          Simplify Employee Shift Management
        </h1>
        <p className="text-xl mb-6">
          Manage shifts, track productivity, and optimize your workforce with
          ease using TeamShift.
        </p>
        <div className="space-x-4">
          <Button variant="solid" className="px-6 py-3">
            Get Started Free
          </Button>
          <Button variant="outline" className="px-6 py-3">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Powerful Features to Manage Your Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">How TeamShift Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 md:px-16">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle>Step {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md">
              <CardContent>
                <p className="italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-bold">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Choose the Plan that Fits Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16">
          {pricing.map((plan, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-2xl mb-4">{plan.price}</p>
                <ul className="list-disc list-inside text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-blue-500 to-green-500">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Shift Management?
        </h2>
        <Button variant="solid" className="px-6 py-3">
          Get Started Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p>© 2024 TeamShift. All rights reserved.</p>
        <p className="mt-4">Privacy Policy | Terms of Service | Contact Us</p>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Shift Scheduling",
    description: "Easily create, assign, and manage shifts.",
  },
  {
    title: "Team Management",
    description: "Organize employees into teams with ease.",
  },
  {
    title: "Notifications",
    description: "Send real-time notifications for shift updates.",
  },
];

const steps = [
  "Sign up and create your account.",
  "Set up your teams and start scheduling shifts.",
  "Let employees view and manage their shifts.",
  "Track performance with data insights.",
];

const testimonials = [
  {
    quote: "TeamShift has made scheduling so much easier!",
    author: "Jane D., Operations Manager",
  },
  {
    quote: "Shift swapping saved us a lot of time.",
    author: "Mark R., HR Manager",
  },
];

const pricing = [
  {
    title: "Basic",
    price: "$49/month",
    features: ["Shift Scheduling", "Team Management", "Basic Reporting"],
  },
  {
    title: "Pro",
    price: "$99/month",
    features: ["Advanced Analytics", "Shift Swapping", "Priority Support"],
  },
];
