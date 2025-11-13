# SMAT Concept Website - Image Requirements Guide

This document provides a comprehensive guide for all images needed on the SMAT Concept website, including their locations, recommended sizes, and specifications.

---

## 📸 Current Image Status

### Already Available (Local):
- ✅ `logo.png` - Company logo (1.7MB - needs optimization)
- ✅ `data-digitalization.png` - Service image (1.3MB)
- ✅ `ceo-formal.png` - CEO formal photo (1.2MB)
- ✅ `ceo-casual.png` - CEO casual photo (1.3MB)
- ✅ `innovation.png` - Generic innovation image (1.3MB)
- ✅ `teamwork.png` - Generic teamwork image (1.3MB)
- ✅ `cloud-solution.png` - Cloud solutions image (1.3MB)

### Currently Using External URLs (Unsplash):
All images below are currently loaded from external Unsplash URLs. Replace these with your own branded images for better performance and branding.

---

## 🎯 Required Images by Section

### 1. HERO SECTION
**Location:** `src/app/page.tsx:18`

**Current:** External Unsplash URL
```
src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
```

**File to create:** `/public/hero-background.jpg`
- **Recommended Size:** 2560 x 1440 px (16:9 ratio)
- **Optimal File Size:** < 500 KB (compressed)
- **Format:** JPG or WebP
- **Description:** Modern technology/digital transformation background
- **Suggested Content:**
  - African cityscape with digital overlays
  - Technology infrastructure (servers, networks, data centers)
  - Abstract digital/tech patterns
  - Blue/purple color scheme preferred

**Usage in code:**
```tsx
Replace line 18 with:
src="/hero-background.jpg"
```

---

### 2. SERVICE CARDS

#### A. Data Digitalization Service
**Location:** `src/app/page.tsx:191`

**Current:** External Unsplash URL
```
src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
```

**File to create:** `/public/services/data-digitalization.jpg`
- **Recommended Size:** 800 x 600 px (4:3 ratio)
- **Optimal File Size:** < 150 KB
- **Format:** JPG or WebP
- **Description:** Data analytics dashboard, charts, graphs, digital documents
- **Color Theme:** Blue tones
- **Suggested Content:**
  - Analytics dashboards with charts
  - Document scanning/OCR in action
  - Digital data visualization
  - Business intelligence screens

**Usage in code:**
```tsx
Replace line 191 with:
src="/services/data-digitalization.jpg"
```

---

#### B. Smart Agriculture Service
**Location:** `src/app/page.tsx:233`

**Current:** External Unsplash URL
```
src="https://images.unsplash.com/photo-1574943320219-553eb213f72d"
```

**File to create:** `/public/services/smart-agriculture.jpg`
- **Recommended Size:** 800 x 600 px (4:3 ratio)
- **Optimal File Size:** < 150 KB
- **Format:** JPG or WebP
- **Description:** Modern farming with IoT technology
- **Color Theme:** Green tones
- **Suggested Content:**
  - Smart greenhouse with sensors
  - Automated irrigation systems
  - Crop monitoring technology
  - African farm with modern tech
  - Drones over farmland

**Usage in code:**
```tsx
Replace line 233 with:
src="/services/smart-agriculture.jpg"
```

---

#### C. Networking & Security Service
**Location:** `src/app/page.tsx:275`

**Current:** External Unsplash URL
```
src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
```

**File to create:** `/public/services/networking-security.jpg`
- **Recommended Size:** 800 x 600 px (4:3 ratio)
- **Optimal File Size:** < 150 KB
- **Format:** JPG or WebP
- **Description:** Cybersecurity, network infrastructure, servers
- **Color Theme:** Purple/violet tones
- **Suggested Content:**
  - Server rooms/data centers
  - Network cables and infrastructure
  - Security cameras/CCTV
  - Cybersecurity visualization
  - Firewall/network diagrams

**Usage in code:**
```tsx
Replace line 275 with:
src="/services/networking-security.jpg"
```

---

#### D. IoT Solutions Service
**Location:** `src/app/page.tsx:317`

**Current:** External Unsplash URL
```
src="https://images.unsplash.com/photo-1518709268805-4e9042af2176"
```

**File to create:** `/public/services/iot-solutions.jpg`
- **Recommended Size:** 800 x 600 px (4:3 ratio)
- **Optimal File Size:** < 150 KB
- **Format:** JPG or WebP
- **Description:** Connected IoT devices, smart sensors, automation
- **Color Theme:** Indigo tones
- **Suggested Content:**
  - IoT sensors and devices
  - Smart home/office automation
  - Connected devices network
  - Industrial IoT equipment
  - Wireless connectivity visualization

**Usage in code:**
```tsx
Replace line 317 with:
src="/services/iot-solutions.jpg"
```

---

#### E. Energy Solutions Service
**Location:** `src/app/page.tsx:359`

**Current:** External Unsplash URL
```
src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
```

