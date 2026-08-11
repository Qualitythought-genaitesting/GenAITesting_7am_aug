# Drugs.com Test Plan

## Application Overview

Test plan for Drugs.com covering homepage access, search functionality, top navigation, footer links, and search input validation. Focuses on core user journeys and key public-facing features.

## Test Scenarios

### 1. Drugs.com Core Functional Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage loads successfully

**File:** `specs/drugscom.test.plan.md`

**Steps:**
  1. Navigate to https://www.drugs.com/.
    - expect: The page loads without errors.
    - expect: The page title contains "Drugs.com".
    - expect: The homepage shows the hero title, description, and main search input.
    - expect: Main navigation links are present, including Drugs A-Z, Pill Identifier, Interaction Checker, News, Pro Edition, and More Resources.

#### 1.2. Search for a valid drug name

**File:** `specs/drugscom.test.plan.md`

**Steps:**
  1. From the homepage, enter "aspirin" in the main search input and submit the search.
    - expect: The browser navigates to a search results page.
    - expect: Search results include relevant matches or content related to aspirin.
    - expect: The search input remains visible for query refinement.

#### 1.3. Search for an invalid or random query

**File:** `specs/drugscom.test.plan.md`

**Steps:**
  1. From the homepage, enter a random query such as "asdfghjkl" in the search input and submit.
    - expect: The site displays a no-results state or handles the query gracefully.
    - expect: The page retains the search input so the user can try another query.
    - expect: No technical error page is shown.

#### 1.4. Verify top navigation links

**File:** `specs/drugscom.test.plan.md`

**Steps:**
  1. On the homepage, click the top navigation link for "Drugs A-Z".
    - expect: The browser begins navigation to /drug_information.html or a related page.
  2. Return to the homepage and click the "News" navigation link.
    - expect: The browser begins navigation to /news.html.
    - expect: The page updates to display news-related content.

#### 1.5. Validate footer and support links

**File:** `specs/drugscom.test.plan.md`

**Steps:**
  1. Scroll to the bottom of the homepage to expose the footer section.
    - expect: The footer includes informational links and a visible Help & Support link.
  2. Click the Help & Support link if visible.
    - expect: The browser begins navigation to /support/ or a support page.
    - expect: The target page loads and presents support information.

#### 1.6. Search input field validation and accessibility

**File:** `specs/drugscom.test.plan.md`

**Steps:**
  1. Inspect the main search input on the homepage.
    - expect: The search input placeholder reads "Enter a drug name, condition, pill imprint, etc.".
    - expect: The input name is "searchterm" and the form submits using GET to https://www.drugs.com/search.php.
    - expect: The search button is available and clearly labeled.
