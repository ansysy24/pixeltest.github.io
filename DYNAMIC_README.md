# Dynamic Car Showcase - Template System

This project has been refactored from a static website to a dynamic template-based system using JavaScript.

## 🚀 What Changed

### Before (Static)
- 6 separate HTML files (`index.html`, `car1.html`, `car2.html`, etc.)
- Repetitive code across all files
- Hard to maintain and update
- Manual navigation management

### After (Dynamic)
- Single `index.html` with dynamic content
- JavaScript-driven template system
- Centralized data management
- Automatic navigation generation

## 📁 New File Structure

```
pixeltest/
├── index.html              # Main dynamic page
├── demo.html               # Demo page showing the system
├── config-switcher.html    # Configuration management interface
├── config.js               # Configuration settings
├── tracking-templates.js   # Tracking script templates
├── vehicles-data.js        # Vehicle data in JSON format
├── app.js                  # Main application logic
├── script.js              # Tracking functions (updated)
├── styles.css             # CSS (unchanged)
└── DYNAMIC_README.md      # This file
```

## 🔧 How It Works

### 1. Data Management
- Vehicle data is stored in `vehicles-data.js` as a JavaScript array
- Easy to add, remove, or modify vehicles
- All vehicle information centralized in one place

### 2. Dynamic Rendering
- `app.js` contains the `CarShowcaseApp` class
- Handles navigation generation
- Renders content based on current page/route
- Supports both home page and individual car detail pages

### 3. Routing
- Uses URL hash routing (`#tesla-model-s-2024`)
- Browser back/forward button support
- Clean URLs for each vehicle

### 4. Template System
- Navigation is generated dynamically from data
- Content is rendered based on current route
- Consistent layout across all pages

## 🎯 Key Benefits

1. **Maintainability**: Add new cars by just adding to the data array
2. **Consistency**: All pages use the same template structure
3. **Performance**: Single page application with client-side routing
4. **Scalability**: Easy to add new features or modify existing ones
5. **DRY Principle**: No more duplicate HTML code
6. **Flexible Tracking**: Switch between GTM and AdRetriever easily
7. **Configuration Management**: Easy-to-use config switcher interface

## 🚀 Usage

### Adding a New Vehicle
1. Add vehicle data to `vehicles-data.js`:
```javascript
{
    id: "new-car-2024",
    name: "New Car Model",
    price: 50000,
    // ... other properties
    specs: {
        engine: "V6",
        power: "300 HP",
        // ... other specs
    }
}
```

2. The navigation and content will automatically update!

### Switching Tracking Providers
1. Open `config-switcher.html` in your browser
2. Select either "Google Tag Manager" or "AdRetriever Tracking"
3. Click "Apply Configuration"
4. The website will automatically use the new tracking system

### Modifying Vehicle Data
- Edit the vehicle object in `vehicles-data.js`
- Changes are immediately reflected across the site

### Customizing Templates
- Modify the `renderHomePage()` and `renderVehicleDetail()` methods in `app.js`
- Update CSS in `styles.css` as needed

### Configuration Management
- Edit `config.js` to change tracking IDs or other settings
- Use `config-switcher.html` for easy switching between providers
- Configuration is saved in localStorage for persistence

## 🧪 Testing

1. Open `demo.html` to see the dynamic system in action
2. Use the demo buttons to switch between different views
3. Test the full site at `index.html`

## 📊 Data Structure

Each vehicle object contains:
- Basic info: `id`, `name`, `price`, `year`, `make`, `model`
- Media: `image_url`
- Details: `description`, `address`, `exterior_color`
- Specifications: `specs` object with engine, power, acceleration, etc.
- Metadata: `tags`, `vin`, `trim`, `vehicle_type`

## 🔄 Migration from Static

The old static files (`car1.html`, `car2.html`, etc.) can be safely removed as they're no longer needed. The new system provides all the same functionality with better maintainability.

## 🎨 Customization

- **Styling**: Modify `styles.css`
- **Layout**: Update template methods in `app.js`
- **Data**: Edit `vehicles-data.js`
- **Tracking**: Update functions in `script.js`

This dynamic system makes the website much more maintainable and scalable while preserving all existing functionality!
