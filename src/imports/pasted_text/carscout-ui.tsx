Create a high-fidelity responsive React + Tailwind UI for a static MVP web app called CarScout.

Product concept:
CarScout is “Skyscanner for used cars” in the UK. It is a clean vehicle search aggregator that helps users find the best-value used cars across multiple listing sources such as eBay, AutoTrader-style dealers, local garage websites, and independent dealer portals. The goal is to validate the product idea with buyers and small independent dealerships. This is a static MVP platform concept, not a live production marketplace.

The design must feel like a high-trust data utility such as Skyscanner, Wise, Monzo, or a modern SaaS dashboard. It must not feel like a loud, aggressive car dealership website.

Core visual direction:
- Background: #f8fafc
- Text: #0f172a
- Accent blue: #2563eb
- Use soft greys, white cards, subtle borders, rounded corners, and clean spacing
- Modern SaaS-style interface
- Minimal clutter
- Trustworthy, calm, fast, value-focused
- Responsive design for desktop, tablet, and mobile
- Use Tailwind CSS utility classes
- Use React components
- Avoid backend/database concepts in the UI
- Clearly label the app as an “MVP Platform Concept” somewhere in the header

Technology expectation:
- React 18+
- TypeScript-friendly structure
- Tailwind CSS
- Static frontend only
- Mock data-driven
- Client-side filtering and sorting
- Netlify Forms-compatible form UI for lead capture and alerts

Overall app structure:
Create a single-page responsive web app with these main views/sections:

1. Global Header
2. Search & Value Landing Hub
3. Results Dashboard / Aggregated Matrix
4. Vehicle Listing Cards
5. Save Search / Alert Modal
6. B2B Dealership Acquisition Section
7. Footer

Important behaviour to design for:
- Clicking the CarScout brand/title should visually represent resetting the app back to the landing/search state.
- The header should show:
  - CarScout logo/wordmark
  - Small badge: “MVP Platform Concept”
  - Navigation anchors: Search, For Dealers, How It Works
  - CTA button: “Start Search”
- Keep the header sticky or visually persistent on larger screens.

Landing page / hero section:
Design a strong hero area with:
- Headline: “Find the best-value used cars without checking five sites manually.”
- Subheading: “Search across mock dealer, marketplace, and independent listings in one clean aggregator interface.”
- Supporting trust badges:
  - “Static MVP”
  - “No accounts”
  - “Buyer-first search”
  - “Dealer lead routing”
- A clean search card/grid positioned prominently.

Search form fields:
Create a responsive search grid with the following fields:

1. Make / Model
   - Free text input
   - Placeholder: “e.g. Golf, Fiesta, BMW 1 Series”

2. Max Budget
   - Numeric input
   - Placeholder: “e.g. 10000”

3. Minimum Year
   - Select/dropdown
   - Options: Any, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015

4. Fuel Type
   - Select or segmented control
   - Options: Any, Petrol, Diesel, Hybrid, Electric

5. Transmission
   - Select or segmented control
   - Options: Any, Manual, Automatic

6. Postcode
   - Text input
   - Placeholder: “e.g. SW9”

7. Range
   - Select/dropdown
   - Options: Any distance, 5 miles, 10 miles, 25 miles, 50 miles, 100 miles

Primary search button:
- Text: “Search Cars”
- Prominent blue button
- Include an icon if available

Secondary helper copy:
- “This prototype uses local mock listings to demonstrate the search experience.”

Landing value cards:
Under or beside the search card, create 3 value proposition cards:
1. “Compare across sources”
   - Copy: “Bring marketplace and dealer listings into one clean view.”
2. “Spot genuine value”
   - Copy: “Sort by price, mileage, year, distance, and value score.”
3. “Send buyers direct”
   - Copy: “Original listing buttons route users back to the source.”

Results Dashboard / Aggregated Matrix view:
Create a results section that appears after search. It should feel like a clean search-results dashboard.

Top of results should include:
- Heading example: “Found 6 matching vehicles”
- Small text: “Sorted by Best Value”
- Button: “Save Search / Set Alert”
- Button or link: “Reset Active Filters”
- Sort dropdown with options:
  - Best Value
  - Lowest Price
  - Newest Listing
  - Lowest Mileage
  - Closest Distance

Layout:
- Desktop: sidebar/filter drawer on left, listings grid/list on right
- Tablet/mobile: filters collapse into a drawer or stacked section
- Results can be displayed as responsive cards in a 2-column desktop grid or clean list format
- Include active filter chips near the top, e.g. “Golf”, “Under £10,000”, “Manual”, “Within 25 miles”

Filter sidebar/drawer:
Include controls for:
- Budget
- Min year
- Fuel type
- Transmission
- Distance
- Source
- Mileage max
- Clear filters button

