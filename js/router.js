// // Thay thế "chichi-wedding" bằng tên repository của bạn
// const repoName = "/trangtritieccuoicaocap";

// const routes = {
//     [`${repoName}/`]: templates.home,
//     [`${repoName}/dich-vu`]: templates.services,
//     [`${repoName}/goi-trang-tri`]: templates.pricing,
//     [`${repoName}/album-anh`]: templates.album,
//     [`${repoName}/vi-sao-chon`]: templates.whyUs,
//     [`${repoName}/lien-he`]: templates.contact
// };

// // 2. Hàm xử lý render nội dung ra màn hình dựa theo URL hiện tại
// const handleLocation = () => {
//     let path = window.location.pathname;

//     // Chuẩn hóa đường dẫn nếu thiếu dấu gạch chéo ở cuối trang chủ
//     if (path === repoName) {
//         path = `${repoName}/`;
//     }

//     const html = routes[path] || routes[`${repoName}/`];
//     document.getElementById("main-content").innerHTML = html;
// };

// // 3. Chặn sự kiện click thẻ <a> để tránh việc reload lại trang web
// window.addEventListener("click", (e) => {
//     if (e.target.matches(".nav-link")) {
//         e.preventDefault();
//         const url = e.target.getAttribute("href");
//         window.history.pushState({}, "", url);
//         handleLocation();
//     }
// });

// window.onpopstate = handleLocation;
// handleLocation();
