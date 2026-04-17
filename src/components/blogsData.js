import BlogImage1 from "../assets/blogs/blog-1.png";
import BlogImage2 from "../assets/blogs/blog-2.png";
import BlogImage3 from "../assets/blogs/blog-3.png";
import BlogImage4 from "../assets/blogs/blog-4.png";
import BlogImage5 from "../assets/blogs/blog-5.png";
import BlogImage6 from "../assets/blogs/blog-6.png";
import BlogImage7 from "../assets/blogs/blog-7.png";
import BlogImage8 from "../assets/blogs/blog-8.png";
import BlogImage9 from "../assets/blogs/blog-9.png";
import UserIcon from "../assets/blogs/user-icon.png";
import Blog1Author from "../assets/blogs/blog1-icon.jpg";
import Blog2Author from "../assets/blogs/blog2-icon.jpg";
import Blog3Author from "../assets/blogs/blog3-icon.jpg";
import Blog4Author from "../assets/blogs/blog4-icon.jpg";
import Blog5Author from "../assets/blogs/blog5-icon.jpg";
import BlogBanner from "../assets/blogs/blogbanner.jpeg";

export const blogs = [
  {
    id: 1,
    image: BlogBanner,
    coverImage: BlogImage2,
    title:
      "The Existing Middle East Crisis and Its Impact on Pakistan's Economy",
    category: "Technology",
    author: {
      name: "Wasim Iqbal",
      avatar: UserIcon,
    },
    date: "April 14, 2026",
    content: [
      {
        type: "paragraph",
        text: "The ongoing crisis in the Middle East has created serious economic uncertainty across the world. For Pakistan, the stakes are even higher because the country is deeply connected to the Gulf region through energy imports, overseas employment, remittances, trade, and diplomatic ties. Any prolonged instability in the Middle East does not remain a distant geopolitical issue for Pakistan. It quickly turns into an economic challenge at home.",
      },
      {
        type: "paragraph",
        text: "Pakistan depends heavily on the Gulf states such as Saudi Arabia, the United Arab Emirates (UAE), Qatar, Kuwait, Bahrain, and Oman. Millions of Pakistanis live and work in these countries. Pakistan also imports a large share of its oil and LNG from the same region. Because of this dependence, any conflict involving oil routes, shipping lanes, or Gulf economies can directly affect Pakistan's growth, inflation, foreign reserves, and employment outlook.",
      },
      {
        type: "link",
        text: "Reuters — IMF cuts emerging economies growth estimate as war darkens outlook",
        href: "https://www.reuters.com/world/asia-pacific/imf-cuts-emerging-economies-growth-estimate-war-darkens-outlook-2026-04-14/",
      },

      // ─── SECTION 1 ───────────────────────────────────────────
      {
        type: "heading",
        text: "Why the Middle East Matters So Much to Pakistan",
      },
      {
        type: "paragraph",
        text: "The Middle East is not just an important region for Pakistan. It is one of Pakistan's key economic lifelines. Pakistan's relationship with Gulf countries rests on five major pillars:",
      },
      {
        type: "ul",
        items: [
          "Remittances from overseas workers",
          "Oil and gas imports",
          "Trade and exports",
          "Financial assistance and deposits",
          "Strategic and political cooperation",
        ],
      },
      {
        type: "paragraph",
        text: "Recent reports show Pakistan is expecting around $41.5 billion in remittances this fiscal year, which highlights how central overseas income has become to economic stability.",
      },
      {
        type: "link",
        text: "Reuters — Pakistan says all options on table for funding",
        href: "https://www.reuters.com/world/asia-pacific/pakistan-says-all-options-table-funding-weighs-strategic-fuel-reserve-2026-04-14/",
      },
      {
        type: "paragraph",
        text: "This means that when the Gulf region faces war, slower growth, or business disruption, Pakistan feels the shock immediately.",
      },

      // ─── SECTION 2 ───────────────────────────────────────────
      {
        type: "heading",
        text: "Immediate Economic Impact on Pakistan",
      },
      {
        type: "subheading",
        text: "1. Higher Oil Prices and Inflation",
      },
      {
        type: "paragraph",
        text: "Pakistan is an energy-importing country. It relies on imported petroleum, LNG, and fuel for transport, electricity generation, and industry. If conflict disrupts supply routes such as the Strait of Hormuz or damages energy infrastructure, oil prices rise sharply. That creates several problems for Pakistan:",
      },
      {
        type: "ul",
        items: [
          "More expensive fuel imports",
          "Higher electricity costs",
          "Rising transport fares",
          "Costlier industrial production",
          "Higher food prices due to logistics costs",
          "Increased inflation pressure",
        ],
      },
      {
        type: "paragraph",
        text: "The IMF has already warned that commodity-importing countries are among the most vulnerable to the current conflict because of energy price shocks and currency pressure. For ordinary Pakistanis, this means a higher cost of living. For businesses, it means lower profitability.",
      },
      {
        type: "link",
        text: "Reuters — IMF warns on commodity-importing economies",
        href: "https://www.reuters.com/world/asia-pacific/imf-cuts-emerging-economies-growth-estimate-war-darkens-outlook-2026-04-14/",
      },

      {
        type: "subheading",
        text: "2. Pressure on Foreign Exchange Reserves",
      },
      {
        type: "paragraph",
        text: "Pakistan's economy often struggles with low foreign exchange reserves. When oil imports become more expensive, the country needs more dollars to pay bills. At the same time, if exports or remittances slow down, fewer dollars enter the country. This creates a dangerous gap.",
      },
      {
        type: "paragraph",
        text: "Pakistan is already managing debt repayments and reserve targets under the IMF program. Recent developments showed how crucial external support from Saudi Arabia and other partners remains for financial stability.",
      },
      {
        type: "link",
        text: "Reuters — Saudi Arabia pledges $3 billion more support to Pakistan",
        href: "https://www.reuters.com/world/middle-east/pakistan-says-saudi-arabia-pledges-3-billion-more-support-it-2026-04-15/",
      },

      {
        type: "subheading",
        text: "3. Slower Trade and Export Losses",
      },
      {
        type: "paragraph",
        text: "The Gulf region is an important market for Pakistani rice, meat, textiles, fruits, vegetables, construction labor, and services. If Gulf economies slow down because of war or lower revenues, demand for imports can fall. Shipping disruptions can also delay exports and raise freight costs.",
      },
      {
        type: "paragraph",
        text: "A recent policy study estimated Pakistan's exports to GCC countries could fall significantly if shipping routes remain disturbed for months.",
      },
      {
        type: "link",
        text: "PIDE — The Middle East Crisis: Impact on Pakistan's Trade (PDF)",
        href: "https://file.pide.org.pk/uploads/https%3A//file.pide.org.pk/pdfpideresearch/pv-56-the-middle-east-crisis-impact-on-pakistans-trade.pdf",
      },

      // ─── IMAGE BREAK ─────────────────────────────────────────
      {
        type: "image",
        src: BlogImage1,
        alt: "Middle East Crisis Impact on Pakistan Economy",
      },

      // ─── SECTION 3 ───────────────────────────────────────────
      {
        type: "heading",
        text: "Long-Term Impact on Pakistan Remittances",
      },
      {
        type: "subheading",
        text: "Why Remittances Are the Backbone of the Economy",
      },
      {
        type: "paragraph",
        text: "Remittances are money sent home by Pakistanis working abroad. They support millions of families and provide critical foreign exchange to the country. These funds help Pakistan:",
      },
      {
        type: "ul",
        items: [
          "Finance imports",
          "Stabilize the rupee",
          "Support household consumption",
          "Reduce poverty",
          "Improve banking liquidity",
          "Narrow the current account gap",
        ],
      },
      {
        type: "paragraph",
        text: "Without remittances, Pakistan's external sector would face much deeper stress.",
      },

      {
        type: "quote",
        text: "In the short term, remittances may remain stable. But in the longer term, the risks become more serious if Gulf jobs weaken, migration slows, or wages fall.",
      },

      {
        type: "subheading",
        text: "How a Long Crisis Could Affect Remittances",
      },
      {
        type: "paragraph",
        text: "In the short term, remittances may remain stable. In fact, recent inflows stayed strong despite tensions, partly due to seasonal transfers and continued employment.",
      },
      {
        type: "link",
        text: "Dawn — War in Middle East fails to dent remittances in March",
        href: "https://www.dawn.com/news/1990055",
      },

      {
        type: "subheading",
        text: "1. Job Losses in Gulf Countries",
      },
      {
        type: "paragraph",
        text: "If Gulf economies slow down, construction projects may be delayed, private hiring may shrink, and small businesses may reduce staff. Pakistani workers are heavily present in sectors such as:",
      },
      {
        type: "ul",
        items: [
          "Construction",
          "Transport",
          "Retail",
          "Hospitality",
          "Domestic work",
          "Logistics",
          "Technical services",
        ],
      },
      {
        type: "paragraph",
        text: "These sectors are often sensitive to economic slowdowns. If jobs are lost, remittances fall.",
      },

      {
        type: "subheading",
        text: "2. Lower New Migration Opportunities",
      },
      {
        type: "paragraph",
        text: "Every year, many Pakistanis travel to Gulf states for employment. If companies freeze hiring or governments tighten labor intake during uncertain times, fewer workers will go abroad. That means future remittance growth could slow even if current flows remain stable.",
      },

      {
        type: "subheading",
        text: "3. Wage Pressure",
      },
      {
        type: "paragraph",
        text: "Even where jobs remain available, workers may face lower salaries, fewer overtime hours, or reduced benefits. A worker who sends $500 per month today may only be able to send $350 later. Across millions of workers, that becomes a major national issue.",
      },

      {
        type: "subheading",
        text: "4. Return Migration to Pakistan",
      },
      {
        type: "paragraph",
        text: "If conflict becomes severe, some workers may return to Pakistan. That creates two problems:",
      },
      {
        type: "ul",
        items: [
          "Loss of remittance inflows",
          "More unemployment pressure inside Pakistan",
        ],
      },
      {
        type: "paragraph",
        text: "Pakistan would then need jobs for returning workers, which is already a serious challenge.",
      },

      // ─── SECTION 4 ───────────────────────────────────────────
      {
        type: "heading",
        text: "Impact on Relations with Arab States",
      },
      {
        type: "subheading",
        text: "Strong Ties Will Continue, But With New Pressures",
      },
      {
        type: "paragraph",
        text: "Pakistan has long-standing brotherly relations with Arab countries, especially Saudi Arabia and the UAE. These ties are based on religion, labor cooperation, defense links, trade, and financial support.",
      },
      {
        type: "link",
        text: "Reuters — Saudi Arabia backstops Pakistan with $3 billion as UAE debt looms",
        href: "https://www.reuters.com/world/middle-east/pakistan-says-saudi-arabia-pledges-3-billion-more-support-it-2026-04-15/",
      },

      {
        type: "subheading",
        text: "1. Pressure to Take Sides",
      },
      {
        type: "paragraph",
        text: "If tensions grow between rival regional powers, Pakistan may face pressure to align more openly with one bloc or another. Pakistan traditionally prefers balance and neutrality because it has interests with multiple states in the region. Maintaining that balance may become harder.",
      },

      {
        type: "subheading",
        text: "2. Greater Strategic Importance of Pakistan",
      },
      {
        type: "paragraph",
        text: "At the same time, Pakistan's importance may increase. Pakistan offers several strategic advantages:",
      },
      {
        type: "ul",
        items: [
          "Military cooperation",
          "Skilled manpower",
          "Food exports",
          "Strategic geography",
          "Diplomatic channels",
        ],
      },
      {
        type: "paragraph",
        text: "This could create new opportunities if managed wisely.",
      },

      {
        type: "subheading",
        text: "3. More Economic Dependence on Friendly States",
      },
      {
        type: "paragraph",
        text: "During financial stress, Pakistan may rely more on deposits, deferred oil facilities, and investment from Gulf allies. That can help in the short term, but overdependence carries long-term risks if domestic reforms are delayed.",
      },

      // ─── SECTION 5 ───────────────────────────────────────────
      {
        type: "heading",
        text: "What Pakistan Should Do Now",
      },
      {
        type: "subheading",
        text: "Diversify Remittance Sources",
      },
      {
        type: "paragraph",
        text: "Pakistan should expand labor exports beyond the Gulf to reduce regional dependence:",
      },
      {
        type: "ul",
        items: [
          "Europe",
          "East Asia",
          "Central Asia",
          "Africa",
          "North America",
        ],
      },

      {
        type: "subheading",
        text: "Upgrade Worker Skills",
      },
      {
        type: "paragraph",
        text: "Instead of sending only low-wage labor, Pakistan should train workers in higher-value fields:",
      },
      {
        type: "ul",
        items: [
          "IT and digital services",
          "Healthcare",
          "Engineering",
          "AI and automation",
          "Skilled trades",
          "Finance and management",
        ],
      },
      {
        type: "paragraph",
        text: "Higher-skilled workers send higher remittances.",
      },

      {
        type: "subheading",
        text: "Reduce Energy Dependence",
      },
      {
        type: "paragraph",
        text: "Pakistan must invest heavily in domestic energy to reduce vulnerability to Gulf oil shocks:",
      },
      {
        type: "ul",
        items: [
          "Solar energy",
          "Wind energy",
          "Hydropower",
          "Local gas development",
          "Energy efficiency programs",
        ],
      },

      {
        type: "subheading",
        text: "Expand Exports Beyond Traditional Markets",
      },
      {
        type: "paragraph",
        text: "Pakistan should target new export markets while strengthening value-added manufacturing and services to reduce dependence on Gulf demand.",
      },

      {
        type: "subheading",
        text: "Build Stronger Diplomacy",
      },
      {
        type: "paragraph",
        text: "Pakistan should maintain balanced, respectful relations with all Arab partners and continue constructive diplomacy to protect economic interests during uncertain times.",
      },

      // ─── CONCLUSION ──────────────────────────────────────────
      {
        type: "heading",
        text: "Final Conclusion",
      },
      {
        type: "paragraph",
        text: "The Middle East crisis is not just a foreign conflict for Pakistan. It is an economic test. In the short term, Pakistan faces higher oil prices, inflation, reserve pressure, and trade uncertainty. In the longer term, the biggest risk is to remittances, which remain the backbone of the economy.",
      },
      {
        type: "quote",
        text: "If Pakistan uses this moment to reform its economy and diversify opportunities, the crisis can become a wake-up call. If it does not, the next regional shock may hit even harder.",
      },
      {
        type: "paragraph",
        text: "At the same time, Pakistan's relations with Arab states remain valuable and can become even more important during uncertain times. The real question is whether Pakistan uses this moment to reform its economy, diversify its opportunities, and reduce dependence on external shocks.",
      },
    ],
  },
  {
    id: 1,
    image: BlogImage2,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: {
      name: "Jason Francisco",
      avatar: Blog2Author,
    },

    date: "August 20, 2022",
  },
  {
    id: 1,
    image: BlogImage3,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: {
      name: "Elizabeth Slavin",
      avatar: Blog3Author,
    },

    date: "August 20, 2022",
  },
  {
    id: 1,
    image: BlogImage4,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: {
      name: "Ernie Smith",
      avatar: Blog4Author,
    },

    date: "August 20, 2022",
  },
  {
    id: 1,
    image: BlogImage5,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: {
      name: "Eric Smith",
      avatar: Blog5Author,
    },

    date: "August 20, 2022",
  },
  {
    id: 1,
    image: BlogImage6,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: {
      name: "Tracey Wilson",
      avatar: Blog1Author,
    },

    date: "August 20, 2022",
  },
  {
    id: 1,
    image: BlogImage7,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: {
      name: "Jason Francisco",
      avatar: Blog2Author,
    },

    date: "August 20, 2022",
  },
  {
    id: 1,
    image: BlogImage8,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: {
      name: "Elizabeth Slavin",
      avatar: Blog3Author,
    },

    date: "August 20, 2022",
  },
  {
    id: 1,
    image: BlogImage9,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: {
      name: "Ernie Smith",
      avatar: Blog4Author,
    },

    date: "August 20, 2022",
  },
];