Zero results fallback state:
Design a clear empty state with:
- Icon or illustration placeholder
- Heading: “No cars match those filters yet”
- Copy: “Try widening your budget, distance, year, or transmission preferences.”
- Button: “Reset Active Filters”

Vehicle listing card component:
Create a high-fidelity used-car listing card. Each card must include:

Top image area:
- Car image canvas/placeholder
- Source badge in top-right, e.g. “eBay”, “Dealer Site”, “Local Garage”, “Partner Dealer”
- Optional small badge for “Good value” or “Best match”

Main content:
- Make/model/variant title, e.g. “Volkswagen Golf 1.5 TSI”
- Price label, e.g. “£9,450”
- Metadata row:
  - Year
  - Mileage
  - Localized distance, e.g. “12 miles away”
- Specs grid:
  - Transmission
  - Fuel type
  - MOT expiry window
- Dealer/source name
- Small line of value insight, e.g. “£850 below similar listings”
- CTA button: “View Original Listing ↗”
- CTA should visually imply opening an external listing in a new tab
- Secondary link or small text: “Source: eBay”

Example mock cards to visually represent:
1. Volkswagen Golf 1.5 TSI — £9,450 — 2018 — 62,000 miles — Petrol — Manual — 12 miles — eBay
2. Ford Fiesta Titanium — £6,850 — 2017 — 48,000 miles — Petrol — Manual — 8 miles — Local Garage
3. BMW 118i Sport — £11,995 — 2019 — 55,000 miles — Petrol — Automatic — 21 miles — Dealer Site
4. Toyota Yaris Hybrid — £10,750 — 2020 — 39,000 miles — Hybrid — Automatic — 16 miles — Partner Dealer
5. Audi A3 1.6 TDI — £9,995 — 2018 — 71,000 miles — Diesel — Manual — 34 miles — eBay
6. Nissan Leaf Tekna — £8,995 — 2017 — 42,000 miles — Electric — Automatic — 19 miles — Dealer Site

Save Search / Set Alert modal:
Create a clean modal overlay triggered by the “Save Search / Set Alert” button.

Modal content:
- Title: “Get alerts for matching cars”
- Copy: “Enter your email and we’ll let you know when vehicles matching your current search appear in the directory.”
- Email input
- Hidden/summary area showing active search parameters
- Submit button: “Create Alert”
- Secondary button: “Cancel”
- Microcopy: “Prototype form powered by Netlify Forms.”
- This should look Netlify Forms-compatible but remain frontend/static.

B2B Dealership Acquisition Section:
Create a section lower on the landing page aimed at independent dealerships.

Section title:
“Are you an independent dealer?”

Subtitle:
“Join the pre-launch partner list and route high-intent buyers directly to your own listings.”

Messaging points:
- “Reduce reliance on expensive listing platforms”
- “Send traffic back to your own website”
- “Sync inventory later through CSV/API-style workflows”
- “Validate demand before committing to paid infrastructure”

Dealer lead form:
- Dealership Name input
- Work Email input
- Optional Website URL input
- Submit button: “Join Dealer Waitlist”
- Microcopy: “We’ll only use this to discuss early access.”

Include a visual card/mock panel beside the form showing:
- “Dealer Partner Queue”
- “Lead routing”
- “Inventory sync planned”
- “No listing fees in MVP testing”

How It Works section:
Create a simple 3-step explainer:
1. “Search once”
   - Users enter budget, model, fuel, transmission, year, and distance.
2. “Compare cleanly”
   - Listings are normalised into one value-focused view.
3. “Go to the source”
   - Users click through to the original dealer or marketplace listing.

Footer:
Include:
- CarScout
- “Static MVP validation prototype”
- Links: Search, For Dealers, Privacy, Contact
- Small disclaimer: “This prototype uses mock listings and does not provide live vehicle availability.”

Responsive requirements:
- Mobile-first
- Search fields stack cleanly on mobile
- Cards are readable on small screens
- Header should collapse nicely
- Buttons must be large enough for mobile tapping
- Avoid horizontal scrolling
- Maintain strong spacing and hierarchy

Code requirements:
- Produce React components with Tailwind classes
- Keep the UI modular
- Components to generate:
  - App
  - Header
  - HeroSearch
  - SearchForm
  - ResultsDashboard
  - FilterPanel
  - SortBar
  - VehicleCard
  - EmptyState
  - SaveSearchModal
  - DealerSection
  - HowItWorks
  - Footer
- Use mock data placeholders where needed
- Use accessible labels for form inputs
- Use semantic HTML where possible
- Make it visually polished enough for stakeholder demos
- Do not include real backend logic, authentication, database, scraping, live APIs, payments, or user accounts

Final output expectation:
Generate a polished React + Tailwind static UI that I can export/take into VS Code and then wire up with client-side logic myself.