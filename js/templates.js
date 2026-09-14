// js/templates.js

const templates = {
    // 🏠 1. TRANG CHỦ (Home)
    home: `
        <!-- Hero Section -->
        <section class="hero-section text-center py-5 bg-light position-relative">
            <div class="container py-4">
                <span class="fs-1 lead text-muted">🌸</span>
                <h1 class="display-4 fw-bold mt-2 mb-3">Trang Trí Gia Tiên Đẹp · Sang · Giá Rẻ</h1>
                <p class="lead text-secondary mx-auto mb-4" style="max-width: 750px;">
                    Dịch vụ trang trí gia tiên trọn gói tại TP.Hồ Chí Minh — từ lễ đính hôn, tân hôn đến đám cưới. 
                    Chất lượng cao cấp, giá bình dân, phục vụ tận tình.
                </p>
                <div class="d-flex justify-content-center gap-3 mb-5 text-uppercase fw-semibold tracking-wider text-muted small">
                    <span><i class="bi bi-patch-check-fill text-primary"></i> 10+ Năm Kinh Nghiệm</span>
                    <span>|</span>
                    <span><i class="bi bi-people-fill text-primary"></i> 5.000+ Khách Hàng Tin Dùng</span>
                    <span>|</span>
                    <span><i class="bi bi-geo-alt-fill text-primary"></i> Toàn TP.HCM</span>
                </div>
                <div class="d-flex justify-content-center gap-3">
                    <a href="/goi-trang-tri" class="btn btn-primary btn-lg px-4 nav-link">Xem bảng giá</a>
                    <a href="tel:0943134437" class="btn btn-outline-dark btn-lg px-4">Gọi ngay</a>
                </div>
            </div>
        </section>

        <!-- Khối Tính Năng Nổi Bật -->
        <section class="features-section py-5 bg-white border-bottom">
            <div class="container">
                <div class="row g-4 text-center">
                    <div class="col-md-3">
                        <div class="p-3">
                            <div class="fs-2 text-primary mb-2"><i class="bi bi-palette"></i></div>
                            <h4 class="fw-bold fs-5">Đa dạng mẫu mã</h4>
                            <p class="text-muted small">Hàng trăm mẫu tone màu mới nhất</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-3">
                            <div class="fs-2 text-primary mb-2"><i class="bi bi-gem"></i></div>
                            <h4 class="fw-bold fs-5">Chất lượng cao</h4>
                            <p class="text-muted small">Vải cao cấp, hoa giả bền đẹp</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-3">
                            <div class="fs-2 text-primary mb-2"><i class="bi bi-lightning-charge"></i></div>
                            <h4 class="fw-bold fs-5">Thi công nhanh</h4>
                            <p class="text-muted small">Hoàn thành trong 2–3 tiếng</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="p-3">
                            <div class="fs-2 text-primary mb-2"><i class="bi bi-tags"></i></div>
                            <h4 class="fw-bold fs-5">Giá cạnh tranh</h4>
                            <p class="text-muted small">Trọn gói từ 3.999.000đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Đánh giá khách hàng (Testimonials) -->
        <section class="testimonials py-5 bg-light">
            <div class="container">
                <h2 class="text-center fw-bold mb-5">Khách Hàng Nói Gì?</h2>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card h-100 border-0 shadow-sm p-4">
                            <p class="text-muted italic">"Dịch vụ tuyệt vời! Đội Chi Chi đến đúng giờ, trang trí rất đẹp và chu đáo. Gia đình mình rất hài lòng với tone hồng gold. Giá cả phải chăng, xứng đáng 5 sao!"</p>
                            <div class="d-flex align-items-center mt-3">
                                <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-3" style="width: 45px; height: 45px;">L</div>
                                <div>
                                    <h5 class="mb-0 fw-bold fs-6">Chị Lan Anh</h5>
                                    <small class="text-muted">Quận Tân Bình, TP.HCM</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card h-100 border-0 shadow-sm p-4">
                            <p class="text-muted italic">"Mình đặt gói nâng cao, team đến lắp đặt nhanh chỉ 2 tiếng là xong. Gia tiên nhà mình đẹp hơn mình tưởng nhiều. Cô chú khách ai cũng khen. Sẽ giới thiệu cho bạn bè!"</p>
                            <div class="d-flex align-items-center mt-3">
                                <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-3" style="width: 45px; height: 45px;">M</div>
                                <div>
                                    <h5 class="mb-0 fw-bold fs-6">Anh Minh Tú</h5>
                                    <small class="text-muted">Quận 9, TP.HCM</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card h-100 border-0 shadow-sm p-4">
                            <p class="text-muted italic">"Nhà mình ở Quận 12 gần showroom Chi Chi. Gọi tư vấn rất nhiệt tình, giá hợp lý, nhân viên thân thiện. Trang trí gia tiên tông đỏ nhẹ rất ấm cúng và sang trọng."</p>
                            <div class="d-flex align-items-center mt-3">
                                <div class="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-3" style="width: 45px; height: 45px;">H</div>
                                <div>
                                    <h5 class="mb-0 fw-bold fs-6">Chị Hồng Nhung</h5>
                                    <small class="text-muted">Quận 12, TP.HCM</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    // 🌹 2. TRANG DỊCH VỤ (Services)
    services: `
        <section class="services-section py-5 bg-white">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="fw-bold">Dịch Vụ Của Chúng Tôi</h2>
                    <p class="text-muted">Đa dạng dịch vụ trang trí cưới hỏi — từ gia tiên đến cổng hoa, backdrop sân khấu</p>
                </div>
                
                <div class="row g-4">
                    <!-- Item 1 -->
                    <div class="col-md-4">
                        <div class="card h-100 border border-light shadow-sm">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <span class="badge bg-danger-subtle text-danger px-2 py-1 rounded">🌸 Bán chạy nhất</span>
                                    <span class="fw-bold text-primary">Từ 3.999.000đ</span>
                                </div>
                                <h3 class="h5 fw-bold mb-3">Trang Trí Gia Tiên Trọn Gói</h3>
                                <ul class="text-muted small ps-3 mb-4">
                                    <li>Phông bạt backdrop chữ Hỷ</li>
                                    <li>Bàn thờ gia tiên bọc vải cao cấp</li>
                                    <li>Bộ lư đồng, chân nến, bình hoa</li>
                                    <li>12 ghế Tiffany có nơ & Biển tên</li>
                                </ul>
                                <a href="/lien-he" class="btn btn-sm btn-primary w-100 nav-link">Đặt ngay</a>
                            </div>
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="col-md-4">
                        <div class="card h-100 border border-light shadow-sm">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <span class="badge bg-success-subtle text-success px-2 py-1 rounded">🌹 Mới nhất</span>
                                    <span class="fw-bold text-primary">Từ 2.500.000đ</span>
                                </div>
                                <h3 class="h5 fw-bold mb-3">Cổng Hoa Cưới Tươi & Giả</h3>
                                <ul class="text-muted small ps-3 mb-4">
                                    <li>Cổng hoa tươi / hoa giả cao cấp</li>
                                    <li>Trang trí cổng hoa lối vào phối LED</li>
                                    <li>Vận chuyển + lắp đặt tận nơi</li>
                                    <li>Phục vụ và tháo dỡ trong ngày</li>
                                </ul>
                                <a href="/lien-he" class="btn btn-sm btn-outline-primary w-100 nav-link">Đặt ngay</a>
                            </div>
                        </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="col-md-4">
                        <div class="card h-100 border border-light shadow-sm">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <span class="invisible">Spacer</span>
                                    <span class="fw-bold text-primary">Từ 1.800.000đ</span>
                                </div>
                                <h3 class="h5 fw-bold mb-3">Backdrop Sân Khấu Cưới</h3>
                                <ul class="text-muted small ps-3 mb-4">
                                    <li>Phông nền sân khấu cao cấp</li>
                                    <li>Thiết kế theo tone màu yêu cầu</li>
                                    <li>In tên đôi uyên ương, ngày cưới</li>
                                    <li>Thi công nhanh gọn từ 1-2 tiếng</li>
                                </ul>
                                <a href="/lien-he" class="btn btn-sm btn-outline-primary w-100 nav-link">Đặt ngay</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card h-100 border border-light shadow-sm">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <span class="invisible">Spacer</span>
                                    <span class="fw-bold text-primary">Từ 500.000đ</span>
                                </div>
                                <h3 class="h5 fw-bold mb-3">Cho Thuê Mâm Quả Rồng Phụng</h3>
                                <ul class="text-muted small ps-3 mb-4">
                                    <li>Mâm quả kết hình rồng phụng đẹp</li>
                                    <li>Đầy đủ khăn xếp, nơ trang trí</li>
                                    <li>Đội ngũ bê mâm quả (tùy chọn)</li>
                                    <li>Giao nhận tận tâm toàn TP.HCM</li>
                                </ul>
                                <a href="/lien-he" class="btn btn-sm btn-outline-primary w-100 nav-link">Đặt ngay</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card h-100 border border-light shadow-sm">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <span class="invisible">Spacer</span>
                                    <span class="fw-bold text-primary">Từ 1.200.000đ</span>
                                </div>
                                <h3 class="h5 fw-bold mb-3">Cho Thuê Xe Cưới, Xe Đưa Dâu</h3>
                                <ul class="text-muted small ps-3 mb-4">
                                    <li>Xe 4–7 chỗ trang trí hoa cưới sang</li>
                                    <li>Xe 16–29 chỗ rộng rãi đưa đón khách</li>
                                    <li>Tài xế lịch sự, chuyên nghiệp, đúng giờ</li>
                                    <li>Phục vụ nội thành & vùng lân cận</li>
                                </ul>
                                <a href="/lien-he" class="btn btn-sm btn-outline-primary w-100 nav-link">Đặt ngay</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card h-100 border border-light shadow-sm">
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <span class="invisible">Spacer</span>
                                    <span class="fw-bold text-danger">Giá thương lượng</span>
                                </div>
                                <h3 class="h5 fw-bold mb-3">Quay Phim Chụp Ảnh Cưới</h3>
                                <ul class="text-muted small ps-3 mb-4">
                                    <li>Chụp ảnh phóng sự toàn bộ lễ truyền thống</li>
                                    <li>Quay phim HD, dựng phim highlight chuyên nghiệp</li>
                                    <li>Có tặng kèm album ảnh cứng in bìa cao cấp</li>
                                    <li>Cam kết bàn giao file sạch trong 7 ngày</li>
                                </ul>
                                <a href="/lien-he" class="btn btn-sm btn-outline-primary w-100 nav-link">Liên hệ ngay</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    // ₫ 3. TRANG GÓI TRANG TRÍ (Pricing)
    pricing: `
        <section class="pricing-section py-5 bg-light">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="fw-bold">Bảng Giá Dịch Vụ</h2>
                    <p class="text-muted">Tất cả gói đã bao gồm chi phí vận chuyển, lắp đặt và tháo dỡ trong ngày tại TP.HCM</p>
                </div>

                <div class="row g-4 justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100 border-0 shadow-sm p-4 text-center">
                            <h3 class="h4 fw-bold mb-2">🌸 Gói Cơ Bản</h3>
                            <p class="text-muted small mb-4" style="height: 40px;">Phù hợp gia đình nhỏ, không gian vừa ấm cúng</p>
                            <div class="fs-2 fw-bold text-dark mb-4">3.999.000 <span class="fs-6 text-muted">đ / lễ</span></div>
                            <ul class="text-start text-muted small mb-4 ps-3">
                                <li class="mb-2">Phông bạt backdrop chữ Hỷ</li>
                                <li class="mb-2">Bàn thờ gia tiên bọc vải</li>
                                <li class="mb-2">Bộ lư đồng + 2 chân nến</li>
                                <li class="mb-2">2 bình hoa lụa nghệ thuật bàn thờ</li>
                                <li class="mb-2">Bàn mâm quả bọc vải sang trọng</li>
                                <li class="mb-2">12 ghế Tiffany cao cấp có thắt nơ</li>
                                <li class="mb-2">Biển tên đôi uyên ương & đèn LED nền</li>
                            </ul>
                            <a href="/lien-he" class="btn btn-outline-primary w-100 mt-auto nav-link">Đặt gói này</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100 border-primary border-2 shadow p-4 text-center position-relative">
                            <span class="position-absolute top-0 start-50 translate-middle badge bg-primary px-3 py-2 rounded-pill uppercase">⭐ Được chọn nhiều nhất</span>
                            <h3 class="h4 fw-bold mb-2 mt-2">🌺 Gói Nâng Cao</h3>
                            <p class="text-muted small mb-4" style="height: 40px;">Phù hợp với đại đa số không gian nhà tại TP.HCM</p>
                            <div class="fs-2 fw-bold text-primary mb-4">5.499.000 <span class="fs-6 text-muted">đ / lễ</span></div>
                            <ul class="text-start text-muted small mb-4 ps-3">
                                <li class="mb-2 fw-bold text-dark">Bao gồm tất cả trong gói Cơ Bản</li>
                                <li class="mb-2">Phông bạt mành chiếu cao cấp, tinh tế</li>
                                <li class="mb-2">Trang trí thêm 3–4 bàn tiệc gia đình</li>
                                <li class="mb-2">2 bình hoa lụa lớn để bàn gia đình</li>
                                <li class="mb-2">1 cây chân nến nghệ thuật trang trí thêm</li>
                                <li class="mb-2">2 bộ khay trà kèm 12 cốc sứ cao cấp</li>
                                <li class="mb-2 text-success">🎁 Tặng kèm 12 chai nước in tên riêng</li>
                            </ul>
                            <a href="/lien-he" class="btn btn-primary w-100 mt-auto nav-link">Đặt gói này</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="card h-100 border-0 shadow-sm p-4 text-center">
                            <h3 class="h4 fw-bold mb-2">💎 Gói Cao Cấp</h3>
                            <p class="text-muted small mb-4" style="height: 40px;">Sang trọng, đẳng cấp dành cho không gian lớn</p>
                            <div class="fs-2 fw-bold text-dark mb-4">8.999.000 <span class="fs-6 text-muted">đ / lễ</span></div>
                            <ul class="text-start text-muted small mb-4 ps-3">
                                <li class="mb-2 fw-bold text-dark">Bao gồm tất cả trong gói Nâng Cao</li>
                                <li class="mb-2">Backdrop chất liệu nhung dựng 3D cao cấp</li>
                                <li class="mb-2">Sử dụng hoàn toàn HOÀ TƯƠI bàn thờ & bàn tiệc</li>
                                <li class="mb-2">Trang trí quy mô mở rộng 6–8 bàn gia đình</li>
                                <li class="mb-2">Bố trí đèn hào quang nghệ thuật, dây LED nháy</li>
                                <li class="mb-2">Khung ảnh cưới lớn phóng trên nền Canvas</li>
                                <li class="mb-2 text-success">🎁 Tặng 1 bó hoa cầm tay cô dâu cao cấp</li>
                                <li class="mb-2 text-success">🎁 Tặng 1 video clip highlight lễ dài 2 phút</li>
                            </ul>
                            <a href="/lien-he" class="btn btn-outline-primary w-100 mt-auto nav-link">Đặt gói này</a>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-5 bg-white p-4 rounded shadow-sm mx-auto" style="max-width: 800px;">
                    <p class="text-muted small mb-0">
                        * Giá trên được áp dụng chính thức trong nội thành khu vực TP.HCM. 
                        Các khu vực ngoại thành hoặc tỉnh lân cận vui lòng phụ thu thêm phí vận chuyển. 
                        Hãy gọi trực tiếp hotline <strong class="text-dark">0943.134.437</strong> để có báo giá chi tiết theo địa chỉ thực tế.
                    </p>
                </div>
            </div>
        </section>
    `,

    // 📸 4. TRANG ALBUM ẢNH (Album)
    album: `
        <section class="album-section py-5 bg-white">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="fw-bold">Album Trang Trí Gần Đây</h2>
                    <p class="text-muted">Tổng hợp một số mẫu trang trí gia tiên tiêu biểu do Chi Chi Wedding & Event thi công</p>
                </div>

                <div class="row g-4">
                    <div class="col-md-4 col-sm-6">
                        <div class="card border-0 shadow-sm overflow-hidden h-100 text-center bg-light">
                            <div class="p-5 fs-1 text-primary"><i class="bi bi-palette-fill"></i></div>
                            <div class="card-body bg-white"><h5 class="fw-bold fs-6 mb-0">🌸 Tone Hồng Gold — Gói Nâng Cao</h5></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="card border-0 shadow-sm overflow-hidden h-100 text-center bg-light">
                            <div class="p-5 fs-1 text-danger"><i class="bi bi-heart-fill"></i></div>
                            <div class="card-body bg-white"><h5 class="fw-bold fs-6 mb-0">🌹 Tone Đỏ Nổi Bật — Địa bàn Q.12</h5></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="card border-0 shadow-sm overflow-hidden h-100 text-center bg-light">
                            <div class="p-5 fs-1" style="color: #6f42c1;"><i class="bi bi-moon-stars-fill"></i></div>
                            <div class="card-body bg-white"><h5 class="fw-bold fs-6 mb-0">💜 Tone Tím Thủy Chung — Gò Vấp</h5></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="card border-0 shadow-sm overflow-hidden h-100 text-center bg-light">
                            <div class="p-5 fs-1 text-warning"><i class="bi bi-stars"></i></div>
                            <div class="card-body bg-white"><h5 class="fw-bold fs-6 mb-0">✨ Tone Gold Sang Trọng — Thủ Đức</h5></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="card border-0 shadow-sm overflow-hidden h-100 text-center bg-light">
                            <div class="p-5 fs-1 text-success"><i class="bi bi-tree-fill"></i></div>
                            <div class="card-body bg-white"><h5 class="fw-bold fs-6 mb-0">🌿 Tone Xanh Hiện Đại — Bình Tân</h5></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="card border-0 shadow-sm overflow-hidden h-100 text-center bg-light">
                            <div class="p-5 fs-1 text-info"><i class="bi bi-flower1"></i></div>
                            <div class="card-body bg-white"><h5 class="fw-bold fs-6 mb-0">💐 Cổng Hoa Tươi Độc Đáo — Phú Nhuận</h5></div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-5">
                    <a href="https://facebook.com" target="_blank" rel="noopener" class="btn btn-outline-primary px-4">
                        <i class="bi bi-facebook me-2"></i>Xem thêm nhiều mẫu hơn trên Facebook của Chi Chi
                    </a>
                </div>
            </div>
        </section>
    `,

    // ⭐ 5. TRANG VÌ SAO CHỌN (Why Us)
    whyUs: `
        <section class="why-us py-5 bg-light">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="fw-bold">Tại Sao Chọn Chi Chi Wedding?</h2>
                    <p class="text-muted">Hơn 10 năm kinh nghiệm, đồng hành cùng hơn 5.000+ cặp đôi hạnh phúc trên toàn địa bàn TP.HCM</p>
                </div>

                <div class="row g-4">
                    <div class="col-md-6 col-lg-3">
                        <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-primary border-3">
                            <h4 class="fw-bold fs-5 mb-3 text-primary">10+ Năm Kinh Nghiệm</h4>
                            <p class="text-muted small mb-0">Đội ngũ chuyên gia lành nghề, am hiểu sâu sắc phong tục văn hóa lễ cưới hỏi Nam Bộ xưa và nay.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-success border-3">
                            <h4 class="fw-bold fs-5 mb-3 text-success">Chất Lượng Đảm Bảo</h4>
                            <p class="text-muted small mb-0">Nguyên vật liệu nhập mới, phông vải cao cấp là phẳng phiu, hoa giả loại 1 bền đẹp bắt kịp xu hướng thị trường.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-warning border-3">
                            <h4 class="fw-bold fs-5 mb-3 text-warning">Giá Tốt Không Phát Sinh</h4>
                            <p class="text-muted small mb-0">Cam kết chi phí tối ưu, minh bạch, cạnh tranh nhất thị trường — hoàn toàn không có bất kì chi phí ẩn nào.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-info border-3">
                            <h4 class="fw-bold fs-5 mb-3 text-info">Cam Kết Đúng Giờ 100%</h4>
                            <p class="text-muted small mb-0">Đội ngũ kỹ thuật thi công nhanh, đảm bảo hoàn thiện chỉnh chu mọi hạng mục trước giờ hành lễ ít nhất 30 phút.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="p-4 bg-white rounded shadow-sm h-100">
                            <h4 class="fw-bold fs-5 mb-2"><i class="bi bi-grid-3x3-gap text-muted me-2"></i>Mẫu Đa Dạng</h4>
                            <p class="text-muted small mb-0">Đầy đủ hệ thống bảng màu phong phú: hồng ngọt ngào, đỏ may mắn, vàng sang trọng, tím ấm áp, xanh mướt...</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="p-4 bg-white rounded shadow-sm h-100">
                            <h4 class="fw-bold fs-5 mb-2"><i class="bi bi-geo-alt text-muted me-2"></i>Phủ Khắp TPHCM</h4>
                            <p class="text-muted small mb-0">Hỗ trợ vận chuyển lắp đặt cơ động trên khắp 22 quận huyện trực thuộc TP.HCM và các tỉnh giáp ranh lân cận.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="p-4 bg-white rounded shadow-sm h-100">
                            <h4 class="fw-bold fs-5 mb-2"><i class="bi bi-chat-heart text-muted me-2"></i>Tư Vấn Miễn Phí</h4>
                            <p class="text-muted small mb-0">Đội ngũ hotline túc trực hỗ trợ nhiệt tình 7 ngày trong tuần, khảo sát không gian và lên thiết kế sơ bộ hoàn toàn miễn phí.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="p-4 bg-white rounded shadow-sm h-100 border border-danger">
                            <h4 class="fw-bold fs-5 mb-2 text-danger"><i class="bi bi-shield-check me-2"></i>Hoàn Tiền 100%</h4>
                            <p class="text-muted small mb-0 fw-medium">Sẵn sàng đền bù, hoàn tiền 100% giá trị hợp đồng nếu phát hiện làm sai mẫu mã thỏa thuận ban đầu hoặc chậm giờ làm lễ.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    // 📞 6. TRANG LIÊN HỆ (Contact)
    contact: `
        <section class="contact-section py-5 bg-white">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="fw-bold">Liên Hệ Chúng Tôi</h2>
                    <p class="text-muted">Điền thông tin yêu cầu bên dưới — chuyên viên tư vấn sẽ liên hệ lại ngay trong vòng 30 phút</p>
                </div>

                <div class="row g-4">
                    <div class="col-md-5">
                        <h4 class="fw-bold mb-4">Thông Tin Liên Hệ</h4>
                        <div class="d-flex mb-4 gap-3">
                            <div class="fs-4 text-primary"><i class="bi bi-geo-alt"></i></div>
                            <div>
                                <h6 class="fw-bold mb-1">Showroom / Xưởng Thiết Kế</h6>
                                <p class="text-muted small mb-0">689 Nguyễn Văn Quá, P. Đông Hưng Thuận, Quận 12, TP.HCM</p>
                            </div>
                        </div>
                        <div class="d-flex mb-4 gap-3">
                            <div class="fs-4 text-primary"><i class="bi bi-telephone"></i></div>
                            <div>
                                <h6 class="fw-bold mb-1">Hotline Hỗ Trợ (7 ngày / tuần)</h6>
                                <p class="text-muted small mb-0">0943.134.437 – 0986.744.751</p>
                            </div>
                        </div>
                        <div class="d-flex mb-4 gap-3">
                            <div class="fs-4 text-primary"><i class="bi bi-envelope"></i></div>
                            <div>
                                <h6 class="fw-bold mb-1">Thư Điện Tử (Email)</h6>
                                <p class="text-muted small mb-0">conghoacuoi@gmail.com</p>
                            </div>
                        </div>
                        <div class="d-flex mb-4 gap-3">
                            <div class="fs-4 text-primary"><i class="bi bi-clock"></i></div>
                            <div>
                                <h6 class="fw-bold mb-1">Giờ Mở Cửa Làm Việc</h6>
                                <p class="text-muted small mb-0">7:00 – 21:00 hằng ngày (áp dụng làm việc cả các ngày lễ, Tết)</p>
                            </div>
                        </div>

                        <div class="mt-4 rounded overflow-hidden border border-light shadow-sm" style="height: 220px;">
                            <iframe src="https://maps.google.com/maps?q=689%20Nguy%E1%BB%85n%20V%C4%83n%20Qu%C3%A1,%20Qu%E1%BA%ADn%2012,%20TPHCM&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>

                    <div class="col-md-7">
                        <div class="p-4 bg-light rounded shadow-sm">
                            <h4 class="fw-bold mb-4 text-center">Gửi Yêu Cầu Tư Vấn Tận Nơi</h4>
                            <form id="consultation-form">
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label class="form-label small fw-semibold">Hoga tên khách hàng *</label>
                                        <input type="text" class="form-content form-control shadow-none" placeholder="Nhập họ tên của bạn..." required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="form-label small fw-semibold">Số điện thoại liên hệ *</label>
                                        <input type="tel" class="form-content form-control shadow-none" placeholder="Nhập số điện thoại..." required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="form-label small fw-semibold">Dịch vụ đang quan tâm *</label>
                                        <select class="form-select shadow-none">
                                            <option value="" disabled selected>-- Chọn loại dịch vụ --</option>
                                            <option>Trang trí gia tiên — Gói Cơ Bản (3.999K)</option>
                                            <option>Trang trí gia tiên — Gói Nâng Cao (5.499K)</option>
                                            <option>Trang trí gia tiên — Gói Cao Cấp (8.999K)</option>
                                            <option>Hạng mục: Cổng hoa cưới rời</option>
                                            <option>Hạng mục: Backdrop sân khấu đám cưới</option>
                                            <option>Dịch vụ: Mâm quả cưới hỏi Rồng Phụng</option>
                                            <option>Dịch vụ: Cho thuê xe cưới đưa dâu</option>
                                            <option>Dịch vụ: Quay phim & chụp ảnh phóng sự</option>
                                            <option>Đặt combo trọn gói nhiều dịch vụ</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="form-label small fw-semibold">Ngày dự kiến tổ chức lễ</label>
                                        <input type="date" class="form-content form-control shadow-none">
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label small fw-semibold">Khu vực tổ chức tại TP.HCM *</label>
                                        <select class="form-select shadow-none" required>
                                            <option value="" disabled selected>-- Vui lòng lựa chọn Quận / Huyện --</option>
                                            <option>Quận 1</option><option>Quận 3</option><option>Quận 4</option>
                                            <option>Quận 5</option><option>Quận 6</option><option>Quận 7</option>
                                            <option>Quận 8</option><option>Quận 10</option><option>Quận 11</option>
                                            <option>Quận 12</option><option>Quận Bình Tân</option><option>Quận Bình Thạnh</option>
                                            <option>Quận Gò Vấp</option><option>Quận Phú Nhuận</option><option>Quận Tân Bình</option>
                                            <option>Quận Tân Phú</option><option>TP Thủ Đức</option><option>Huyện Bình Chánh</option>
                                            <option>Huyện Củ Chi</option><option>Huyện Hóc Môn</option><option>Huyện Nhà Bè</option>
                                            <option>Tỉnh / Thành phố khác lân cận</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label small fw-semibold">Ghi chú hoặc yêu cầu thiết kế riêng</label>
                                        <textarea class="form-content form-control shadow-none" rows="4" placeholder="Nhập địa chỉ nhà cụ thể, tone màu mong muốn hoặc thắc mắc cần giải đáp thêm..."></textarea>
                                    </div>
                                    <div class="col-12 mt-4">
                                        <button type="submit" class="btn btn-primary w-100 py-2 fw-bold text-uppercase tracking-wide shadow-sm">Gửi Yêu Cầu Tư Vấn Ngay</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};
