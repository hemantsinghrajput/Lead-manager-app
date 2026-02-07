# Lead Manager Mobile App

A React Native mobile application for managing customer inquiries and leads. Built with Expo and TypeScript.

## 📱 Features

- **Login Screen**: Simple authentication with demo credentials
- **Lead Creation Form**: Add new leads with name, email, phone, and service information
- **Leads List**: View all submitted leads with search and filter functionality
- **Local Storage**: Data persistence using AsyncStorage
- **Modern UI**: Clean, intuitive interface with proper styling

## 🛠 Tech Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and build tools
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Screen navigation and routing
- **AsyncStorage**: Local data storage
- **React Native Elements**: UI components

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your mobile device (for testing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hemantsinghrajput/Lead-manager-app.git
cd Lead-manager-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Scan the QR code with Expo Go app on your mobile device

## 📋 App Flow

1. **Login Screen** → User enters credentials (admin@test.com / 123456)
2. **Add Lead Screen** → Create new customer leads with required information
3. **Leads List Screen** → View all leads with search functionality

## 🔐 Login Credentials

- **Email**: admin@test.com
- **Password**: 123456

## 📱 Screens

### Login Screen
- Clean, centered login form
- Input validation
- Helpful hints for demo credentials

### Add Lead Screen
- Form with fields for name, email, phone, and service
- Input validation for required fields
- Email format validation
- Success/error feedback
- Navigation to leads list after successful submission

### Leads List Screen
- Display all saved leads in card format
- Real-time search by name, email, or service
- Pull-to-refresh functionality
- Empty state handling
- Add new lead button
- Lead count display

## 💾 Data Storage

The app uses AsyncStorage for local data persistence:
- Leads are stored locally on the device
- Data persists between app sessions
- No internet connection required for core functionality

## 🎨 UI/UX Features

- Modern, clean design with consistent styling
- Responsive layouts
- Proper error handling and user feedback
- Loading states and empty states
- Intuitive navigation flow
- Card-based design for better visual hierarchy

## 🔧 Development Commands

```bash
# Start development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on web
npm run web
```

## 📦 Dependencies

- `expo`: Core Expo framework
- `react-native`: React Native framework
- `@react-navigation/native`: Navigation library
- `@react-navigation/native-stack`: Stack navigator
- `@react-native-async-storage/async-storage`: Local storage
- `react-native-screens`: Optimized native screens
- `react-native-safe-area-context`: Safe area handling

## 🚀 Live Preview

You can test the app live using Expo:
1. Install Expo Go on your mobile device
2. Scan the QR code from the development server
3. Or use the web version at [Expo Snack](https://snack.expo.dev)

## 🔄 Improvements with More Time

With additional development time, I would implement:

1. **Enhanced Features**:
   - Lead editing and deletion
   - Lead status management (New, Contacted, Converted, Lost)
   - Lead categorization and tags
   - Export functionality (CSV, PDF)

2. **Advanced Search & Filtering**:
   - Filter by service type
   - Date range filtering
   - Advanced search with multiple criteria
   - Sorting options

3. **Data Management**:
   - Cloud sync with Firebase/Supabase
   - Data backup and restore
   - Multi-user support with authentication
   - Role-based access control

4. **UI/UX Enhancements**:
   - Dark mode support
   - Custom animations and transitions
   - Better accessibility features
   - Offline-first architecture

5. **Performance & Testing**:
   - Comprehensive unit and integration tests
   - Performance optimization
   - Error analytics and crash reporting
   - Automated CI/CD pipeline

6. **Additional Features**:
   - Push notifications for lead follow-ups
   - Calendar integration for appointments
   - Email/SMS integration for contact
   - Analytics dashboard
   - Lead scoring system

## 📄 License

This project is for evaluation purposes only. No commercial use.

## 🤝 Contributing

This is a demo project for skill verification. For the actual evaluation, please refer to the original requirements.

---

**Built with ❤️ for the Full-Stack Mobile App Developer role evaluation**
