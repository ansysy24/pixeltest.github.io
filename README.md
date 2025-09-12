# Car Showcase Website

A modern, dynamic car showcase website built with vanilla JavaScript. Features a single-page application with client-side routing, dynamic content generation, and a clean, responsive design.

## 🚗 Live Demo

- **Main Website**: Open `index.html` in your browser
- **Interactive Demo**: Open `demo.html` to see the system in action

## ✨ Features

- **Dynamic Content**: All content generated from JavaScript data
- **Single Page Application**: Smooth navigation without page reloads
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Hash Routing**: Clean URLs for each vehicle (`#tesla-model-s-2024`)
- **Easy Maintenance**: Add new cars by updating data file
- **No Dependencies**: Pure vanilla JavaScript, no frameworks

## 📁 Project Structure

```
pixeltest/
├── index.html              # Main website (single page app)
├── demo.html               # Interactive demo page
├── vehicles-data.js        # Vehicle data (JSON format)
├── app.js                  # Main application logic
├── script.js              # Utility functions
├── styles.css             # CSS styles
├── vehicles_import.csv    # Original data source
└── README.md              # This file
```

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Navigate** by clicking on car cards or using the navigation menu

## 🎯 How It Works

### Data-Driven Architecture
- Vehicle information is stored in `vehicles-data.js`
- The app dynamically generates all content from this data
- No hardcoded HTML for individual vehicles

### Dynamic Rendering
- `app.js` contains the main `CarShowcaseApp` class
- Renders navigation, home page, and vehicle detail pages
- Uses template strings to generate HTML dynamically

### Client-Side Routing
- Uses URL hash fragments for routing (`#vehicle-id`)
- Browser back/forward buttons work correctly
- Each vehicle has its own bookmarkable URL

## 🛠️ Customization

### Adding New Vehicles

1. **Edit `vehicles-data.js`**:
```javascript
{
    id: "new-car-2024",
    name: "New Car Model",
    price: 50000,
    year: 2024,
    model: "Model Name",
    make: "Brand",
    condition: "new",
    image_url: "https://example.com/image.jpg",
    description: "Car description...",
    specs: {
        engine: "V6",
        power: "300 HP",
        acceleration: "5.0 seconds",
        range: "400 miles",
        topSpeed: "150 mph"
    }
}
```

2. **The website automatically updates** - no other changes needed!

### Styling Changes

- **Edit `styles.css`** for visual changes
- **Modify template methods** in `app.js` for layout changes
- **All changes are immediate** - just refresh the browser

### Adding Tracking

If you need to add tracking (Google Analytics, etc.):

1. **Add scripts to `index.html`** in the `<head>` section
2. **Or create a `tracking.js`** file and include it
3. **Or add tracking code** to the `renderPage()` method in `app.js`

## 📊 Vehicle Data Structure

Each vehicle object includes:

```javascript
{
    id: "unique-identifier",
    name: "Display Name",
    price: 50000,
    year: 2024,
    model: "Model Name",
    make: "Brand",
    condition: "new",
    image_url: "https://example.com/image.jpg",
    description: "Full description...",
    address: "Location",
    exterior_color: "Color",
    mileage_unit: "MI",
    mileage_value: 10000,
    tags: ["tag1", "tag2"],
    specs: {
        engine: "Engine Type",
        power: "Power Output",
        acceleration: "0-60 time",
        range: "Range",
        topSpeed: "Top Speed"
    }
}
```

## 🎨 Design Features

- **Modern UI**: Clean, professional design
- **Responsive Grid**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and transitions
- **Card-Based Layout**: Easy to scan vehicle information
- **Consistent Styling**: Unified design across all pages

## 🔧 Technical Details

- **No Build Process**: Just open HTML files in browser
- **No Dependencies**: Pure vanilla JavaScript
- **ES6+ Features**: Uses modern JavaScript (classes, template literals, arrow functions)
- **CSS Grid & Flexbox**: Modern CSS layout techniques
- **Hash Routing**: Simple client-side routing system

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Friendly**: Responsive design works on all devices
- **No Internet Required**: Works offline (except for images)

## 🚀 Performance

- **Fast Loading**: Minimal JavaScript, optimized CSS
- **No External Dependencies**: No CDN requests
- **Efficient Rendering**: Only renders what's needed
- **Small File Size**: Lightweight and fast

## 🤝 Contributing

1. **Fork the repository**
2. **Make your changes**
3. **Test thoroughly**
4. **Submit a pull request**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using vanilla JavaScript**
