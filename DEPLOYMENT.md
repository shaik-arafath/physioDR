# Deployment Guide - PhysioDR Website

This guide will help you deploy the PhysioDR website to production using free hosting services.

## Architecture

- **Frontend**: Vercel (Next.js)
- **Backend**: Render (Spring Boot with Docker)
- **Database**: Aiven (MySQL)

---

## Step 1: Set Up Aiven MySQL Database

1. **Create an Aiven account** at https://aiven.io/
   - No credit card required
   - Free tier: 1 CPU, 1 GB RAM, 1 GB disk

2. **Create a new MySQL service**:
   - Click "Create Service"
   - Select "MySQL"
   - Choose the free plan
   - Name it `physiodr-db`

3. **Get connection details**:
   - Go to your service dashboard
   - Click "Connection Information"
   - Copy these values:
     - Host
     - Port
     - User
     - Password
     - Database name

4. **Note the connection URL format**:
   ```
   jdbc:mysql://<host>:<port>/<database>?ssl-mode=REQUIRED&serverTimezone=UTC
   ```

---

## Step 2: Push Code to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository** at https://github.com/new

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/physioDR.git
   git branch -M main
   git push -u origin main
   ```

---

## Step 3: Deploy Backend to Render

1. **Create a Render account** at https://render.com/

2. **Create a new Web Service**:
   - Click "New +"
   - Select "Web Service"
   - Connect your GitHub repository
   - Set the **Root Directory** to `backend`
   - Select **Docker** as the environment
   - Click "Create Web Service"

3. **Add Environment Variables**:
   In the Render dashboard, add these environment variables:
   
   | Variable | Value |
   |----------|-------|
   | `PORT` | `8080` |
   | `DATABASE_URL` | `jdbc:mysql://<aiven-host>:<port>/<database>?ssl-mode=REQUIRED&serverTimezone=UTC` |
   | `DATABASE_USERNAME` | `<aiven-user>` |
   | `DATABASE_PASSWORD` | `<aiven-password>` |
   | `FRONTEND_URL` | `https://your-vercel-app.vercel.app` (leave as localhost for now) |

4. **Deploy**:
   - Render will automatically build and deploy
   - Wait for the deployment to complete
   - Copy the Render URL (e.g., `https://physiodr-backend.onrender.com`)

---

## Step 4: Deploy Frontend to Vercel

1. **Create a Vercel account** at https://vercel.com/

2. **Deploy your project**:
   - Click "Add New Project"
   - Import your GitHub repository
   - Set the **Root Directory** to `frontend`
   - Click "Deploy"

3. **Add Environment Variable**:
   - After deployment, go to your project settings
   - Add environment variable:
     - `NEXT_PUBLIC_API_URL`: `https://your-render-backend.onrender.com`
   - Redeploy

4. **Copy the Vercel URL** (e.g., `https://physio-clinic.vercel.app`)

---

## Step 5: Update Backend CORS Configuration

1. Go back to Render dashboard
2. Update the `FRONTEND_URL` environment variable:
   - Set it to your Vercel URL: `https://your-vercel-app.vercel.app`
3. Redeploy the backend

---

## Step 6: Test the Deployment

1. Visit your Vercel URL
2. Test the booking form
3. Check if data is saved to the database

---

## Important Notes

### Render Sleep Issue
Render's free tier puts your backend to sleep after 15 minutes of inactivity. The first request can take 30-50 seconds to wake up.

**Solutions**:
1. Use a free uptime pinger (e.g., UptimeRobot, Better Uptime) to ping your backend every 10 minutes
2. Upgrade to a paid Render plan (starting at $7/month)
3. Consider Railway's paid plan (backend + database in one place, no sleep)

### Aiven Service Shutdown
Aiven may shut down services that are unused for extended periods. They send a notice first. To avoid this:
- Keep your service active with regular usage
- Or upgrade to a paid plan

### Environment Variables Summary

**Render (Backend)**:
- `PORT`: 8080
- `DATABASE_URL`: Your Aiven MySQL connection URL with `?ssl-mode=REQUIRED`
- `DATABASE_USERNAME`: Aiven username
- `DATABASE_PASSWORD`: Aiven password
- `FRONTEND_URL`: Your Vercel frontend URL

**Vercel (Frontend)**:
- `NEXT_PUBLIC_API_URL`: Your Render backend URL

---

## Alternative: Railway (Simpler Paid Option)

If you can pay a small amount, Railway is simpler:
- Backend and MySQL in one place
- No sleep issue
- Starting at $5/month

Steps:
1. Create Railway account at https://railway.app/
2. Create a new project
3. Add MySQL database
4. Add backend service from GitHub
5. Configure environment variables
6. Deploy

---

## Troubleshooting

### Backend Won't Start
- Check Render logs for errors
- Verify database connection details
- Ensure `ssl-mode=REQUIRED` is in the connection URL

### CORS Errors
- Verify `FRONTEND_URL` is set correctly in Render
- Check that the Vercel URL is correct
- Redeploy both services after changing URLs

### Database Connection Failed
- Verify Aiven service is running
- Check connection credentials
- Ensure SSL mode is set to REQUIRED

---

## Local Development

To run locally with the production database:

```bash
# Backend
cd backend
mvn clean install
mvn spring-boot:run

# Set environment variables or update application.properties with Aiven credentials
```

---

## Support

For issues with:
- **Vercel**: https://vercel.com/docs
- **Render**: https://render.com/docs
- **Aiven**: https://aiven.io/docs
