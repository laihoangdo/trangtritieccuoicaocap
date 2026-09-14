// // 1. Khai báo nội dung HTML cho từng trang con tương ứng với URL chuẩn
// const routes = {
//     "/": `
//         <section class="hero">
//             <h1>Trang Trí Gia Tiên Đẹp · Sang · Giá Rẻ</h1>
//             <p>Dịch vụ trang trí gia tiên trọn gói tại TP.Hồ Chí Minh — Uy tín từ 2015.</p>
//         </section>
//     `,
//     "/dich-vu": `
//         <section class="services">
//             <h2>Dịch Vụ Của Chúng Tôi</h2>
//             <ul>
//                 <li>Cổng Hoa Cưới Tươi & Giả (Từ 2.500.000đ)</li>
//                 <li>Backdrop Sân Khấu Cưới (Từ 1.800.000đ)</li>
//                 <li>Cho Thuê Mâm Quả Rồng Phụng (Từ 500.000đ)</li>
//             </ul>
//         </section>
//     `,
//     "/goi-trang-tri": `
//         <section class="pricing">
//             <h2>Bảng Giá Dịch Vụ Gia Tiên</h2>
//             <p>Gói Cơ Bản: 3.999.000đ</p>
//             <p>Gói Nâng Cao: 5.499.000đ</p>
//             <p>Gói Cao Cấp: 8.999.000đ</p>
//         </section>
//     `,
//     "/album-anh": `
//         <section class="album">
//             <h2>Album Ảnh Thực Tế</h2>
//             <p>Tone Hồng Gold, Tone Đỏ Q.12, Tone Tím Gò Vấp, Tone Gold Thủ Đức...</p>
//         </section>
//     `,
//     "/vi-sao-chon": `
//         <section class="why-us">
//             <h2>Tại Sao Chọn Chi Chi Wedding?</h2>
//             <p>Hơn 10 năm kinh nghiệm, cam kết đúng giờ 100%, hoàn tiền nếu sai mẫu.</p>
//         </section>
//     `,
//     "/lien-he": `
//         <section class="contact">
//             <h2>Liên Hệ Chúng Tôi</h2>
//             <p>Địa chỉ: 689 Nguyễn Văn Quá, P. Đông Hưng Thuận, Quận 12, TP.HCM</p>
//             <p>Hotline: 0943.134.437</p>
//         </section>
//     `
// };

// // 2. Hàm xử lý render nội dung ra màn hình dựa theo URL hiện tại
// const handleLocation = () => {
//     const path = window.location.pathname;
//     // Nếu gõ URL không tồn tại, tự động trả về trang chủ hoặc trang 404 tuỳ bạn
//     const html = routes[path] || routes["/"];
//     document.getElementById("main-content").innerHTML = html;
// };

// // 3. Chặn sự kiện click thẻ <a> để tránh việc reload lại trang web
// window.addEventListener("click", (e) => {
//     if (e.target.matches(".nav-link")) {
//         e.preventDefault(); // Chặn reload trang mặc định
//         const url = e.target.getAttribute("href");
//         window.history.pushState({}, "", url); // Thay đổi URL trên thanh địa chỉ
//         handleLocation(); // Cập nhật lại nội dung trang con
//     }
// });

// // 4. Xử lý khi bấm nút Back/Forward của trình duyệt và khi vừa load trang xong
// window.onpopstate = handleLocation;
// handleLocation();



// Thay thế "chichi-wedding" bằng tên repository của bạn
const repoName = "/trangtritieccuoicaocap";

const routes = {
    [`${repoName}/`]: templates.home,
    [`${repoName}/dich-vu`]: templates.services,
    [`${repoName}/goi-trang-tri`]: templates.pricing,
    [`${repoName}/album-anh`]: templates.album,
    [`${repoName}/vi-sao-chon`]: templates.whyUs,
    [`${repoName}/lien-he`]: templates.contact
};

// 2. Hàm xử lý render nội dung ra màn hình dựa theo URL hiện tại
const handleLocation = () => {
    let path = window.location.pathname;

    // Chuẩn hóa đường dẫn nếu thiếu dấu gạch chéo ở cuối trang chủ
    if (path === repoName) {
        path = `${repoName}/`;
    }

    const html = routes[path] || routes[`${repoName}/`];
    document.getElementById("main-content").innerHTML = html;
};

// 3. Chặn sự kiện click thẻ <a> để tránh việc reload lại trang web
window.addEventListener("click", (e) => {
    if (e.target.matches(".nav-link")) {
        e.preventDefault();
        const url = e.target.getAttribute("href");
        window.history.pushState({}, "", url);
        handleLocation();
    }
});

window.onpopstate = handleLocation;
handleLocation();
