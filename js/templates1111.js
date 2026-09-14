// js/templates.js

const templates = {
    // 🏠 TRANG CHỦ: Giữ lại Banner Hero, các thông tin ưu đãi tổng quan và Đánh giá khách hàng
    home: `
        <section class="hero-section">
            <h1>Trang Trí Gia Tiên Đẹp · Sang · Giá Rẻ</h1>
            <p>Dịch vụ trang trí gia tiên trọn gói tại TP.Hồ Chí Minh — Từ lễ đính hôn, tân hôn đến đám cưới. Chất lượng cao cấp, giá bình dân, phục vụ tận tình.</p>
            <div class="stats">
                <span>10+ Năm Kinh Nghiệm</span> | <span>5.000+ Khách Hàng Tin Dùng</span>
            </div>
        </section>
        <section class="testimonials">
            <h2>Khách Hàng Nói Gì?</h2>
            <div class="review-card">"Dịch vụ tuyệt vời! Đội Chi Chi đến đúng giờ..." - Chị Lan Anh (Tân Bình)</div>
            <div class="review-card">"Mình đặt gói nâng cao, team đến lắp đặt nhanh chỉ 2 tiếng..." - Anh Minh Tú (Q.9)</div>
        </section>
    `,

    // 🌹 TRANG DỊCH VỤ: Chứa danh sách các dịch vụ riêng lẻ
    services: `
        <section class="services-section">
            <h2>Dịch Vụ Của Chúng Tôi</h2>
            <div class="service-grid">
                <div class="service-item">
                    <h3>Cổng Hoa Cưới Tươi & Giả</h3>
                    <p>Từ 2.500.000đ - Cổng hoa tươi / hoa giả cao cấp, kết hợp đèn LED...</p>
                </div>
                <div class="service-item">
                    <h3>Backdrop Sân Khấu Cưới</h3>
                    <p>Từ 1.800.000đ - Thiết kế theo yêu cầu màu sắc, in tên đôi uyên ương...</p>
                </div>
                <div class="service-item">
                    <h3>Cho Thuê Mâm Quả Rồng Phụng</h3>
                    <p>Từ 500.000đ - Khăn xếp, nơ trang trí, giao nhận tận nơi...</p>
                </div>
                <div class="service-item">
                    <h3>Cho Thuê Xe Cưới, Xe Đưa Dâu</h3>
                    <p>Từ 1.200.000đ - Xe 4-7 chỗ trang trí hoa, xe 16-29 chỗ đưa đón khách...</p>
                </div>
                <div class="service-item">
                    <h3>Quay Phim Chụp Ảnh Cưới</h3>
                    <p>Liên hệ báo giá - Chụp ảnh phóng sự, quay phim HD, giao file trong 7 ngày...</p>
                </div>
            </div>
        </section>
    `,

    // ₫ TRANG GÓI TRANG TRÍ: Chứa bảng giá của 3 gói gia tiên chính
    pricing: `
        <section class="pricing-section">
            <h2>Bảng Giá Dịch Vụ</h2>
            <div class="price-tier">
                <h3>🌸 Gói Cơ Bản</h3>
                <p class="price">3.999.000đ / lễ</p>
                <ul><li>Phông bạt chữ Hỷ</li><li>Bàn thờ bọc vải</li><li>12 ghế Tiffany</li></ul>
            </div>
            <div class="price-tier featured">
                <h3>🌺 Gói Nâng Cao</h3>
                <p class="price">5.499.000đ / lễ</p>
                <ul><li>Tất cả gói cơ bản</li><li>Phông bạt mành chiếu</li><li>🎁 Tặng 12 chai nước in tên</li></ul>
            </div>
            <div class="price-tier">
                <h3>💎 Gói Cao Cấp</h3>
                <p class="price">8.999.000đ / lễ</p>
                <ul><li>Tất cả gói nâng cao</li><li>Backdrop nhung 3D</li><li>Hoa tươi bàn thờ</li></ul>
            </div>
        </section>
    `,

    // 📸 TRANG ALBUM ẢNH: Phân loại hình ảnh theo tông màu
    album: `
        <section class="album-section">
            <h2>Album Trang Trí</h2>
            <div class="album-gallery">
                <div class="album-item">🌸 Tone Hồng Gold — Gói Nâng Cao</div>
                <div class="album-item">🌹 Tone Đỏ — Q.12</div>
                <div class="album-item">💜 Tone Tím — Gò Vấp</div>
                <div class="album-item">✨ Tone Gold — Thủ Đức</div>
                <div class="album-item">🌿 Tone Xanh — Bình Tân</div>
            </div>
        </section>
    `,

    // ⭐ TRANG VÌ SAO CHỌN: Chứa các tiêu chí cam kết chất lượng của thương hiệu
    whyUs: `
        <section class="why-us-section">
            <h2>Tại Sao Chọn Chi Chi Wedding?</h2>
            <ul>
                <li><strong>Chất Lượng Đảm Bảo:</strong> Nguyên liệu mới nhất, vải cao cấp, hoa bền đẹp.</li>
                <li><strong>Đúng Giờ 100%:</strong> Hoàn thành trước giờ lễ ít nhất 30 phút.</li>
                <li><strong>Hoàn Tiền 100%:</strong> Không đúng mẫu, không đúng giờ -> hoàn tiền theo hợp đồng.</li>
            </ul>
        </section>
    `,

    // 📞 TRANG LIÊN HỆ: Chứa Form điền thông tin và địa chỉ Showroom quận 12
    contact: `
        <section class="contact-section">
            <h2>Liên Hệ Chúng Tôi</h2>
            <p><strong>Địa chỉ:</strong> 689 Nguyễn Văn Quá, P. Đông Hưng Thuận, Quận 12, TP.HCM</p>
            <p><strong>Hotline:</strong> 0943.134.437 – 0986.744.751</p>
            
            <form id="consultation-form">
                <h3>Gửi Yêu Cầu Tư Vấn</h3>
                <input type="text" placeholder="Họ và tên *" required>
                <input type="tel" placeholder="Số điện thoại *" required>
                <select>
                    <option>Trang trí gia tiên — Gói Cơ Bản (3.999K)</option>
                    <option>Trang trí gia tiên — Gói Nâng Cao (5.499K)</option>
                    <option>Trang trí gia tiên — Gói Cao Cấp (8.999K)</option>
                </select>
                <button type="submit">Gửi Yêu Cầu</button>
            </form>
        </section>
    `
};