**File to create:** `/public/services/energy-solutions.jpg`
- **Recommended Size:** 800 x 600 px (4:3 ratio)
- **Optimal File Size:** < 150 KB
- **Format:** JPG or WebP
- **Description:** Solar panels, renewable energy, batteries
- **Color Theme:** Orange/yellow tones
- **Suggested Content:**
  - Solar panel installations
  - Solar inverters and batteries
  - African context (rooftop installations)
  - Energy monitoring systems
  - Sustainable energy infrastructure

**Usage in code:**
```tsx
Replace line 359 with:
src="/services/energy-solutions.jpg"
```

---

### 3. LEADERSHIP SECTION

#### A. CEO/Founder Photo
**Location:** `src/app/page.tsx:476`

**Current:** External Unsplash URL (generic stock photo)
```
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
```

**File to create:** `/public/team/ceo-main.jpg`
- **Recommended Size:** 800 x 800 px (1:1 square ratio)
- **Optimal File Size:** < 200 KB
- **Format:** JPG or WebP
- **Description:** Professional photo of your CEO/Founder
- **Style:** Professional headshot with good lighting
- **Background:** Preferably blurred or neutral
- **Note:** You already have `ceo-formal.png` and `ceo-casual.png` - use one of these!

**Usage in code:**
```tsx
Replace line 476 with:
src="/team/ceo-main.jpg"
OR use existing:
src="/ceo-formal.png"
```

---

#### B. CTO Photo
**Location:** `src/app/page.tsx:497`

**Current:** External Unsplash URL (generic stock photo)
```
src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
```

**File to create:** `/public/team/cto.jpg`
- **Recommended Size:** 400 x 400 px (1:1 square ratio)
- **Optimal File Size:** < 100 KB
- **Format:** JPG or WebP
- **Description:** Professional photo of your CTO
- **Style:** Professional headshot
- **Background:** Neutral or blurred

**Usage in code:**
```tsx
Replace line 497 with:
src="/team/cto.jpg"
```

---

#### C. Head of Operations Photo
**Location:** `src/app/page.tsx:508`

**Current:** External Unsplash URL (generic stock photo)
```
src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
```

**File to create:** `/public/team/head-operations.jpg`
- **Recommended Size:** 400 x 400 px (1:1 square ratio)
- **Optimal File Size:** < 100 KB
- **Format:** JPG or WebP
- **Description:** Professional photo of your Head of Operations
- **Style:** Professional headshot
- **Background:** Neutral or blurred

**Usage in code:**
```tsx
Replace line 508 with:
src="/team/head-operations.jpg"
```

---

### 4. FOOTER SECTION

**Location:** `src/app/page.tsx:525`

**Current:** External Unsplash URL
```
src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
```

**File to create:** `/public/footer-background.jpg`
- **Recommended Size:** 2560 x 800 px (wide ratio)
- **Optimal File Size:** < 300 KB
- **Format:** JPG or WebP
- **Description:** Technology/office environment background
- **Color Theme:** Dark/gray tones (will be overlaid with gradient)
- **Suggested Content:**
  - Office workspace
  - Technology equipment
  - Team collaboration
  - Modern workspace

**Usage in code:**
```tsx
Replace line 525 with:
src="/footer-background.jpg"
```

---

## 🎨 ADDITIONAL RECOMMENDED IMAGES

### Brand Assets (Not currently used but highly recommended)

#### 1. Company Logo (Optimized)
**File:** `/public/logo-optimized.png`
- **Size:** 512 x 512 px (square)
- **File Size:** < 50 KB
- **Format:** PNG with transparency
- **Usage:** Navbar, favicon, social media
- **Note:** Your current logo.png is 1.7MB - create an optimized version!

#### 2. Favicon
**Files:**
- `/public/favicon.ico` (16x16, 32x32, 48x48 px)
- `/public/favicon-32x32.png`
- `/public/favicon-16x16.png`
- `/public/apple-touch-icon.png` (180x180 px)

**Currently using:** logo.png as temporary favicon (line 7 in layout.tsx)

---

### 3. Open Graph / Social Media Share Image
**File:** `/public/og-image.jpg`
- **Size:** 1200 x 630 px (1.91:1 ratio)
- **File Size:** < 200 KB
- **Format:** JPG or PNG
- **Description:** Image shown when website is shared on social media
- **Content:** SMAT Concept branding with tagline
- **Currently using:** data-digitalization.png (not ideal)

**Update in:** `src/app/layout.tsx:13`
```tsx
images: [{ url: "/og-image.jpg", width: 1200, height: 630 }]
```

---

### 4. Client Logos (RECOMMENDED TO ADD)
**Directory:** `/public/clients/`
- **Suggested files:**
  - `client-1.png`, `client-2.png`, etc.
- **Size:** 200 x 100 px (2:1 ratio)
- **Format:** PNG with transparency
- **File Size:** < 30 KB each
- **Usage:** Add a "Trusted By" section with client logos

---

### 5. Project Portfolio/Case Studies (RECOMMENDED TO ADD)
**Directory:** `/public/projects/`
- **Suggested files:**
  - `project-1.jpg`, `project-2.jpg`, etc.
- **Size:** 800 x 600 px (4:3 ratio)
- **Format:** JPG
- **File Size:** < 150 KB each
- **Usage:** Add a portfolio/case studies section

