import { Button } from "@/components/ui/button"

export default function AdvertisementPage() {
  return (
    <div className="container mx-auto lg:px-8 px-4 py-8">
      <h1 className="text-4xl font-extrabold tracking-normal mb-8">
        Advertisement Services
      </h1>
      <section className="mb-8">
        <h2 className="text-2xl font-extrabold tracking-normal mb-4">
          Our Advertising Solutions
        </h2>
        <p>
          [Add content about your advertising services, including types of ads,
          platforms, and unique selling points]
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-extrabold tracking-normal mb-4">
          Why Choose Us
        </h2>
        <ul className="list-disc pl-5">
          <li>[Reason 1]</li>
          <li>[Reason 2]</li>
          <li>[Reason 3]</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-extrabold mb-2">Get Started</h2>
        <p>
          Ready to boost your brand&apos;s visibility? Contact us today to
          discuss your advertising needs.
        </p>
        <Button size="lg" variant={"default"} className="mt-8">
          Contact Us
        </Button>
      </section>
    </div>
  )
}
