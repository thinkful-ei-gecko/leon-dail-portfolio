function addBio(add) {
  $('main').empty();
  $('.inactive').empty();
  if (add) {
    $('main').html(`
        <article class="information">
            <h3 class="active">bio</h3>
            <p class="bold">Hi! My name is Leon, and I'm a full-stack web developer.</p>
            <p>I find myself most proud when I am able to solve a challenging problem. I am confident knowing that I can look at a question from all sides and execute the best solution.</p>
            <p class="special">
                <h4>skills<h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>API</li>
                </ul>
            </p>
        </article>
        <article class="information">
            <h3 class="active">projects</h3>
            <p class="bold">Hi! My name is Leon, and I'm a full-stack web developer.</p>
            <p>Cras vitae augue volutpat risus gravida tincidunt. Suspendisse et tincidunt lorem. Praesent molestie mattis sem, rhoncus fermentum mi placerat ut. Etiam eu sapien lacus. Donec pretium cursus nisi, eu dictum purus efficitur quis. </p>
        </article>`
    );
    $('main').fadeIn();
    $('.inactive').text('projects');
  }
}

function fillNav(add) {
  if (!add) { //first page
    $('nav').html(
      `<ul>
        <li>bio</li>
        <li>projects</li>
        <li>contact</li>
      </ul>`);
  }
  else {
    $('nav').html(
      `<ul>
        <li>bio</li>
        <li>projects</li>
        <li>contact</li>
      </ul>`);
  }
}

function showThirdPage() {
  $('h2').html('');
  fillNav();
  addProjects('add');
  $('*').removeClass('first').addClass('second');
}

function showSecondPage() {
  $('h2').html('');
  fillNav();
  addBio('add');
  $('*').removeClass('first').addClass('second');
}

function showFirstPage() {
  $('h1').html('leon<span>dail</span>');
  $('h2').html('full-stack <span>web developer</span>');
  fillNav('add');
  addBio();
  $('*').removeClass('second').addClass('first');
}


function ready() {
  $('*').addClass('first');
  showFirstPage();
  console.log($(window).scrollTop());
  $(window).scroll( function() {
    if ($(this).scrollTop() > 0) {
      showSecondPage();
      console.log($(this).scrollTop());
    }
    else {
      showFirstPage();
    }
  });
}

$(ready);