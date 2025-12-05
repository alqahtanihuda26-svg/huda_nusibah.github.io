document.getElementById('generate-report').addEventListener('click', function() {
    const name = document.getElementById('main-data').value || "غير محدد";
    const area = document.getElementById('reflection-area').value;
    const rating = document.getElementById('rating').value;

    const report = `
        <h3>تقرير التقييم الذاتي</h3>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>محور التأمل:</strong> ${area}</p>
        <p><strong>سلم التقدير:</strong> ${rating} من 5</p>
    `;

    document.getElementById('report-output').innerHTML = report;
});
