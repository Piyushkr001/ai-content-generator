import { Button } from "@/components/ui/button";


export default function BillingSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Upgrade With Monthly Plan
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Free Plan */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 w-full md:w-80">
          <h3 className="text-lg font-semibold">Free</h3>
          <p className="text-3xl font-bold">₹0<span className="text-sm">/month</span></p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✅ 10,000 Words/Month</li>
            <li>✅ 50+ Content Templates</li>
            <li>✅ Unlimited Download & Copy</li>
            <li>✅ 1 Month of History</li>
          </ul>
          <Button className="mt-8 block rounded-full border border-indigo-600 w-full bg-gray-500 text-white hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring-2">
            Currently Active Plan
          </Button>
        </div>

        {/* Monthly Plan */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 w-full md:w-80 border">
          <h3 className="text-lg font-semibold">Monthly</h3>
          <p className="text-3xl font-bold">₹999 <span className="text-sm">/month</span></p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✅ 100,000 Words/Month</li>
            <li>✅ 50+ Template Access</li>
            <li>✅ Unlimited Download & Copy</li>
            <li>✅ 1 Year of History</li>
          </ul>
          <Button variant={'ghost'} className="mt-8 block rounded-full border border-indigo-600 w-full text-primary hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring-2">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
