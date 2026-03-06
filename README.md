Metric/Imperial Unit Converter
A clean, dark-themed web application that provides real-time conversion for length, volume, and mass between metric and imperial systems.

🚀 What I Learned
This project allowed me to practice balancing a bold visual design with functional JavaScript logic.

1. Advanced Responsive Layouts
Viewport Units (vh/vw): I used height: 40vh and width: 100vw to create a header that perfectly adapts to the screen height, ensuring the "hero" section of the converter feels impactful on any device.

Flexbox Alignment: I utilized display: flex with flex-direction: column and justify-content: space-around to keep the input elements and buttons perfectly centered and spaced, regardless of screen size.

Dynamic Sizing: I used em and rem units for typography and buttons (e.g., font-size: 6rem for the input) so that the UI elements scale proportionately.

2. JavaScript Logic & DOM Interaction
Dynamic Content Updates: I learned how to use innerHTML and template literals to inject calculated results directly into the page.

Mathematical Precision: I used the .toFixed(3) method to ensure that conversion results are user-friendly and restricted to three decimal places.

Event Handling: Implemented an event listener on the "Convert" button to trigger all three conversion categories (Length, Volume, Mass) simultaneously.

3. UI/UX Design
High Contrast Themes: I practiced working with a specific color palette (#881337 for the header and #111827 for the body) to create a modern, high-contrast look that is easy on the eyes.

Form Styling: I learned how to style number inputs, including removing default borders and adding custom focus-like styles with border: 3px solid #FFF1F2.

📂 Project Structure
index.html: Contains the semantic structure, separating the interactive "Upper" section from the "Lower" results section.

styles.css: Defines the responsive behavior and the dark-mode aesthetic.

index.js: Contains the conversion constants (e.g., 1 meter = 3.281 feet) and the logic to handle user input.

🛠️ Technologies Used
HTML5: For the structural layout.

CSS3: Featuring Flexbox and Viewport units.

JavaScript (ES6): For calculations and DOM manipulation.
