Update the existing CarScout UI to strengthen the marketing and value proposition across the landing page, results page, alert modal, and dealer acquisition section.

Do not redesign the whole app. Keep the existing visual style, layout, colours, typography, and component structure. This is a content and feature-presentation update.

Core positioning to communicate:
CarScout is a buyer-first used car aggregator that helps people compare listings across multiple sources, save searches, and click directly through to the original listing. It is also useful for independent dealers because it sends high-intent buyers directly to their own websites or listing pages.

Important marketing messages to add:

1. 0% purchase fee

   * CarScout does not take a cut from each vehicle sale.
   * Buyers can compare cars freely.
   * Dealers keep the full sale value and receive direct traffic.
   * Use wording like:
     “0% purchase fee”
     “No commission taken from the sale”
     “We send buyers to the original listing — we don’t sit in the middle of the transaction”
     “Dealers keep the full sale value”

2. Email alerts

   * Users can save their search and get email alerts for matching results.
   * This should feel like a major buyer benefit, not a hidden feature.
   * Use wording like:
     “Save your search”
     “Get alerts when matching cars appear”
     “Stop refreshing five different websites”
     “Let the right car come to you”

3. Dealer lead generation

   * For car companies and independent dealers, CarScout generates qualified buyer leads and sends users directly to their existing websites/listings.
   * Use wording like:
     “Generate direct leads to your own website”
     “Route high-intent buyers straight to your listings”
     “Reduce reliance on expensive listing platforms”
     “Keep ownership of your customer journey”
     “No forced checkout. No platform commission. Just direct buyer traffic.”

Hero section updates:
Update the hero headline and subheading to sell the product more clearly.

Suggested headline:
“Find the best used-car deals across the web — without paying platform markups.”

Suggested subheading:
“CarScout compares used-car listings from marketplaces, dealer websites, and local garages in one clean search. Save your results, get email alerts, and click straight through to the original seller.”

Add 3 stronger hero badges:

* “0% purchase fee”
* “Email alerts for saved searches”
* “Direct dealer lead routing”

Add a small trust/value strip under the search card:

* “No account needed”
* “No checkout middleman”
* “Mock listings for MVP testing”
* “Built for buyers and independent dealers”

Search/results page updates:
Make the Save Search / Set Alert feature more visible.

In the results dashboard header, include:

* Heading: “Found X matching vehicles”
* Subtext: “Save this search and get alerts when similar cars appear.”
* Primary/secondary button: “Save Search / Set Alert”

Near the active filter chips, add a small callout:
“Don’t miss the right car — save this search and get email alerts.”

The email alert modal should feel valuable:
Modal title:
“Never miss a matching car”

Modal copy:
“Save your current filters and get an email when similar vehicles are added to the directory. No account required.”

Modal CTA:
“Create Email Alert”

Success state:
Title:
“Search alert created”

Copy:
“We’ll use your saved filters to notify you when matching cars appear in the prototype directory.”

Dealer section updates:
Strengthen the B2B messaging.

Section title:
“Send buyers straight to your dealership — without giving up a cut.”

Subtitle:
“CarScout helps independent dealers get discovered by high-intent buyers, then routes them directly to your website or original listing page.”

Add dealer benefit cards:

1. “0% sale commission”
   Copy: “CarScout does not take a percentage of the vehicle sale. You keep the full sale value.”

2. “Direct website leads”
   Copy: “Buyers click through to your own listing pages, helping you build traffic and own the customer journey.”

3. “Lower dependency”
   Copy: “Reduce reliance on expensive closed marketplace platforms by adding another discovery channel.”

4. “Inventory sync ready”
   Copy: “The MVP is static, but the long-term direction supports CSV/API-style inventory ingestion.”

Dealer CTA form heading:
“Join the dealer partner waitlist”

Dealer CTA copy:
“Register your dealership interest and we’ll contact you about early access, listing visibility, and direct lead routing.”

Dealer form button:
“Join Dealer Waitlist”

Add a small dealer disclaimer:
“This MVP does not process payments or take commission. It demonstrates buyer discovery and lead-routing demand.”

Ranking/value score update:
Replace any vague label like “Good”, “Great”, or “Best Match” score with a numerical CarScout Value Score.

Use:
“CarScout Value Score”

Display format:

* “87/100”
* “74/100”
* “91/100”

On vehicle cards:
Replace the current “Good” badge/score with:

* A numerical badge: “Value Score 87/100”
* Optional supporting insight below it, such as “£850 below similar listings”

The score should look like a useful ranking metric, not a random review rating.

Add a small tooltip or helper text near the sort dropdown:
“Value Score ranks listings using mock price, age, mileage, and distance data.”

Sorting update:
Update the “Best Value” sorting label to:
“Highest Value Score”

Sort dropdown options should be:

* Highest Value Score
* Lowest Price
* Newest Listing
* Lowest Mileage
* Closest Distance

Results explainer:
Add a compact explanation near the results header:
“CarScout ranks mock listings by price, age, mileage, and distance to help surface stronger-value cars faster.”

Vehicle card layout changes:
Each card should show:

* Source badge
* Car title
* Price
* Year, mileage, distance
* Fuel type and transmission
* MOT expiry
* Dealer/source name
* CarScout Value Score as a number out of 100
* Value insight, e.g. “£850 below similar listings”
* CTA button: “View Original Listing ↗”

CTA microcopy below the button:
“Opens the seller’s original listing. CarScout does not take a sale commission.”

How It Works section update:
Update the 3 steps to sell the full value flow:

1. “Search once”
   Copy: “Enter your budget, model, fuel type, transmission, year, and distance.”

2. “Compare by Value Score”
   Copy: “CarScout ranks listings using mock value signals like price, mileage, age, and distance.”

3. “Go direct or save alerts”
   Copy: “Open the original listing in a new tab or save your search to get email alerts when similar cars appear.”

Footer disclaimer update:
Add:
“CarScout is a static MVP validation prototype using mock listings. It does not process vehicle purchases, take payment, or take commission from sales.”

Design requirements:

* Keep the clean SaaS/data-utility style.
* Avoid loud dealership-style marketing.
* Make the value proposition obvious within 5 seconds.
* Keep messaging clear for both buyers and dealers.
* Keep the app labelled as an MVP Platform Concept.
* Keep all forms frontend/static and Netlify-compatible.
* Do not add backend logic, database logic, live scraping, payment flows, authentication, or real email automation.

Expected output:
Update the existing React + Tailwind UI so CarScout now clearly markets:

* 0% purchase fee / no sale commission
* saved search email alerts
* direct lead generation for dealers
* numerical CarScout Value Score instead of vague “Good” labels
