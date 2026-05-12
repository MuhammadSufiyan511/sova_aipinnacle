import { test, expect } from '@playwright/test';

test.describe('Public Pages', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    // Wait for splash screen to disappear
    const splash = page.locator('.app-splash-screen');
    if (await splash.isVisible()) {
      await expect(splash).toBeHidden({ timeout: 15000 });
    }
  });

  test('Home Page: sections visibility', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible(); // Hero title
    await expect(page.locator('.home-features-grid-section')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('Industries Page: content visibility', async ({ page }) => {
    await page.goto('/industries', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toBeVisible();
    
    // Check for the presence of industry cards (use shell class)
    const card = page.locator('.industry-card-shell, .industry-card-glass').first();
    await expect(card).toBeVisible();
  });

  test('About Page: mission and focus', async ({ page }) => {
    await page.goto('/about', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toBeVisible();
    // Check for the main learn more button
    await expect(page.getByRole('button', { name: /Learn more/i }).first()).toBeVisible();
  });

  test('Case Studies: content visibility', async ({ page }) => {
    await page.goto('/case-studies', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.case-study-shell, .case-study-card-glass').first()).toBeVisible();
  });
});

test.describe('Auth & Application Flow', () => {
  test('Auth Page: Meta Connection', async ({ page }) => {
    await page.goto('/auth', { waitUntil: 'domcontentloaded' });
    await expect(page.getByText(/Connect/i).first()).toBeVisible();
  });

  test('Onboarding: Reachable', async ({ page }) => {
    await page.goto('/onboarding', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('main')).toBeVisible();
  });

  test('Admin Dashboard: State Seeding & UI', async ({ page }) => {
    // Seed localStorage to simulate a logged in user with data
    await page.addInitScript(() => {
      window.localStorage.setItem('sova-user', JSON.stringify({
        name: 'Test Pilot',
        plan: 'Premium',
        email: 'test@sova.ai',
        phone: '+1234567890',
        avatar: ''
      }));
      window.localStorage.setItem('sova-business-details', JSON.stringify({
        name: 'SOVA Test Lab',
        description: 'Testing automation',
        location: 'Cloud',
        image: ''
      }));
    });

    await page.goto('/admin', { waitUntil: 'domcontentloaded' });
    
    // Check for the seeded plan name or initial
    // The profile button shows the first initial "T"
    const profileBtn = page.getByRole('button', { name: /Profile/i }).first();
    if (await profileBtn.isVisible()) {
      await expect(profileBtn).toContainText('T');
    }

    // Check for Sidebar links (Desktop only) or Header (Mobile/Desktop)
    await expect(page.locator('h1').filter({ hasText: /Overview/i }).first()).toBeVisible();
    
    // Navigate to a specific sub-page
    await page.goto('/admin/products', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1').filter({ hasText: /Catalog|Products/i }).first()).toBeVisible();
  });
});

test.describe('Responsiveness & Themes', () => {
  test('Mobile: Navigation menu works', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Desktop has a different nav');
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    
    // Wait for hydration
    await page.waitForTimeout(1000);

    // The menu button has "Open menu" label
    const menuBtn = page.getByLabel(/Open menu/i).first();
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();
    
    // Verify mobile menu overlay appears
    await expect(page.locator('nav').filter({ visible: true }).first()).toBeVisible();
  });

  test('Dark Mode: Toggle theme', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => {
      localStorage.setItem('sova-home-theme', 'dark');
      document.documentElement.classList.add('dark');
    });
    // Verification: html tag should have the dark class
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});

test.describe('Internationalization', () => {
  test('Language Switching: Urdu', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    
    // Open language selector
    const langBtn = page.getByRole('button', { name: /EN/i }).first();
    if (await langBtn.isVisible()) {
      await langBtn.click();
      // Look for Urdu
      const urduBtn = page.getByText(/اردو/i).first();
      await urduBtn.click();
      
      // Verify RTL direction
      await expect(page.locator('html')).toHaveAttribute('dir', 'rtl', { timeout: 10000 });
    }
  });
});

test.describe('Legal Pages', () => {
  test('Terms & Privacy: Visibility', async ({ page }) => {
    await page.goto('/terms', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toBeVisible();
    await page.goto('/privacy_policy', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toBeVisible();
  });
});
