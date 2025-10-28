# Noeia SaaS Platform UI Design Specification

## 1. Product Vision
Noeia is a serene, human-centered SaaS platform enabling psychologists to manage sessions, patients, billing, and insights within a unified workspace. The design emphasizes trust, calmness, and premium quality while supporting AI-assisted workflows.

## 2. Visual Language
- **Style:** Minimalist, warm, and professional with an accessible AA contrast baseline.
- **Color Palette:**
  - **Base:** Off-white `#F7F5F2`, light beige `#EFE9E4`, cool gray `#E1E5E7`.
  - **Typography Surfaces:** Warm gray `#C8CFD6`, charcoal text `#29323D`.
  - **Accents:** Teal `#2E9C9D`, muted blue-green `#4FA8A8` for interactive elements.
  - **Status:**
    - Success `#4CAF83`
    - Warning `#E9A23B`
    - Critical `#E57373`
    - AI Highlight `#5BD1C9`
- **Typography:** Inter (preferred) in 8pt scale increments.
  - Headline (H1): 28/36 semi-bold
  - H2: 24/32 semi-bold
  - H3: 20/28 medium
  - Body Large: 16/24 regular
  - Body Small: 14/20 regular
  - Caption: 12/16 medium
- **Iconography:** Line icons with rounded corners and 2px stroke weight. Use consistent 24px bounding boxes.
- **Shadows:** Soft ambient shadow `0 10px 30px rgba(41, 50, 61, 0.08)`.
- **Corner Radius:** Default 12px, with 8px for inputs and 16px for prominent cards.
- **Spacing System:** 8px grid with stacking tokens (4/8/12/16/24/32/48/64).

## 3. Global Layout
### 3.1 Desktop
- **Header:**
  - Left: "Noeia" logotype.
  - Center: Search bar (full-text search across patients, sessions).
  - Right: Notification bell, "Add" pill button, user avatar with dropdown (Settings, Dark Mode, Logout).
- **Navigation:** Right-aligned vertical sidebar with icons + labels; collapsible to icon-only state.
  - Sections: Home, Calendar, Patients, Session Notes, Billing, Insights, Settings.
- **Content Area:** Max width 1280px, aligned left with generous whitespace.

### 3.2 Mobile
- **Header:** Sticky top bar with search icon, notifications, and quick add.
- **Navigation:** Bottom navigation bar with 5 primary destinations (Home, Calendar, Patients, Notes, Billing). Insights accessible via overflow.
- **Patterns:** Stack cards and charts vertically; introduce horizontal scroll for modules.

## 4. Components
### 4.1 Buttons
- Primary: Filled teal `#2E9C9D`, white text, hover `#278788`.
- Secondary: Outline with teal text and border.
- Tertiary: Text button with accent color.
- Destructive: Filled critical color.

### 4.2 Inputs & Search
- Rounded 8px corners, inset shadow, icon-leading search fields.
- States: default, focus (accent border + glow), error (critical border).

### 4.3 Cards
- Modular cards with title, subtitle, optional badge.
- Support AI tag chips, quick action buttons, and insights footers.

### 4.4 Tables
- Zebra striping with subtle background `#F2F6F8` for even rows.
- Sticky header with sort icons.
- Bulk actions row pinned to top.

### 4.5 Tabs
- Underline style with accent indicator.
- Support icon-leading variant for AI-related tabs.

### 4.6 Modals
- Large (960px) for session details, medium (720px) for patient profiles, small (480px) for quick add.
- Include fade + scale transition.

### 4.7 Charts
- Use soft gradients; highlight key data points with accent dots.
- Provide tooltips with rounded edges and micro-shadows.

## 5. Screen Specifications
### 5.1 Home Dashboard (Desktop)
- **Hero Welcome:** Greeting with date and motivational quote.
- **Widgets Grid (2x2 layout):**
  1. Today’s Sessions list (3 items max) with time, patient, quick join button.
  2. Pending Payments card with total amount, due count, CTA.
  3. Patients at Risk card (AI flagged) using status chips and color-coded severity.
  4. Monthly Revenue Overview chart.
