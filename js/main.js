/**
 * Chi Chi Wedding & Event - main.js
 * Vanilla JavaScript cho các hiệu ứng giao diện
 */

// ============================================================
// 1. Khởi động sau khi DOM sẵn sàng
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initStickyHeader();
    initSmoothScroll();
    initContactForm();
    initScrollTopBtn();
    initAnimateOnScroll();
    initGalleryLightbox();
    initCountUp();
});

// ============================================================
// 2. Navbar — thu gọn nền khi cuộn
// ============================================================
function initStickyHeader() {
    const header = document.querySelector('.main-header');
    if (!header) return;
    window.addEventListener('scroll', function () {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
            header.style.boxShadow = '0 4px 25px rgba(0,0,0,.15)';
        } else {
            header.classList.remove('scrolled');
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,.08)';
        }
    });
}

// ============================================================
// 3. Navbar — đóng menu mobile khi click vào link
// ============================================================
function initNavbar() {
    const navLinks = document.querySelectorAll('.nav-link-custom');
    const navCollapse = document.getElementById('mainNavbar');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navCollapse && navCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });

    // Active link theo section hiện tại
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(function (s) {
            if (window.scrollY >= s.offsetTop - 120) current = s.id;
        });
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
    });
}

// ============================================================
// 4. Smooth scroll khi click link nội bộ
// ============================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80; // chiều cao header
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });
}

// ============================================================
// 5. Form liên hệ — validation & giả lập gửi
// ============================================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.querySelector('#name').value.trim();
        const phone = form.querySelector('#phone').value.trim();
        const service = form.querySelector('#service').value;
        const message = form.querySelector('#message').value.trim();

        // Kiểm tra cơ bản
        if (!name || !phone) {
            showAlert('Vui lòng nhập đầy đủ Họ tên và Số điện thoại!', 'danger');
            return;
        }
        if (!/^(0[3-9]\d{8})$/.test(phone)) {
            showAlert('Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại Việt Nam.', 'warning');
            return;
        }

        // Giả lập gửi form
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Đang gửi...';

        setTimeout(function () {
            btn.disabled = false;
            btn.innerHTML = originalText;
            form.reset();
            showAlert(
                '✅ Cảm ơn <strong>' + name + '</strong>! Chi Chi Wedding sẽ liên hệ lại trong vòng 30 phút. Hotline: <strong>0943 134 437</strong>',
                'success'
            );
        }, 1500);
    });
}

function showAlert(msg, type) {
    const existing = document.getElementById('formAlert');
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.id = 'formAlert';
    div.className = 'mt-3 p-3 rounded-3 border';
    const colors = {
        success: { bg: '#e8f5e9', border: '#a5d6a7', color: '#2e7d32' },
        danger: { bg: '#ffebee', border: '#ef9a9a', color: '#c62828' },
        warning: { bg: '#fff8e1', border: '#ffe082', color: '#e65100' }
    };
    const c = colors[type] || colors.success;
    div.style.cssText = 'background:' + c.bg + ';border-color:' + c.border + '!important;color:' + c.color + ';font-size:.88rem;';
    div.innerHTML = msg;

    const form = document.getElementById('contactForm');
    if (form) {
        form.parentNode.insertBefore(div, form.nextSibling);
        setTimeout(function () { div.remove(); }, 6000);
    }
}

// ============================================================
// 6. Nút cuộn lên đầu trang
// ============================================================
function initScrollTopBtn() {
    const btn = document.querySelector('.float-btn.top');
    if (!btn) return;
    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) btn.classList.add('show');
        else btn.classList.remove('show');
    });
    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================================
// 7. Hiệu ứng xuất hiện khi cuộn (Animate on Scroll nhẹ)
// ============================================================
function initAnimateOnScroll() {
    const items = document.querySelectorAll(
        '.feature-card, .service-card, .pricing-card, .why-card, .testimonial-card, .gallery-item'
    );
    items.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity .5s ease, transform .5s ease';
    });

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    items.forEach(function (el) { observer.observe(el); });
}

// ============================================================
// 8. Gallery Lightbox đơn giản
// ============================================================
function initGalleryLightbox() {
    const items = document.querySelectorAll('.gallery-item');
    if (!items.length) return;

    // Tạo lightbox DOM
    const lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.style.cssText = [
        'display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);',
        'z-index:9999;align-items:center;justify-content:center;',
        'flex-direction:column;gap:1rem;cursor:zoom-out;'
    ].join('');
    lb.innerHTML =
        '<div style="font-size:6rem;text-align:center;" id="lbIcon"></div>' +
        '<div style="color:#fff;font-weight:600;font-size:1.1rem;text-align:center;" id="lbTitle"></div>' +
        '<div style="color:rgba(255,255,255,.6);font-size:.85rem;" id="lbDesc"></div>' +
        '<button onclick="document.getElementById(\'lightbox\').style.display=\'none\'" ' +
        'style="position:absolute;top:1rem;right:1.5rem;background:none;border:none;' +
        'color:#fff;font-size:2rem;cursor:pointer;line-height:1;" aria-label="Đóng">×</button>';
    document.body.appendChild(lb);

    items.forEach(function (item) {
        item.addEventListener('click', function () {
            const icon = item.querySelector('.gallery-img') ? item.querySelector('.gallery-img').textContent.trim() : '🌸';
            const title = item.dataset.title || 'Trang Trí Gia Tiên';
            const desc = item.dataset.desc || 'Chi Chi Wedding & Event';
            document.getElementById('lbIcon').textContent = icon;
            document.getElementById('lbTitle').textContent = title;
            document.getElementById('lbDesc').textContent = desc;
            lb.style.display = 'flex';
        });
    });

    lb.addEventListener('click', function (e) {
        if (e.target === lb) lb.style.display = 'none';
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') lb.style.display = 'none';
    });
}

// ============================================================
// 9. Count-Up animation cho các con số thống kê
// ============================================================
function initCountUp() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count, 10);
                const suffix = el.dataset.suffix || '';
                const duration = 1800;
                const step = Math.ceil(target / (duration / 16));
                let current = 0;
                const timer = setInterval(function () {
                    current = Math.min(current + step, target);
                    el.textContent = current.toLocaleString('vi-VN') + suffix;
                    if (current >= target) clearInterval(timer);
                }, 16);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
}

// ============================================================
// 10. Ticker — nhân đôi nội dung để cuộn mượt
// ============================================================
(function initTicker() {
    const track = document.querySelector('.ticker-track');
    if (!track) return;
    // Clone các items để tạo vòng lặp liên tục
    const clone = track.cloneNode(true);
    track.parentElement.appendChild(clone);
})();