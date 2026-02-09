"use client";
import { useState, useRef } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FaqMain = ({ pageType = "default" }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getContentHeight = (index) => {
    return activeIndex === index ? contentRefs.current[index]?.scrollHeight : 0;
  };

  // Different FAQ data for different pages
  const faqData = {
    default: [
      {
        question: "What Are The Benefits Of International Courier Services?",
        answer:
          "International Courier Services provide a great deal of benefits. They not only make your journey smoother but also help you to deliver your parcel on time along with Freight Services like Handling larger shipments via air, sea, and land.",
      },
      {
        question: "What Is The Cost Of International Courier Services?",
        answer:
          "The cost of International Courier services is based on customer-specific needs and requirements. Distance of Destination, Volume & Weight, Mode of Transport, customs duties and taxes along with additional service can affect the cost. For more details, you can contact the Move It solution.",
      },
      {
        question: "What Are The Common International Courier Services?",
        answer:
          "Move It solution provides International Courier services like Express & Standard Shipping, Door-to-Door Courier, Freight & Bulk Shipping, and Customs Clearance Assistance. For further details contact us at Move It Solution, which is the best international courier company around the globe.",
      },
      {
        question: "Where Can I Get The Best International Courier Services?",
        answer:
          "Move It Solution International provides the best International Courier Services because we are not only efficient but reliable International Courier service providers that cater to the needs of both individuals as well as businesses. Our skilled and knowledgeable staff makes sure that our clients receive their packages without any problems and thus, Move It is the best courier to ship internationally and locally.",
      },
      {
        question: "How to find the best International Courier Services?",
        answer:
          "To find the best International Courier services consider checking their Experience & Global Network. Ask about Insurance & Tracking systems, and also experience their world-class customer service.",
      },
      {
        question: "What should I look for when choosing an International Courier service?",
        answer:
          "Look for their year of Experience, Licensing, and Certifications, and the services that they offer check Insurance Coverage, Customs Expertise, and customer support.",
      },
    ],
    bangalore: [
      {
        question: "Q2: Do you dismantle and reassemble furniture?",
        answer:
          "Yes! Our team carries tool kits to dismantle beds, wardrobes, and dining tables at the origin and reassemble them perfectly at your new home. You don't need to hire a separate carpenter.",
      },
      {
        question: "Q3: Is insurance necessary for local moves?",
        answer:
          "While risk is lower in local moves, we recommend transit insurance for expensive electronics and glass items. For inter-city moves from Bangalore, insurance is highly recommended.",
      },
      {
        question: "Q4: Can you move my car/bike along with household goods?",
        answer:
          "Yes. For inter-city moves (e.g., Bangalore to Delhi), we use specialized Car Carriers to transport your vehicle safely. For bikes, we use foam packing to prevent scratches.",
      },
      {
        question: "Q5: My new apartment doesn't allow Sunday moves. What do I do?",
        answer:
          "This is common in Bangalore. We offer flexible scheduling on weekdays. Just ensure you book your slot 2-3 days in advance to get your preferred timing.",
      },
    ],
    mumbai: [
      {
        question: "Q1: Do you handle moves to Navi Mumbai and Thane?",
        answer:
          "Yes! We provide complete relocation services across Greater Mumbai, including Navi Mumbai and Thane. Our team is well-versed with the entry permits and timings for heavy vehicles in these regions.",
      },
      {
        question: "Q2: Can you dismantle and reassemble modular furniture?",
        answer:
          "Absolutely. Our experienced team carries professional tools to safely dismantle and reassemble all types of furniture, including modular wardrobes and beds, saving you the hassle of hiring a separate carpenter.",
      },
      {
        question: "Q3: Do you provide insurance for local shifting in Mumbai?",
        answer:
          "We highly recommend transit insurance for all moves. Even for local shifting within Mumbai, insurance protects your valuables against unforeseen circumstances during transit.",
      },
      {
        question: "Q4: How do you handle moves in high-rise buildings with elevator restrictions?",
        answer:
          "Mumbai's high-rises often have strict rules. We coordinate with society management in advance to block service elevators and ensure our move happens within the permitted hours to avoid any inconvenience.",
      },
      {
        question: "Q5: Is it possible to move during the monsoon season in Mumbai?",
        answer:
          "Yes, we use waterproof packing materials and closed-container trucks to protect your belongings from heavy rain. We plan the timing carefully to avoid the worst traffic and flooding spots.",
      },
    ],
    electronicCity: [
      {
        question: "Q1: Finding The Best Packers And Movers In Electronic City",
        answer:
          "If you want to find the best packers and movers in Electronic City, search for companies with verified reviews, physical locations, and those that provide written estimates. A reliable mover will not give you a low estimate over the phone without first looking at what you have to move.",
      },
      {
        question: "Q2: Do You Move Between Electronic City Phases 1 and 2?",
        answer:
          "Yes! We do this quite often. Our team is highly experienced in delivering and receiving shipments from both phases of Electronic City, so we are very familiar with the crossing logistics.",
      },
      {
        question: "Q3: Do You Have Additional Charges For Using The Elevated Expressway?",
        answer:
          "If your route requires the Elevated Expressway due to time or safety considerations, the toll cost will likely be added to your bill. However, as transparent packers and movers located within Electronic City, we will always discuss this option with you before we commence transporting your shipment via truck.",
      },
      {
        question: "Q4: Can you pack my vehicle with my personal items?",
        answer:
          "Yes, if you're moving from Electronic City to another state, we'll provide you with a specialized car carrier. If you're moving locally, we recommend that you drive the vehicle; however, if necessary, we can provide a driver.",
      },
      {
        question: "Q5: My community only allows for weekday moves; will it be possible?",
        answer:
          "Yes, we strongly encourage weekday moving since there is usually less traffic during weekdays and the lifts are less crowded. We can arrange your move for whatever day is allowed by your community's policy.",
      },
      {
        question: "Q6: Do you have boxes to use for packing?",
        answer:
          "Yes, we will supply you with everything you need to pack your items. That includes high-quality boxes, bubble wrap, tape, etc. You will not have to purchase anything. Additionally, we can also remove all packing material from your home after you unpack.",
      },
    ],
    jayanagar: [
      {
        question: "Q1: Can you move items via narrow cross streets?",
        answer:
          "Yes. If our large trucks (17ft or 19ft) cannot access a cross street due to parked vehicles (or trees), we will provide a shuttle service. We will use a small Tata Ace (Chota Hathi) to transport your belongings from your home to the larger truck parked on the access road.",
      },
      {
        question: "Q2: Do you offer moving services for large plants?",
        answer:
          "Yes, we move live plants. We will ensure that your live plants are placed in an open area of the truck, so they can receive air and avoid crushing. Please note, we recommend that you lightly water your plants (2 days before the move) prior to loading them onto the truck to reduce the chances of water leaking inside the truck.",
      },
      {
        question: "Q3: Do you work on weekends?",
        answer:
          "Yes. However, the area surrounding the Jayanagar 4th Block and parks is usually congested on the weekends. If your home is located near commercial areas, we suggest moving during the week (Tuesday - Thursday) for a more efficient and smoother moving experience.",
      },
      {
        question: "Q4: Can you remove my split air conditioning unit and water heater?",
        answer:
          "Yes, we can remove those. However, if you want to ensure that the air conditioning unit's refrigeration gas is not lost, we will schedule a specific technician for the removal of those items and the reinstallation in your new house for a nominal additional charge.",
      },
    ],
    koramangala: [
      {
        question: "Q1: Do You Execute Weekend Office Moves?",
        answer:
          "Yes! We schedule office moves for Saturday evenings to avoid any potential Business hour loss.",
      },
      {
        question: "Q2: Are Narrow Lanes an Issue?",
        answer:
          "Yes, we can provide services using a 'Hub and Spoke' model if a standard truck is unable to reach its delivery point.",
      },
      {
        question: "Q3: Will You Dismantle & Reassemble Furniture?",
        answer:
          "Yes! We will always bring the tools necessary to dismantle and reassemble any IKEA or Urban Ladder furniture.",
      },
      {
        question: "Q4: Will My Move Occur During the Rainy Season?",
        answer:
          "Yes! We will always use waterproof wrap for all furniture, and we will never schedule for Transit during heavy rains.",
      },
    ],
    indiranagar: [
      {
        question: "Q1: Does Move It Solutions handle moves in Defence Colony?",
        answer:
          "Yes. Move It Solutions has a lot of experience with high-value moves in Defence Colony and complies with strict noise and parking regulations.",
      },
      {
        question: "Q2: Does Move It Solutions transport large potted plants?",
        answer:
          "Yes, we have many clients who have terrace gardens, and we can move your large, potted plants safely via the truck sections.",
      },
      {
        question: "Q3: Will there be an added fee for utilizing 100 Feet Road?",
        answer:
          "There will be no charge for this route, but we may avoid 100 Feet Road during the busiest hours to expedite your relocation.",
      },
      {
        question: "Q4: Does Move It Solutions store goods during the time it takes to undergo a renovation?",
        answer:
          "Yes, many of the residents who reside in Indiranagar renovate their bungalows, and we have safe means of storing your items while this process is ongoing.",
      },
    ],
    sadashivaNagar: [
      {
        question: "Q1: Will you sign a Non-Disclosure Agreement (NDA)?",
        answer:
          "Yes. For our highest profile clients, we can sign an NDA to ensure the confidentiality of your private information and/or your move's destination.",
      },
      {
        question: "Q2: Do you move large safes and pianos?",
        answer:
          "Yes. We have specialized equipment (hydraulic lifts and piano 'skid' carts) that allow us to safely move large items without causing damage to the flooring.",
      },
      {
        question: "Q3: Do you perform international moving services from Sadashivanagar?",
        answer:
          "Yes. We offer a full service to relocate all your belongings internationally using our door-to-door services, including an export-quality packing process.",
      },
      {
        question: "Q4: Will you work with my interior designer?",
        answer:
          "Yes. We frequently work directly with interior designers to ensure that all furniture is placed as per their clients' design plans.",
      },
    ],
    sarjapur: [
      {
        question: "Q1: Will you move items inside Mega-Townships such as Prestige City?",
        answer:
          "Yes, we specialize in moving items 'internally' inside these kinds of mega-townships, using our small shuttle vehicles.",
      },
      {
        question: "Q2: How do you manage the construction dust that collects on Sarjapur Road?",
        answer:
          "We use several layers of plastic stretch wrap to seal all the items we're moving and protect them from any dust that may accumulate during transportation.",
      },
      {
        question: "Q3: Will you be able to take my items on a busy day when the railway crossing is busy?",
        answer:
          "Yes, if traffic is heavy due to a busy rail crossing, we will plan an alternate route to avoid the crossing by going through Gunjur or Varthur.",
      },
      {
        question: "Q4: Will you take large wardrobes apart?",
        answer:
          "Yes, our moving team carries tools for carpentry and can take apart and reassemble large pieces of furniture that cannot be moved in an elevator.",
      },
    ],
    bellandur: [
      {
        question: "Q1: Do you work during Bellandur's monsoon season?",
        answer:
          "Yes, we utilise closed container trucks and waterproof packing materials to protect your belongings during heavy downpours.",
      },
      {
        question: "Q2: Will you assist me in moving my internet and/or fibre connection?",
        answer:
          "Yes, we take great care in packing your routers and modems. While we do not set up your ISP, we do prepare your hardware so that it can be plugged in at your new location.",
      },
      {
        question: "Q3: Do you provide smaller trucks for moving things through the narrow streets in Yemalur?",
        answer:
          "Yes, we have a fleet of small pickup trucks (Chota Hathi) that can navigate through the narrow village roads where large containers are unable to travel.",
      },
    ],
    dollarsColony: [
      {
        question: "Q1: Do you use special methods for moving heavy safes and gym equipment?",
        answer:
          "Sure, we are using hydraulic equipment that is specially designed for moving safes and gym gear that are heavy, and at the same time protecting the floors.",
      },
      {
        question: "Q2: Can you move large potted plants?",
        answer:
          "Yes, there are often large terrace gardens in bungalows here. We move large pots very carefully in open sections of the truck.",
      },
      {
        question: "Q3: Do you give insurance for valuable art?",
        answer:
          "Yes, we have a comprehensive 'All-Risk' insurance that is specially designed for high-value antiques and art.",
      },
      {
        question: "Q4: Is there a noise restriction?",
        answer:
          "Yes, our crew is not allowed to shout or play music. We work under a 'Silent Move' policy.",
      },
    ],
    kengeri: [
      {
        question: "Q1: Do you serve areas beyond Kengeri, like Bidadi?",
        answer:
          "Yes, we regularly handle moves to Bidadi and Kumbalgodu, leveraging the highway for fast transport.",
      },
      {
        question: "Q2: Is there an extra charge for using NICE Road?",
        answer:
          "The toll charge is usually included in our quote or billed at actuals, but the time saved (and safety gained) is worth every rupee.",
      },
      {
        question: "Q3: Can you move large garden swings?",
        answer:
          "Yes, Kengeri homes often have outdoor swings. We dismantle and reassemble them professionally.",
      },
      {
        question: "Q4: Do you work on holidays?",
        answer:
          "Yes, but we advise against major holidays when Mysore Road traffic is at its peak.",
      },
    ],
    chandigarh: [
      {
        question: "What should I look for when choosing a reliable packer and mover in Chandigarh?",
        answer:
          "There are several important criteria to consider when choosing a reliable packer and mover in Chandigarh. Look for companies that provide verified customer reviews, have a physical presence, and maintain transparent pricing. Move It Solution meets all of these requirements and offers quality service at very competitive rates.",
      },
      {
        question: "How much does it cost to move locally within Chandigarh?",
        answer:
          "The cost for local shifting in Chandigarh is determined by several factors including the volume of your goods (i.e. 1 bedroom vs. 3 bedrooms), the distance between the sectors, and the level of your floor. For an accurate and free estimate of your move, please contact us directly.",
      },
      {
        question: "Can you transport my plants?",
        answer:
          "We can safely transport pots of plants; however, it is important to remember that plants are temperature and light sensitive while in transit. If possible, we recommend that you transport sensitive plants in your own vehicle to avoid this issue.",
      },
      {
        question: "How long will a local move take?",
        answer:
          "Generally speaking, a local move within Tricity (i.e. Chandigarh to Mohali) can be done in one day - from packing to unloading.",
      },
      {
        question: "Do you have insurance?",
        answer:
          "Yes, we have comprehensive transit insurance that covers all of your goods while they are being transported. This insurance provides coverage for any damages resulting from an accident, fire, or theft while in transit.",
      },
    ],
    mohali: [
      {
        question: "What do packs and movers charge for in Mohali?",
        answer:
          "Charges vary depending on the floor level, volume of goods being moved as well as the overall distance being travelled. A local move between one bedroom apartment is typically cheaper than an out-of-state move for three bedroom apartments. Please call us for an exact quote on your specific move.",
      },
      {
        question: "Is transit insurance included in your services?",
        answer:
          "Yes, but transit insurance is optional. However, if you are moving out of the state of Pennsylvania to another state, then we recommend purchasing transit insurance to protect your belongings against accidents caused either through the moving process as well as through many causes of nature.",
      },
      {
        question: "Do you transport cars along with household items?",
        answer:
          "Yes; we are able to transport vehicles along with household items together, or separately depending on both the destination as well as the amount of merchandise being received.",
      },
      {
        question: "How many days advance notice do you require for booking?",
        answer:
          "Local moves within Mohali require two to three days' notice; interstate (out of state) moves require advance notice of seven to ten days prior to the scheduled date of removal.",
      },
      {
        question: "Are you dismantling furniture prior to transporting?",
        answer:
          "Yes; our crews have all necessary tools required to disassemble and reassemble beds, tables and wardrobes properly.",
      },
    ],
    panchkula: [
      {
        question: "How much do Packers and Movers in Panchkula charge for their services?",
        answer:
          "The cost of services is determined by the size and quantity of items being moved, the distance to the new location, the number of floors the goods must be moved through, and any other additional requirements. For a free quote based on your specific needs, please contact us.",
      },
      {
        question: "Do you supply packing materials for my move?",
        answer:
          "Yes, our quote includes the cost of all packing materials such as cardboard boxes, packing tape, bubble wrap, and cardboard to protect your items from damage during transport.",
      },
      {
        question: "Can you move my houseplants?",
        answer:
          "The moving company can move your potting soil and pots, but due to the temperature and light sensitivity of most houseplants, plants should generally be transported in your own personal vehicle if possible.",
      },
      {
        question: "Is my shipment covered by insurance?",
        answer:
          "Optional Transit Insurance protects against accidents, fire, theft, and other events while in transit.",
      },
      {
        question: "When do I need to make my reservation?",
        answer:
          "Local Moves within Panchkula generally require 3-5 days of notice. Inter-city Moves should be booked approximately 10-14 Days beforehand.",
      },
    ],
    himachal: [
      {
        question: "Do you service remote areas of Himachal Pradesh?",
        answer:
          "Yes! We cover the majority of districts in Himachal Pradesh. For Very Remote villages/areas we will probably use smaller feeder vehicles. This is to make sure that the goods can still be accessed.",
      },
      {
        question: "How do you protect my goods from Rain/Snow?",
        answer:
          "We use closed trailer trucks for transporting everyone's goods. Additionally, we also wrap all furniture using plastic sheeting and a water resistant film to guarantee no moisture damage occurs.",
      },
      {
        question: "What is the cost of shifting from Delhi to Shimla?",
        answer:
          "The price is determined by how many boxes you are moving (1 BHK or 2 BHK) and what area of Shimla you’re moving to. For an exact estimate, please get in touch with us, and we will provide you with an estimate free of charge.",
      },
      {
        question: "In the mountains, how many days should you plan to move?",
        answer:
          "In Himachal Pradesh, travel is slower than in the plains; therefore, moving from Chandigarh to Manali can take between one and two days.",
      },
      {
        question: "Is my car going to be transported to Manali safely?",
        answer:
          "Definitely. All cars get picked up and delivered using car carriers (they have hydraulic lifts that pick them up and lower them down) so you don’t have the same wear-and-tear from driving up a mountain.",
      },
    ],
    shimla: [
      {
        question: "Do you offer insurance for goods?",
        answer:
          "Yes, we offer comprehensive transit insurance. While our packing is top-notch, insurance protects you financially against rare unforeseen events like accidents or natural calamities.",
      },
      {
        question: "Can you move my plants?",
        answer:
          "We can move plants, but they are sensitive to temperature changes and lack of light in closed trucks. We recommend moving delicate plants in your personal vehicle if the distance is short.",
      },
      {
        question: "How long does it take to move from Shimla to Delhi?",
        answer:
          "Typically, the transit time is 1-2 days. Loading takes half a day, travel takes about 8-10 hours, and unloading takes another few hours.",
      },
      {
        question: "My house is on a steep slope with stairs. Can you manage?",
        answer:
          "Absolutely. Our labor is physically fit and accustomed to hilly terrain.",
      },
      {
        question: "Do you provide storage for a few weeks?",
        answer:
          "Yes, we have secure warehouse facilities where you can store goods for days, weeks, or months.",
      },
    ],
  };

  // Get the appropriate FAQ data based on pageType
  const accordionData = faqData[pageType] || faqData.default;

  return (
    <div className="accordion px-5 md:px-28 pb-10">
      <h2 className="text-xl sm:text-[24px] md:text-4xl text-center font-semibold leading-[50px] mt-2 mb-6 md:mb-10">
        Frequently <span className="text-[#ff6600]">Asked</span> Questions
      </h2>
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`mb-5 transition-all duration-300 rounded-md ease-in-out ${activeIndex === index
            ? " shadow-[0px_14px_47px_0px_rgba(40,46,58,0.08)]"
            : ""
            } bg-white`}
        >
          <h6
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between items-center text-left p-5 rounded-md cursor-pointer transition-all duration-300 ease-in-out w-full font-[600] text-base md:text-base bg-transparent relative font-[Plus Jakarta Sans] ${activeIndex === index ? "" : "custom-shadow"
              }`}
          >
            {item.question}

            <div className="transition-transform duration-300">
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </h6>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              maxHeight: `${getContentHeight(index)}px`,
            }}
            className={`accordion-content text-[#ff6600] transition-max-height duration-500 ease-in-out overflow-hidden`}
          >
            <p className="text-base pb-5 px-5 text-justify">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqMain;