# MakeMyTrip Flight Booking Test Plan

## Application Overview

End-to-end test plan for MakeMyTrip flight ticket booking flow. Covers search, selection, passenger details, booking summary, payment navigation, and validation of negative and edge-case conditions.

## Test Scenarios

### 1. MakeMyTrip Flight Booking Scenarios

**Seed:** `tests/seed.spec.ts`

#### 1.1. Search and select a valid one-way flight

**File:** `specs/makemytrip.flight-booking.test.plan.md`

**Steps:**
  1. Navigate to https://www.makemytrip.com/
    - expect: The homepage loads successfully.
    - expect: The page title includes MakeMyTrip or Flight booking text.
    - expect: The flight search widget is visible.
  2. Select One-way trip option.
    - expect: The one-way trip option is active and destination/date fields remain visible.
  3. Enter a valid origin city or airport and select it from autocomplete.
    - expect: The origin input accepts city/airport text.
    - expect: A matching suggestion appears and can be selected.
    - expect: The selected origin is applied to the search form.
  4. Enter a valid destination city or airport and select it from autocomplete.
    - expect: The destination input accepts city/airport text.
    - expect: A matching suggestion appears and can be selected.
    - expect: The selected destination is applied to the search form.
  5. Choose a valid departure date in the future.
    - expect: The departure date picker opens.
    - expect: A future date can be selected.
    - expect: The chosen date is displayed in the form.
  6. Set passenger count to 1 adult and search for flights.
    - expect: The search button is enabled.
    - expect: The flight results page loads.
    - expect: Available flights for the selected route and date are displayed.

#### 1.2. Book a flight and reach payment page

**File:** `specs/makemytrip.flight-booking.test.plan.md`

**Steps:**
  1. Start from a successful flight search result for a valid route.
    - expect: Search results are present.
    - expect: At least one flight option is visible.
  2. Select a valid flight option and proceed to the booking summary.
    - expect: The selected flight details are highlighted.
    - expect: A Continue/Book button is enabled.
    - expect: The booking summary page loads.
  3. Enter valid passenger details (name, gender, contact information) as required.
    - expect: The passenger form accepts valid data.
    - expect: Required fields are clearly indicated.
    - expect: The Continue button becomes available.
  4. Proceed to payment or review page.
    - expect: The booking confirmation or payment page loads.
    - expect: The final payable amount is displayed.
    - expect: Payment options and contact summary are visible.

#### 1.3. Search for a valid round-trip flight

**File:** `specs/makemytrip.flight-booking.test.plan.md`

**Steps:**
  1. Open MakeMyTrip flight search and choose Round-trip.
    - expect: Round-trip option is active.
    - expect: Departure and return date fields are available.
  2. Enter valid origin and destination cities and select suggestions.
    - expect: Both origin and destination are accepted.
    - expect: Suggestions appear and can be selected.
    - expect: Selected route is shown in the search form.
  3. Choose valid departure and return dates in the future.
    - expect: Departure and return dates can be selected.
    - expect: Return date is after departure date.
    - expect: The selected dates are displayed properly.
  4. Search for flights and verify round-trip results.
    - expect: The flight results page loads for round-trip.
    - expect: Results include both outbound and return flight options.
    - expect: Price summary reflects round-trip booking.

#### 1.4. Validate passenger count and class selection limits

**File:** `specs/makemytrip.flight-booking.test.plan.md`

**Steps:**
  1. Open the passenger and class selector in the flight search widget.
    - expect: The passenger selector expands.
    - expect: Adult, child, infant and cabin class controls are visible.
  2. Increase adults to the maximum allowed by the interface.
    - expect: The interface prevents exceeding the maximum passenger limit.
    - expect: A helpful message or disabled control appears at the limit.
  3. Choose a cabin class and search for flights.
    - expect: The selected cabin class is applied.
    - expect: Search results update according to class selection.

#### 1.5. Negative: reject same origin and destination

**File:** `specs/makemytrip.flight-booking.test.plan.md`

**Steps:**
  1. Enter the same city or airport in both origin and destination fields.
    - expect: The form identifies the invalid route.
    - expect: An error message or validation warning is displayed.
    - expect: The search does not proceed until corrected.

#### 1.6. Negative: prevent booking with invalid or past dates

**File:** `specs/makemytrip.flight-booking.test.plan.md`

**Steps:**
  1. Enter a departure date in the past or invalid date value.
    - expect: The date selector prevents past date selection or shows a validation error.
    - expect: The search button remains disabled or the user is prompted to choose a valid date.
  2. For round-trip search, choose a return date before the departure date.
    - expect: A validation error appears.
    - expect: The form indicates the return date must be after the departure date.
    - expect: The user cannot proceed until corrected.

#### 1.7. Negative: handle empty mandatory fields

**File:** `specs/makemytrip.flight-booking.test.plan.md`

**Steps:**
  1. Leave origin, destination, or departure date empty and attempt to search.
    - expect: The search is blocked.
    - expect: Each missing required field is highlighted.
    - expect: A clear error or help message explains what is missing.

#### 1.8. Negative: invalid passenger details on booking page

**File:** `specs/makemytrip.flight-booking.test.plan.md`

**Steps:**
  1. On the passenger details page, enter invalid contact information or leave required fields blank.
    - expect: The passenger form displays field-level validation errors.
    - expect: The Continue button remains disabled or prevents submission.
    - expect: The user receives clear guidance to fix invalid entries.

#### 1.9. Edge: verify airport autocomplete and suggestion selection

**File:** `specs/makemytrip.flight-booking.test.plan.md`

**Steps:**
  1. Type a partial city or airport name for origin and destination.
    - expect: Autocomplete suggestions appear.
    - expect: The list is relevant to the entered characters.
  2. Select a suggestion from the dropdown for both fields.
    - expect: The selected suggestion populates the input.
    - expect: The route is updated correctly in the search form.
