# Recipe Finder

A responsive web app built with HTML, CSS, and JavaScript that lets you search recipes by name using TheMealDB API, with clean UI and error handling for invalid searches. It uses [TheMealDB API](https://www.themealdb.com/api.php) for recipe data.

---

## Live Demo

👉 **[View Live Page](https://receipe-finder-weld.vercel.app/)**  

---

## Features

- **Search Recipes:** Enter a recipe name and click "Search" to see matching recipes.
- **Recipe Cards:** Results are shown as cards with image, name, category, and a short description.
- **Show More:** If instructions are long, click "Show More" to view the full recipe on a separate page.
- **Responsive Design:** Works well on desktop and mobile. On small screens, recipe images stack above the description.
- **Sticky Footer:** Footer stays at the bottom even if the page is empty or short.
- **Background Image:** Attractive full-screen background image for a modern look.
- **Error handling:** Error handling for invalid searches with proper massage.

---

## How to Use

1. **Open `index.html` in your browser.**
2. **Type a recipe name** (e.g., "cake") in the search box and click **Search**.
3. **Browse the results:** Each recipe appears as a card.
4. **See full details:** Click the "Show More" button on any card to view the complete recipe instructions on a new page.
5. **Return:** Use your browser's back button to return to your search results.

---

## Project Structure

```
.
├── index.html
├── styles.css
└── script.js
```

- **`index.html`:** The main HTML file.
- **`styles.css`:** The CSS file for styling the app.
- **`script.js`:** The JavaScript file for app functionality.

---

## Technologies Used

- **HTML5:** For structuring the content.
- **CSS3:** For styling and layout.
- **JavaScript:** For interactive features.
- **TheMealDB API:** For fetching recipe data.

---


## Technical Details

- **API:** Uses [TheMealDB](https://www.themealdb.com/api.php) for recipe data.
- **Cards:** Each recipe is shown as a card with image on the left (desktop) or top (mobile).
- **Navigation:** "Show More" saves the selected recipe on `recipe.html`.
- **Responsive:** Uses CSS Flexbox and media queries for layout.
- **Footer:** Always at the bottom, using flexbox layout.

---

## Credits

- **API:** [TheMealDB](https://www.themealdb.com/api.php)
- **Background Image:** Unsplash and more.
- **Youtube:** Helping videos.

