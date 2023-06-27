$('#myModal').modal()                      // initialized with defaults
$('#myModal').modal({ keyboard: false })   // initialized with no keyboard
$('#myModal').modal('show')                // initializes and invokes show immediately
$('.btn.danger').button('toggle').addClass('fat')
$('#myCarousel').on('slid.bs.carousel', function (e) {
    $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
  })
  
  $('#myCarousel').carousel('1') // Will start sliding to the slide 1 and returns to the caller
  $('#myCarousel').carousel('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
  $('#myCollapse').on('shown.bs.collapse', function (e) {
    // Action to execute once the collapsible area is expanded
  })