---

### 6. Testimonials/Team Photos (RECOMMENDED TO ADD)
**Directory:** `/public/testimonials/`
- **Suggested files:**
  - `testimonial-1.jpg`, `testimonial-2.jpg`, etc.
- **Size:** 200 x 200 px (1:1 square)
- **Format:** JPG
- **File Size:** < 50 KB each
- **Usage:** Add a testimonials section with client photos

---

## 📁 RECOMMENDED FOLDER STRUCTURE

```
/public/
├── logo-optimized.png          # Optimized company logo (< 50KB)
├── favicon.ico                 # Browser favicon
├── og-image.jpg                # Social media share image
├── hero-background.jpg         # Hero section background
├── footer-background.jpg       # Footer section background
│
├── /services/                  # Service card images
│   ├── data-digitalization.jpg
│   ├── smart-agriculture.jpg
│   ├── networking-security.jpg
│   ├── iot-solutions.jpg
│   └── energy-solutions.jpg
│
├── /team/                      # Team member photos
│   ├── ceo-main.jpg
│   ├── cto.jpg
│   └── head-operations.jpg
│
├── /clients/                   # Client logos (optional but recommended)
│   ├── client-1.png
│   ├── client-2.png
│   └── client-3.png
│
├── /projects/                  # Project portfolio images (optional)
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── project-3.jpg
│
└── /testimonials/              # Customer testimonial photos (optional)
    ├── testimonial-1.jpg
    └── testimonial-2.jpg
```

---

## 🔧 IMAGE OPTIMIZATION TIPS

1. **Compression:** Use tools like TinyPNG, Squoosh, or ImageOptim
2. **Format:**
   - JPG for photos (best compression)
   - PNG for logos/graphics with transparency
   - WebP for better compression (modern browsers)
3. **Sizing:** Never upload images larger than they'll be displayed
4. **Responsive:** Consider multiple sizes for different screen sizes
5. **Lazy Loading:** Next.js Image component handles this automatically

---

## 📝 PRIORITY ORDER

### HIGH PRIORITY (Essential for professional look):
1. ✅ Hero background image (`hero-background.jpg`)
2. ✅ All 5 service card images
3. ✅ CEO/Founder professional photo
4. ✅ Optimized logo and favicon
5. ✅ Open Graph share image

### MEDIUM PRIORITY (Enhances credibility):
6. ⏳ CTO and Head of Operations photos
7. ⏳ Footer background image
8. ⏳ Client logos section

### LOW PRIORITY (Nice to have):
9. ⏳ Project portfolio images
10. ⏳ Testimonial photos
11. ⏳ Additional team photos

---

## 🚀 NEXT STEPS

1. **Gather Images:** Collect or create all required images
2. **Optimize:** Compress images to recommended file sizes
3. **Organize:** Place images in the folder structure above
4. **Update Code:** Replace Unsplash URLs with local paths
5. **Test:** Verify all images load correctly on the website
6. **Deploy:** Push changes to production

---

## 💡 Where to Get Images

1. **Professional Photos:** Hire a local photographer for team/project photos
2. **Stock Photos:** Use high-quality African-themed tech images from:
   - Unsplash (free, high quality)
   - Pexels (free)
   - Pixabay (free)
   - iStock (paid, more unique)
3. **Custom Graphics:** Design custom images with Canva or hire a designer
4. **Project Photos:** Use real photos from your actual projects (best option!)

---

## 📊 QUICK REFERENCE TABLE

| Image | Location in Code | File to Create | Size | Priority |
|-------|-----------------|----------------|------|----------|
| Hero Background | page.tsx:18 | `/public/hero-background.jpg` | 2560x1440 | HIGH |
| Data Service | page.tsx:191 | `/public/services/data-digitalization.jpg` | 800x600 | HIGH |
| Agriculture Service | page.tsx:233 | `/public/services/smart-agriculture.jpg` | 800x600 | HIGH |
| Networking Service | page.tsx:275 | `/public/services/networking-security.jpg` | 800x600 | HIGH |
| IoT Service | page.tsx:317 | `/public/services/iot-solutions.jpg` | 800x600 | HIGH |
| Energy Service | page.tsx:359 | `/public/services/energy-solutions.jpg` | 800x600 | HIGH |
| CEO Photo | page.tsx:476 | `/public/team/ceo-main.jpg` | 800x800 | HIGH |
| CTO Photo | page.tsx:497 | `/public/team/cto.jpg` | 400x400 | MEDIUM |
| Operations Head | page.tsx:508 | `/public/team/head-operations.jpg` | 400x400 | MEDIUM |
| Footer Background | page.tsx:525 | `/public/footer-background.jpg` | 2560x800 | MEDIUM |
| Logo Optimized | - | `/public/logo-optimized.png` | 512x512 | HIGH |
| Favicon | layout.tsx:7 | `/public/favicon.ico` | 16/32/48 | HIGH |
| OG Share Image | layout.tsx:13 | `/public/og-image.jpg` | 1200x630 | HIGH |

---

**Last Updated:** November 2025
**Document Version:** 1.0
**Contact:** info@smatconcept.com
