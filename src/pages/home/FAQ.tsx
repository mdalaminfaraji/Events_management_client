import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-12">Frequently Asked Questions</h1>
      <Accordion
        type="single"
        collapsible
        className="w-full container bg-opacity-70"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What types of events do you specialize in managing?
          </AccordionTrigger>
          <AccordionContent>
            We specialize in managing a wide range of events including weddings,
            corporate events, organization events, conferences, seminars,
            product launches, and more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How do you ensure the success of a wedding event?
          </AccordionTrigger>
          <AccordionContent>
            We ensure the success of a wedding event by offering personalized
            event planning services tailored to the couple's preferences,
            meticulous attention to detail, collaborating with reputable
            vendors, and maintaining clear communication throughout the planning
            process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What services do you offer for corporate events?
          </AccordionTrigger>
          <AccordionContent>
            For corporate events, we offer event planning and coordination,
            venue selection, audiovisual equipment rental, catering services,
            corporate branding and signage, attendee registration, and onsite
            event management to ensure a seamless experience for all
            participants.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How far in advance should I book your services for my event?
          </AccordionTrigger>
          <AccordionContent>
            It's recommended to book our services as early as possible to secure
            your preferred event date and ensure ample time for planning and
            coordination. Ideally, booking at least 6-12 months in advance is
            advisable, especially for weddings and large-scale corporate events.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            What is your cancellation or rescheduling policy?
          </AccordionTrigger>
          <AccordionContent>
            Our cancellation or rescheduling policy varies depending on the type
            of event and the terms outlined in our service agreement. We
            understand that unforeseen circumstances may arise, and we work with
            our clients to find mutually beneficial solutions in such
            situations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
