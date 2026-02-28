document.addEventListener('DOMContentLoaded', () => {
    // Thêm hiệu ứng trượt nhẹ khi load trang
    document.querySelector('.hero-content').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.hero-content').style.transition = 'opacity 1s';
        document.querySelector('.hero-content').style.opacity = '1';
    }, 100);
});
