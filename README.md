# PhysioDR - Physiotherapy Clinic Website

A complete, modern website for a physiotherapy clinic built with Next.js, Spring Boot, and MySQL.

## Features

- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Backend**: Spring Boot REST APIs
- **Database**: MySQL
- **Responsive Design**: Mobile-friendly with clean, calm design
- **Pages**: Home, About, Doctors, Services, Equipment, Fees, Booking, Gallery, Blog, FAQ, Contact
- **Admin Panel**: Manage doctors, services, and view bookings
- **Floating Buttons**: WhatsApp and call buttons for quick contact
- **SEO Ready**: Proper meta tags and fast loading

## Prerequisites

Before running this project, ensure you have:

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **Java 17** - [Download here](https://www.oracle.com/java/technologies/downloads/)
3. **Maven** - [Download here](https://maven.apache.org/download.cgi)
4. **MySQL** (v8.0 or higher) - [Download here](https://dev.mysql.com/downloads/mysql/)

## Project Structure

```
physioDR/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/      # Next.js app router pages
│   │   └── components/ # Reusable components
│   ├── package.json
│   └── tailwind.config.ts
├── backend/           # Spring Boot backend application
│   ├── src/
│   │   └── main/
│   │       ├── java/com/physiodr/
│   │       └── resources/
│   └── pom.xml
└── README.md
```

## Setup Instructions

### 1. Database Setup

1. Install MySQL and start the MySQL service
2. Create a new database:
   ```sql
   CREATE DATABASE physiodr;
   ```
3. Update database credentials in `backend/src/main/resources/application.properties`:
   ```properties
   spring.datasource.username=your_mysql_username
   spring.datasource.password=your_mysql_password
   ```

### 2. Backend Setup (Spring Boot)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project using Maven:
   ```bash
   mvn clean install
   ```

3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8080`

4. Verify the API is running by visiting:
   ```
   http://localhost:8080/api/bookings
   ```

### 3. Frontend Setup (Next.js)

1. Install Node.js if not already installed

2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:3000`

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### 4. Production Build

**Frontend:**
```bash
cd frontend
npm run build
npm start
```

**Backend:**
```bash
cd backend
mvn clean package
java -jar target/physio-dr-backend-1.0.0.jar
```

## API Endpoints

### Bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/{id}` - Get booking by ID
- `PUT /api/bookings/{id}` - Update booking
- `DELETE /api/bookings/{id}` - Delete booking

## Pages Overview

1. **Home** (`/`) - Hero section, services, why choose us, reviews, timings
2. **About Us** (`/about`) - Clinic story, mission, vision, stats
3. **Doctors** (`/doctors`) - Team profiles with booking buttons
4. **Services** (`/services`) - All treatments with details and pricing
5. **Equipment** (`/equipment`) - Machines and facilities
6. **Fees** (`/fees`) - Pricing table and payment options
7. **Book Appointment** (`/book-appointment`) - Booking form
8. **Gallery** (`/gallery`) - Photos and videos
9. **Blog** (`/blog`) - Health tips articles
10. **FAQ** (`/faq`) - Common questions
11. **Contact** (`/contact`) - Contact form and location
12. **Admin Panel** (`/admin`) - Manage bookings and content
13. **Privacy Policy** (`/privacy-policy`)
14. **Terms** (`/terms`)

## Customization

### Replace Placeholder Content

1. **Text**: Search for placeholder text in the codebase and replace with your actual content
2. **Images**: Replace emoji placeholders with actual images in the `public/` folder
3. **Contact Info**: Update phone numbers, email, and address in:
   - `frontend/src/components/Footer.tsx`
   - `frontend/src/components/FloatingButtons.tsx`
   - `frontend/src/app/contact/page.tsx`
4. **Services**: Update services list in `frontend/src/app/services/page.tsx`
5. **Doctors**: Update doctor profiles in `frontend/src/app/doctors/page.tsx`
6. **Fees**: Update pricing in `frontend/src/app/fees/page.tsx`

### Database Schema

The application automatically creates the following tables on first run:

- `bookings` - Stores appointment bookings

## Troubleshooting

### Frontend Issues

**Problem**: TypeScript errors about missing modules
**Solution**: Run `npm install` to install all dependencies

**Problem**: Port 3000 already in use
**Solution**: Kill the process or use a different port:
```bash
npm run dev -- -p 3001
```

### Backend Issues

**Problem**: Database connection error
**Solution**: 
- Ensure MySQL is running
- Check credentials in `application.properties`
- Verify the database exists

**Problem**: Port 8080 already in use
**Solution**: Change port in `application.properties`:
```properties
server.port=8081
```

## Technologies Used

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (Icons)

### Backend
- Spring Boot 3.2
- Spring Data JPA
- MySQL Connector
- Maven

## License

This project is provided as-is for educational and commercial use.

## Support

For issues or questions, please contact the development team.

---

**Note**: This is a complete working website with sample data. You can customize all content to match your clinic's information.
