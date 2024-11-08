// Sayfa yüklendiğinde zoom seviyesini %110 yap
  document.body.style.zoom = "110%";

  // Sayfadan ayrılırken zoom seviyesini %100'e geri döndür
  window.addEventListener("beforeunload", function () {
    document.body.style.zoom = "110%";
  });

  $(document).ready(function(){
    $('#datetimepicker').datetimepicker({
        format: 'd-m-Y', // Tarih formatı (Yıl-ay-gün)
        timepicker: false, // Sadece tarih seçimi için saat seçici devre dışı
        i18n: {
            tr: { // Türkçe çeviriler
                months: [
                    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
                    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
                ],
                dayOfWeek: [
                    "Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"
                ]
            }
        },
        lang: 'tr' // Dil ayarını Türkçe olarak belirle
    });
});


