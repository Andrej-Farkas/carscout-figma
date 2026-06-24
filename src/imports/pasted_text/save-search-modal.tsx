Update the existing CarScout React + Tailwind UI to add full “Save Search / Email Alert” functionality.

Context:
CarScout is a static MVP “Skyscanner for used cars” platform concept. The app uses local mock listings, client-side filters, and no backend/database/live API. The email alerting feature is for MVP validation only and should use a Netlify Forms-compatible frontend form.

Add this feature without redesigning the whole app. Keep the current visual style, layout, colours, typography, and component structure. Only add the missing email alerting functionality and any small UI improvements needed to make it feel complete.

Feature name:
Save Search / Email Alert

User story:
As a buyer, after searching/filtering for used cars, I want to save my current search and enter my email address so I can be notified when similar vehicles are added in the future.

Where to add it:

1. In the Results Dashboard header area, add a clear button:
   “Save Search / Set Alert”

2. Also add a smaller secondary link/button near the search form:
   “Get email alerts for this search”

3. Both should open the same modal.

Modal requirements:
Create a polished modal overlay component called SaveSearchModal.

The modal should appear centered on the screen with:

* A dimmed backdrop
* White modal card
* Rounded corners
* Soft border/shadow
* Close “X” button
* Mobile-friendly full-width layout on small screens

Modal content:
Title:
“Get alerts for matching cars”

Subtitle:
“Enter your email and we’ll let you know when cars matching your current search appear in the directory.”

Form fields:

1. Email address

   * Label: “Email address”
   * Placeholder: “[you@example.com](mailto:you@example.com)”
   * Required

2. Optional name field

   * Label: “First name”
   * Placeholder: “Alex”
   * Optional

3. Search summary section
   Show a compact read-only summary of the user’s active search filters:

   * Make / model
   * Max budget
   * Minimum year
   * Fuel type
   * Transmission
   * Postcode
   * Range
   * Max mileage
   * Source

If a filter is empty or set to “Any”, show it as “Any” in the summary.

CTA:
Primary button:
“Create Email Alert”

Secondary button:
“Cancel”

Microcopy:
“Prototype form powered by Netlify Forms. No account required.”

Success state:
After the user submits the form, show a success confirmation inside the modal:

* Heading: “Alert created”
* Copy: “We’ll use this search to notify you when matching cars are added to the prototype directory.”
* Button: “Done”

Netlify Forms compatibility:
The form must be written so it can work with Netlify Forms when deployed as a static site.

Use this form structure:

* form name="car-alerts"
* method="POST"
* data-netlify="true"
* Include hidden input:
  name="form-name"
  value="car-alerts"

Include hidden fields for the active search parameters:

* query
* maxBudget
* minYear
* fuelType
* transmission
* postcode
* radius
* maxMileage
* source
* sortOption

The visible form should collect:

* email
* firstName

Important frontend behaviour:

* The modal opens when the user clicks “Save Search / Set Alert”
* The modal closes when:

  * The user clicks X
  * The user clicks Cancel
  * The user clicks Done after success
  * The user clicks the backdrop
* Prevent accidental layout shifts
* Keep all state in React using useState
* Do not add backend code
* Do not add API calls
* Do not add authentication
* Do not add a database
* Do not add real email automation
* This is a static MVP validation form only

Results page integration:
In the results dashboard header, update the layout to show:

* “Found X matching vehicles”
* Sort dropdown
* Save Search / Set Alert button
* Reset Active Filters button

The Save Search button should be visually important but not more important than the main “Search Cars” button. Use the same soft blue accent colour #2563eb.

Active search summary:
Create a reusable component or section called SearchSummaryChips.
It should display selected filters as chips, for example:

* “Golf”
* “Under £10,000”
* “From 2018”
* “Manual”
* “Petrol”
* “Within 25 miles”
* “SW9”

If no filters are selected, show:
“Any make, any budget, any distance”

Use this same search summary visually in the modal so the user understands exactly what alert they are saving.

Accessibility:

* Modal should use role="dialog"
* Add aria-modal="true"
* Add accessible labels for all fields
* Make buttons keyboard accessible
* Email field should use type="email"
* Required email field should be clearly marked
* Close button should have aria-label="Close alert modal"

Design style:

* Clean SaaS/productivity tool style
* Similar to Skyscanner/Wise, not a car dealership
* Background #f8fafc
* Text #0f172a
* Accent #2563eb
* Use subtle borders, rounded corners, and soft shadows
* Keep it minimal and trustworthy

Component updates to make:

* Add SaveSearchModal.tsx
* Add SearchSummaryChips.tsx if useful
* Update ResultsDashboard.tsx to include Save Search / Set Alert button
* Update SearchForm or HeroSearch to include smaller “Get email alerts for this search” link/button
* Update App.tsx to manage modal open/close state
* Pass current filters and sort option into the modal
* Keep the existing mock data and filtering logic unchanged

Expected output:
Return updated React + Tailwind code that adds the email alerting modal and Netlify-compatible form while preserving the current CarScout UI design.
