// ===== FREEDOM PARK — SHARED COMPONENTS =====

const NAV_HTML = `
<nav class="navbar">
    <a href="index.html" class="nav-logo">
    <img src="images/logo.png" alt="Freedom Park Logo" class="logo-img">
      <div>
        <div style="font-size:1rem;line-height:1.1">FREEDOM PARK</div>
      <div style="font-size:0.65rem;font-weight:500;color:var(--muted);font-family:var(--font-body)">PRESCHOOL &amp; NURSERY</div>
    </div>
  </a>
  <button class="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="programs.html">Programs</a></li>
    <li><a href="Noticesection.html">Notice Section</a></li>
    <li><a href="reviews.html">Reviews</a></li>
    <li><a href="whyus.html">Why Us</a></li>
    <li><a href="gallery.html">Gallery</a></li>
    <li><a href="achievements.html">Achievements</a></li>
    <li><a href="admissions.html">Admissions</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>`;

// ===== NOTICE BOARD =====
const NOTICE_HTML = `
<div id="notice-board" style="
  background: linear-gradient(135deg, #fff8e1, #fff3e0);
  border-left: 5px solid var(--orange);
  border-radius: 0 var(--radius) var(--radius) 0;
  padding: 14px 20px 14px 16px;
  margin: 0 5% 0;
  box-shadow: 0 2px 12px rgba(255,140,66,0.12);
  display: flex;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  z-index: 99;
">
  <div style="font-size:1.6rem;flex-shrink:0;margin-top:2px">📌</div>
  <div style="flex:1;min-width:0;">
    <div style="font-family:var(--font-head);font-weight:800;font-size:0.95rem;color:var(--orange);margin-bottom:4px">📣 Notice Board</div>
    <p style="font-size:0.88rem;color:var(--text);line-height:1.6;margin:0">
      <strong>Dear Parents,</strong><br>
      Exciting news! We are super happy to announce our <strong>Summer Camp</strong> dates — open to all!<br>
      🎨 Fees: <strong>₹1600/batch</strong> | Both batches: <strong>₹3000</strong> (₹200 off) | ⏰ Timing: 9:00 – 11:30 AM<br>
      Help us spread the word! 😊 — <em>FP Team</em>
    </p>
  </div>
  <button onclick="document.getElementById('notice-board').style.display='none'" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--muted);flex-shrink:0;padding:0;line-height:1" title="Close">✕</button>
</div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">
        <img src="images/logo.png" alt="Freedom Park Logo" class="logo-img">
        <div class="footer-logo-text">Freedom Park Preschool
          <small>Preschool &amp; Daycare</small>
        </div>
      </div>
      <p style="font-style:italic;color:rgba(255,255,255,0.65);font-size:0.82rem;margin-bottom:4px">✨ new beginnings with your child</p>
      <p>"Nurturing young minds with love, creativity, Indian values, and care since 2016."</p>
      <div class="footer-icons">🐘 🦁 🦚 🔤 🔢 🪔 🇮🇳</div>

      <!-- Social Media -->
      <div style="margin-top:20px;">
        <div style="font-family:var(--font-head);font-weight:800;font-size:0.95rem;color:var(--white);margin-bottom:12px;">Follow Us 📱</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
          <a href="https://www.instagram.com/freedomparkpreschool?igsh=bWRucmp4anV0ZnMy" target="_blank" rel="noopener"
            style="display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);color:#fff;padding:9px 18px;border-radius:50px;font-family:var(--font-head);font-weight:700;font-size:0.85rem;text-decoration:none;transition:transform 0.2s;"
            onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            @freedomparkpreschool
          </a>
        </div>
      </div>
    </div>

    <div>
      <h4>Quick Links</h4>
      <ul class="footer-links">
        <li><a href="index.html">🏠 Home</a></li>
        <li><a href="about.html">💛 About</a></li>
        <li><a href="programs.html">📚 Programs</a></li>
        <li><a href="gallery.html">🖼️ Gallery</a></li>
        <li><a href="admissions.html">🎒 Admissions</a></li>
        <li><a href="contact.html">📞 Contact</a></li>
      </ul>
    </div>

    <div>
      <h4>Contact Us</h4>
      <ul class="footer-links">
        <li>📍 Padmavatinagari, Wadmukhwadi<br>&nbsp;&nbsp;&nbsp;&nbsp;Behind KK Care Hospital<br>&nbsp;&nbsp;&nbsp;&nbsp;Alandi Road, Pune – 412105</li>
        <li style="margin-top:10px">📞 <a href="tel:9356860684">9356860684</a></li>
        <li>📞 <a href="tel:9922208778">9922208778</a></li>
        <li style="margin-top:8px">✉️ <a href="mailto:freedomparkpreschool2016@gmail.com" style="word-break:break-all">freedomparkpreschool2016@gmail.com</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    © 2025 Freedom Park Preschool &amp; Nursery, Wadmukhwadi, Pune. All rights reserved. Made with 💛 for little learners.
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;

  // Notice board — insert after navbar
  const nb = document.getElementById('notice-placeholder');
  if (nb) nb.outerHTML = NOTICE_HTML;

  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
});
