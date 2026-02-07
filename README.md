# Lead Manager Mobile App

A React Native mobile application for managing customer inquiries and leads. Built with Expo and TypeScript.

## 📱 Features

- **Login Screen**: Simple authentication with demo credentials
- **Lead Creation Form**: Add new leads with name, email, phone, and service information
- **Leads List**: View all submitted leads with search and filter functionality
- **Local Storage**: Data persistence using AsyncStorage
- **Modern UI**: Clean, intuitive interface with proper styling

## 🛠 Stack Used

### Frontend Framework
- **React Native** (v0.81.5) - Cross-platform mobile development framework
- **Expo** (v54.0.33) - Development platform and build tools
- **TypeScript** (v5.9.2) - Type-safe JavaScript for better code quality

### Navigation & Routing
- **React Navigation** (v6.x) - Screen navigation and routing
- **Native Stack Navigator** - Performance-optimized navigation stack

### Data Storage
- **AsyncStorage** - Local data persistence on device
- **TypeScript Interfaces** - Type-safe data models

### UI & Styling
- **React Native StyleSheet** - Native styling system
- **KeyboardAvoidingView** - Proper keyboard handling
- **Platform-specific behaviors** - iOS/Android optimizations

### Development Tools
- **ESLint & TypeScript** - Code quality and type checking
- **Expo CLI** - Development server and build tools

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

### User Journey
```
📱 Launch App
    ↓
🔐 Login Screen (admin@test.com / 123456)
    ↓
📝 Add Lead Screen (Create new customer leads)
    ↓
📊 Leads List Screen (View, search, and manage leads)
    ↓
🔄 Navigation between screens as needed
```

### Detailed Flow

1. **Authentication Flow**
   - User opens app → Login screen appears
   - Enter credentials → Validation check
   - Success → Navigate to Add Lead screen
   - Failure → Show error message

2. **Lead Creation Flow**
   - Add Lead screen → Fill form fields
   - Input validation → Check required fields and email format
   - Save lead → Store in AsyncStorage
   - Success → Navigate to Leads List with confirmation

3. **Lead Management Flow**
   - Leads List screen → Display all saved leads
   - Search functionality → Filter leads in real-time
   - Add new lead → Navigate back to Add Lead screen
   - Pull to refresh → Reload leads from storage

### Navigation Structure
```
Login (Root)
├── AddLead (After login)
└── Leads (From AddLead or direct navigation)
    └── AddLead (Via "Add Lead" button)
```

### Data Flow
```
User Input → Form Validation → AsyncStorage → UI Update
    ↓
Search Query → Filter Local Data → Update Display
    ↓
Pull to Refresh → Reload from AsyncStorage → Refresh UI
```

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

### Phase 1: Core Feature Enhancements (1-2 weeks)

#### Lead Management
- **Lead Editing**: Edit existing lead information inline or via detail screen
- **Lead Deletion**: Remove leads with confirmation dialog
- **Lead Status Management**: Track lead status (New, Contacted, Qualified, Converted, Lost)
- **Lead Details Screen**: Comprehensive view of individual lead information
- **Bulk Operations**: Select and delete multiple leads at once

#### Advanced Search & Filtering
- **Multi-criteria Search**: Search by multiple fields simultaneously
- **Service Type Filtering**: Filter leads by specific service categories
- **Date Range Filtering**: Filter leads by creation date or last updated
- **Sorting Options**: Sort by name, date, service, or custom criteria
- **Saved Searches**: Save frequently used search filters

### Phase 2: Data & Integration (2-3 weeks)

#### Cloud Storage & Sync
- **Firebase Integration**: Real-time data synchronization
- **Offline-First Architecture**: Seamless offline/online experience
- **Data Backup & Restore**: Export/import lead data
- **Multi-device Sync**: Access leads across multiple devices

#### User Management
- **User Authentication**: Real user login system
- **Role-Based Access**: Admin, Manager, and Agent roles
- **Team Collaboration**: Share leads among team members
- **Activity Logging**: Track who modified what and when

### Phase 3: Advanced Features (3-4 weeks)

#### Communication & Automation
- **Email Integration**: Send emails directly from app
- **SMS Integration**: Text message capabilities
- **Push Notifications**: Follow-up reminders and lead updates
- **Calendar Integration**: Schedule appointments and follow-ups
- **Automated Workflows**: Trigger actions based on lead status

#### Analytics & Reporting
- **Lead Analytics**: Conversion rates, source tracking, performance metrics
- **Custom Reports**: Generate detailed lead reports
- **Dashboard**: Overview of key metrics and trends
- **Data Visualization**: Charts and graphs for better insights

### Phase 4: UI/UX & Performance (1-2 weeks)

#### Enhanced User Experience
- **Dark Mode Support**: System-wide dark theme compatibility
- **Custom Animations**: Smooth transitions and micro-interactions
- **Gesture Controls**: Swipe actions for quick operations
- **Accessibility Features**: VoiceOver, screen reader support
- **Internationalization**: Multi-language support

#### Performance Optimization
- **Code Splitting**: Optimize app loading time
- **Image Optimization**: Efficient image handling and caching
- **Memory Management**: Prevent memory leaks and optimize usage
- **Background Tasks**: Handle data sync in background

### Phase 5: Testing & Deployment (1 week)

#### Quality Assurance
- **Unit Testing**: Comprehensive test coverage for all functions
- **Integration Testing**: Test component interactions
- **E2E Testing**: Automated end-to-end user flows
- **Performance Testing**: Load testing and optimization
- **Security Testing**: Data protection and vulnerability assessment

#### Deployment & DevOps
- **CI/CD Pipeline**: Automated build and deployment
- **App Store Deployment**: Publish to App Store and Google Play
- **Version Management**: Semantic versioning and release notes
- **Crash Reporting**: Real-time error monitoring and analytics

### Technical Improvements

#### Code Quality
- **State Management**: Implement Redux or Context API for complex state
- **Error Boundaries**: Better error handling and user feedback
- **Logging System**: Comprehensive logging for debugging
- **Code Documentation**: JSDoc comments and API documentation

#### Architecture
- **Modular Architecture**: Separate business logic from UI
- **Service Layer**: Abstract data operations
- **Repository Pattern**: Clean data access layer
- **Dependency Injection**: Improve testability and maintainability

### Estimated Timeline: 8-12 weeks for full implementation

### Priority Order
1. **High Priority**: Lead editing, advanced search, cloud sync
2. **Medium Priority**: User management, analytics, automation
3. **Low Priority**: Advanced animations, internationalization, custom themes

This roadmap would transform the basic lead management app into a comprehensive, enterprise-ready solution with modern features and robust architecture.

## 📄 License

This project is for evaluation purposes only. No commercial use.

## 🤝 Contributing

This is a demo project for skill verification. For the actual evaluation, please refer to the original requirements.

---

**Built with ❤️ for the Full-Stack Mobile App Developer role evaluation**