{
  /* <div className="flex items-center gap-4 text-sm text-gray-700 mb-6">
            <div className="w-8 h-8 bg-gray-300 rounded-full">
              <img src={UserIcon} alt="Author" />
            </div>
            <span>
              <Link to="/blogAuthor">Tracey Wilson</Link>
            </span>
            <span>August 20, 2022</span>
          </div>

          <div className="rounded-2xl overflow-hidden mb-6">
            <img
              src={BlogImage2}
              alt="Blog"
              className="w-full h-[250px] md:h-[400px] object-cover"
            />
          </div>

          <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-5">
            <p>
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels.
            </p>

            <p>
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Research Your Destination
            </h3>
            <p>
              Research Your Destination Before embarking on your journey, take
              the time to research your destination. This includes understanding
              the local culture, customs, and laws, as well as identifying top
              attractions, restaurants, and accommodations. Doing so will help
              you navigate your destination with confidence and avoid any
              cultural faux pas.
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">
              Plan Your Itinerary
            </h3>
            <p>
              While it's essential to leave room for spontaneity and unexpected
              adventures, having a rough itinerary can help you make the most of
              your time and budget. Identify the must-see sights and experiences
              and prioritize them according to your interests and preferences.
              This will help you avoid overscheduling and ensure that you have
              time to relax and enjoy your journey.
            </p>
            <p>
              {" "}
              Vitae sapien pellentesque habitant morbi tristique. Luctus
              venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
              nullam eget felis. Tincidunt arcu non sodales neque sodales ut
              etiam sit amet.
            </p>

            <div className="bg-gray-200 p-4 my-8">
              <p className="text-xl max-w-3xl text-center italic font-bold">
                “ Traveling can expose you to new environments and potential
                health risks, so it's crucial to take precautions to stay safe
                and healthy. ”
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden mb-6">
              <img
                src={BlogImage1}
                alt="Blog"
                className="w-full h-[250px] md:h-[400px] object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Pack Lightly and Smartly
            </h3>
            <p>
              Packing can be a daunting task, but with some careful planning and
              smart choices, you can pack light and efficiently. Start by making
              a packing list and sticking to it, focusing on versatile and
              comfortable clothing that can be mixed and matched. Invest in
              quality luggage and packing organizers to maximize space and
              minimize wrinkles.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">
              Stay Safe and Healthy
            </h3>
            <p>
              Traveling can expose you to new environments and potential health
              risks, so it's crucial to take precautions to stay safe and
              healthy. This includes researching any required vaccinations or
              medications, staying hydrated, washing your hands frequently, and
              using sunscreen and insect repellent. It's also essential to keep
              your valuables safe and secure and to be aware of your
              surroundings at all times.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">
              Immerse Yourself in the Local Culture
            </h3>
            <p>
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">
              Capture Memories
            </h3>
            <p>
              Finally, don't forget to capture memories of your journey. Whether
              it's through photographs, journaling, or souvenirs, preserving the
              moments and experiences of your travels can bring joy and
              nostalgia for years to come. However, it's also essential to be
              present in the moment and not let technology distract you from the
              beauty of your surroundings.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">Conclusion:</h3>
            <p>
              Conclusion: Traveling is an art form that requires a blend of
              planning, preparation, and spontaneity. By following these tips
              and tricks, you can make the most of your journey and create
              memories that last a lifetime. So pack your bags, embrace the
              adventure, and enjoy the ride.
            </p> */
}
