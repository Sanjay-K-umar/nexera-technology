# Nexera Next.js Migration - Automated Setup Script
# Run this script to complete the migration in one command

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Nexera Next.js Migration Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$projectPath = "c:\Users\sanja\Downloads\nexera-clarity-engine-main (3)\nexera-clarity-engine-main"

# Check if we're in the right directory
if (-not (Test-Path $projectPath)) {
    Write-Host "ERROR: Project directory not found!" -ForegroundColor Red
    Write-Host "Expected: $projectPath" -ForegroundColor Yellow
    exit 1
}

Set-Location $projectPath
Write-Host "✓ Project directory found" -ForegroundColor Green
Write-Host ""

# Step 1: Backup old files
Write-Host "[1/6] Backing up Vite configuration..." -ForegroundColor Yellow
if (Test-Path "package.json") {
    Copy-Item "package.json" "package-vite-old.json" -Force
    Write-Host "  ✓ Backed up package.json" -ForegroundColor Green
}
if (Test-Path "tsconfig.json") {
    Copy-Item "tsconfig.json" "tsconfig-vite-old.json" -Force
    Write-Host "  ✓ Backed up tsconfig.json" -ForegroundColor Green
}
Write-Host ""

# Step 2: Activate Next.js configuration
Write-Host "[2/6] Activating Next.js configuration..." -ForegroundColor Yellow
if (Test-Path "package-next.json") {
    Copy-Item "package-next.json" "package.json" -Force
    Write-Host "  ✓ Activated Next.js package.json" -ForegroundColor Green
} else {
    Write-Host "  ⚠ Warning: package-next.json not found" -ForegroundColor Yellow
}
if (Test-Path "tsconfig-next.json") {
    Copy-Item "tsconfig-next.json" "tsconfig.json" -Force
    Write-Host "  ✓ Activated Next.js tsconfig.json" -ForegroundColor Green
} else {
    Write-Host "  ⚠ Warning: tsconfig-next.json not found" -ForegroundColor Yellow
}
Write-Host ""

# Step 3: Backup and activate Next.js components
Write-Host "[3/6] Activating Next.js components..." -ForegroundColor Yellow

$components = @(
    @{ Old = "src/components/Header.tsx"; New = "src/components/Header-next.tsx" },
    @{ Old = "src/components/Footer.tsx"; New = "src/components/Footer-next.tsx" },
    @{ Old = "src/components/ServiceCard.tsx"; New = "src/components/ServiceCard-next.tsx" }
)

foreach ($comp in $components) {
    if (Test-Path $comp.Old) {
        $backupName = $comp.Old -replace '\.tsx$', '-old.tsx'
        Copy-Item $comp.Old $backupName -Force
    }
    if (Test-Path $comp.New) {
        Copy-Item $comp.New $comp.Old -Force
        $componentName = Split-Path $comp.Old -Leaf
        Write-Host "  ✓ Activated $componentName" -ForegroundColor Green
    }
}
Write-Host ""

# Step 4: Create environment file
Write-Host "[4/6] Setting up environment variables..." -ForegroundColor Yellow
if (Test-Path ".env.local.example") {
    if (-not (Test-Path ".env.local")) {
        Copy-Item ".env.local.example" ".env.local" -Force
        Write-Host "  ✓ Created .env.local from example" -ForegroundColor Green
        Write-Host "  ⚠ Remember to update .env.local with your actual values!" -ForegroundColor Yellow
    } else {
        Write-Host "  ✓ .env.local already exists (not overwriting)" -ForegroundColor Green
    }
} else {
    Write-Host "  ⚠ Warning: .env.local.example not found" -ForegroundColor Yellow
}
Write-Host ""

# Step 5: Create necessary directories
Write-Host "[5/6] Creating directory structure..." -ForegroundColor Yellow
$directories = @(
    "public/images",
    "public/videos"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "  ✓ Created $dir" -ForegroundColor Green
    } else {
        Write-Host "  ✓ $dir exists" -ForegroundColor Green
    }
}
Write-Host ""

# Step 6: Install dependencies
Write-Host "[6/6] Installing Next.js dependencies..." -ForegroundColor Yellow
Write-Host "  This may take a few minutes..." -ForegroundColor Cyan
Write-Host ""

try {
    npm install
    Write-Host ""
    Write-Host "  ✓ Dependencies installed successfully!" -ForegroundColor Green
} catch {
    Write-Host "  ⚠ Error installing dependencies. Run 'npm install' manually." -ForegroundColor Yellow
}
Write-Host ""

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Setup Complete! 🎉" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Review .env.local and update with your actual values" -ForegroundColor White
Write-Host "2. Run: npm run dev" -ForegroundColor Cyan
Write-Host "3. Open: http://localhost:3000" -ForegroundColor Cyan
Write-Host "4. Check SETUP-GUIDE.md for remaining tasks" -ForegroundColor White
Write-Host ""
Write-Host "Pages Ready to View:" -ForegroundColor Yellow
Write-Host "  - Homepage: http://localhost:3000" -ForegroundColor White
Write-Host "  - Power BI: http://localhost:3000/services/power-bi-dashboards" -ForegroundColor White
Write-Host "  - Excel: http://localhost:3000/services/excel-automation" -ForegroundColor White
Write-Host "  - Blog: http://localhost:3000/blog" -ForegroundColor White
Write-Host "  - Sitemap: http://localhost:3000/sitemap.xml" -ForegroundColor White
Write-Host ""
Write-Host "To create remaining service pages and blog posts:" -ForegroundColor Yellow
Write-Host "  See SETUP-GUIDE.md for templates and instructions" -ForegroundColor White
Write-Host ""
Write-Host "Happy coding! 🚀" -ForegroundColor Green
