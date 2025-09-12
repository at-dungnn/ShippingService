# Express Delivery Dashboard Component

## Overview
A responsive mobile-first dashboard component built with Angular v19 and PrimeNG for the Express Delivery service.

## Features
- ✅ Mobile-first responsive design
- ✅ Summary cards with statistics
- ✅ Recent orders table with p-table
- ✅ Quick action buttons
- ✅ Footer navigation with p-tabMenu
- ✅ Notification system
- ✅ Dark mode support
- ✅ Accessibility features
- ✅ Production-ready code

## Usage

### 1. Import the component
```typescript
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
```

### 2. Add to routes
```typescript
{ path: 'dashboard', component: DashboardComponent }
```

### 3. Navigate to dashboard
```typescript
this.router.navigate(['/dashboard']);
```

## Component Structure

### TypeScript (dashboard.component.ts)
- Uses Angular v19 signals for reactive data
- Standalone component with proper imports
- TypeScript interfaces for type safety
- Mock data for demonstration

### HTML (dashboard.component.html)
- Semantic HTML structure
- PrimeNG components integration
- Responsive grid layout
- Accessibility attributes

### CSS (dashboard.component.css)
- Mobile-first responsive design
- CSS Grid and Flexbox
- Smooth animations and transitions
- Dark mode support
- Print styles

## Key Features

### Summary Cards
- Orders Today: 124 (+12%)
- In Transit: 89 (+5%)
- Delivered: 1,247 (+18%)
- Cancelled: 23 (-3%)

### Recent Orders Table
- Order ID, Customer, Status, Amount, Time
- Status badges with color coding
- Action buttons for view/edit
- Responsive table with horizontal scroll

### Quick Actions
- New Order button
- Track Package button
- Responsive grid layout

### Footer Navigation
- Home, Orders, Analytics, Profile
- Icon-based navigation
- Active state highlighting

## Responsive Breakpoints
- Mobile: < 640px (default)
- Tablet: 640px - 768px
- Desktop: 768px - 1024px
- Large Desktop: 1024px+

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Dependencies
- Angular v19
- PrimeNG v19
- PrimeFlex
- PrimeIcons

## Customization
The component is highly customizable through CSS custom properties and component inputs. You can easily modify colors, spacing, and layout to match your brand guidelines.
