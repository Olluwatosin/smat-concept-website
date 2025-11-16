# 📸 How to Add Your Photos

## 🎯 **Quick Steps:**

### 1. **Add Your Photos to Public Folder**
Put your photos in: `frontend/public/`
- `ceo-photo.jpg` (your CEO photo)
- `cto-photo.jpg` (your CTO photo) 
- `hoo-photo.jpg` (Head of Operations photo)

### 2. **Update the Code**
In `frontend/src/app/page.tsx`, replace:

**CEO Photo (around line 490):**
```jsx
// Replace this placeholder div:
<div className="text-center text-white">
  <div className="text-6xl font-bold mb-4">CEO</div>
  <div className="text-lg">Your Photo Here</div>
</div>

// With this:
<img 
  src="/ceo-photo.jpg" 
  alt="CEO" 
  className="w-full h-full object-cover"
/>
```

**Team Photos (around line 510):**
```jsx
// Replace CTO placeholder:
<div className="w-16 h-16 rounded-full mx-auto mb-2 bg-blue-500...">
  CTO
</div>

// With:
<img 
  src="/cto-photo.jpg" 
  alt="CTO" 
  className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
/>

// Same for Head of Operations with /hoo-photo.jpg
```

### 3. **Test Your Changes**
```bash
npm run dev
```
Visit http://localhost:3000 to see your photos!

## ✅ **Changes Made:**
- ✅ SMAT Concept logo now appears at the top
- ✅ Navigation header added
- ✅ Photo placeholders ready for your images
- ✅ Professional layout maintained