function addProjectText() {
  $('main').empty();
  $('main').html(
    'These are my amazing projects!!!! :O'
  );
}

function addBioText() {
  $('main').empty();
  $('main').html(
    `<h3 class="second">bio</h3>
    <p class="second bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse vulputate enim sit amet nibh elementum placerat. Praesent nec vestibulum elit.</p>
    <p>Cras vitae augue volutpat risus gravida tincidunt. Suspendisse et tincidunt lorem. 
        Praesent molestie mattis sem, rhoncus fermentum mi placerat ut. Etiam eu sapien lacus. 
        Donec pretium cursus nisi, eu dictum purus efficitur quis. </p>`);
}

function addFirstH2Text() {
  $('h2').html(`
  full-stack<span class="first">web developer</span>
  `);
}

function addFirstNavText() {
  $('nav').html(`
    <ul class="first">
        <li class="first">bio</li>
        <li class="first">projects</li>
        <li class="first">contact</li>
        <li class="first">github  <span>|</span>  linkedIn</li>
    </ul>`);
}

function ready() {
  addFirstNavText();
  addFirstH2Text();
  let scrollLocation = 0;
  $(window).scroll(function(e) {
    if ($(this).scrollTop() > scrollLocation) {
      $('h2.first').empty();
      $('nav.first').empty();
      if ($('body').hasClass('first')) {
        $('body').removeClass('first').addClass('second');
        $('body *').removeClass('first').addClass('second');
        addBioText();
        scrollLocation = $(this).scrollTop();
        console.log(scrollLocation);
      }
    }
    if ($(this).scrollTop() < scrollLocation) {
      $('body').removeClass('second').addClass('first');
      $('body *').removeClass('second').addClass('first');
      addFirstNavText();
      addFirstH2Text();
      scrollLocation = $(this).scrollTop();
      console.log(scrollLocation);
    }
  });
}

$(ready);