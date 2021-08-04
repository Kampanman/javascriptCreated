
$(function() {
  $('#youtubeCorner').DataTable({
      responsive: true,
      //lengthChange: true,
      info: false,searching: true,ordering: false,paging: true,
      pagingType: "full_numbers",
      lengthMenu: [ 10, 20, 50],
      columnDefs: [
        { targets: 0, width: "20%" },
        { targets: 1, width: "20%" },
        { targets: 2, width: "auto" }
      ],
      language: {url: "//cdn.datatables.net/plug-ins/1.10.20/i18n/Japanese.json"}
  });
  var getTube = function(){
    $('.viewTube').each(function(){
      $(this).on('click',function(){
        var tubeCode = $(this).data('tubecode');
        var ajaxTubeGet = $('#ajaxTubeGet');
        var tubeHd = "<iframe width='560' height='315' src='https://www.youtube.com/embed/";
        var tubeFT = "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        ajaxTubeGet.removeClass('d-none');
        ajaxTubeGet.html(tubeHd+tubeCode+tubeFT);
      });
    });    
  }
  setTimeout(getTube,1000);
});