- **Secondary Row:**
  - AI Suggestions panel (vertical list of actions, each with badge).
  - Well-being tip card with illustration.
- **Footer:** Shortcut tiles (Add Session, Add Patient, Import Data).

### 5.1b Home Dashboard (Mobile)
- Stack hero, key metrics cards, and vertically scrollable widgets.
- Today’s Sessions condensed into accordion cards with swipe actions.

### 5.2 Calendar
- **Desktop Layout:** Split view 20/80. Left mini calendar with sync + filter toggles. Right weekly calendar with columns for each weekday, sticky timeline.
- **Top Controls:** Today button, left/right arrows, view toggle (Week/Month/List), search, settings gear.
- **Session Blocks:** Soft gradient backgrounds based on session type. Quick icons: video, in-person, payment status.
- **Session Modal Tabs:**
  - Overview: Editable metadata, reminder options (WhatsApp/SMS/Email toggles), payment status toggle, AI-recommended follow-up.
  - AI Notes: Last session summary, emotional highlights (color-coded chips), progress sparkline.
  - History: Chronological list with session outcomes.
- **Mobile:** Scrollable weekly list with floating "+" FAB.

### 5.3 Patients
- **Desktop Table:** Multi-select checkboxes, column sorting, filter bar with chips for labels, payment status, therapy type.
- **Bulk Actions:** Export, Send Reminder, Assign Professional.
- **Profile Drawer:** Slides from right with tabs: Overview (demographics, tags), Upcoming Sessions, Payments (ledger), AI Notes (persona summary, risk indicators).
- **Mobile View:** Card list showing patient name, upcoming session, pending payment badge; tap to expand for more.

### 5.4 Session Notes
- **Desktop:** Two-pane (30/70). Left list with patient search, pinned sessions, AI suggestions. Right editor with tabs (Manual Notes, AI Summary, History).
- **Editor:** Rich text controls in top toolbar, autosave indicator, collaboration avatar stack.
- **AI Summary:** Emotion radar, highlights, recommended prompts.
- **History Tab:** Timeline of note versions with restore option.
- **Mobile:** Single column; bottom tab bar to switch sections.

### 5.5 Billing
- **Desktop Table:** Columns ordered: Date, Professional, Patient, Session Type, Payment Type, Price, Center Commission, Professional Charge, Status, Payment Date. Inline status badges and quick actions.
- **Totals:** Summary strip showing totals (Collected, Pending, Overdue) with download buttons (CSV/PDF).
- **Filters:** Date range picker, session type dropdown, payment status chips.
- **Mobile:** Cards summarizing key fields, expandable details for breakdown.

### 5.6 Insights / Reports
- **Layout:** Responsive grid of charts (Sessions trend, Income vs Unpaid, Session type distribution) plus AI insight cards.
- **Filters:** Multi-select chips for professional, time period, therapy type.
- **Export:** Primary button for "Share Report"; secondary for "Download PDF".
- **AI Insights:** Narrative cards summarizing patterns with inline badges.

## 6. Microinteractions
- Hover highlights on cards and table rows.
- Smooth fade-in for modals and tooltips (200ms ease).
- Toggle switches for enabling reminders or AI-generated summaries.

## 7. Accessibility & Inclusivity
- Contrast ratios meeting WCAG AA.
- Support keyboard navigation with focus outlines.
- Provide text alternatives for icons and chart data summaries.
- Dark mode palette with deep navy background `#141C24` and muted teal accents `#3DC2C1`.

## 8. IA & Navigation Flow
1. Landing on Home dashboard for overview and AI suggestions.
2. Deep links to Calendar, Patients, Notes, Billing, Insights.
3. Modals and drawers ensure workflows remain within context without losing global navigation.

## 9. Future Enhancements
- AI chat assistant embedded within floating help widget.
- Shared documents library for therapy resources.
- Patient portal integration.

