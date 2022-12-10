(function ($) {
  $(window).on('load', () => {
    $('.preloader').fadeOut(1000);
  });

  $(document).ready(() => {
    // lightcase
    $('a[data-rel^=lightcase]').lightcase();

    // search cart option
    $(document).on('click', '.cart-option', () => {
      $('.cart-option').toggleClass('open');
    });
    $(document).on('click', '.search-option, .search-close', () => {
      $('.search-input').toggleClass('open');
    });
    $(document).on('click', '.user-panel', () => {
      $('.user-panel').toggleClass('open');
    });

    // Header Section Menu Part
    $('ul li ul').parent('li').addClass('menu-item-has-children');
    $('.shop-menu>li .shop-submenu').parent('li').children('a').addClass('dd-icon-down');

    // drop down menu width overflow problem fix
    $('ul')
      .parent()
      .on('hover', function () {
        const menu = $(this).find('ul');
        const menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
          const newpos = -$(menu).width();
          menu.css({ left: newpos });
        }
      });

    // mobile menu responsive
    $(document).on('click', '.header-bar', () => {
      $('.header-bar').toggleClass('close');
      $('.mobile-menu').toggleClass('open');
    });

    // mobile drodown menu display
    $('.main-menu ul li a, .shop-menu li a').on('click', function (e) {
      const element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(1000, 'swing');
      } else {
        element.addClass('open');
        element.children('ul').slideDown(1000, 'swing');
        element.siblings('li').children('ul').slideUp(1000, 'swing');
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(1000, 'swing');
      }
    });

    // menu options
    const fixed_top = $('.header-area, .mobile-header');
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
        fixed_top.addClass('animated fadeInDown menu-fixed');
      } else {
        fixed_top.removeClass('animated fadeInDown menu-fixed');
      }
    });

    // scroll up start here
    $(() => {
      // Check to see if the window is top if not then display button
      $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          $('.scrollToTop').css({ bottom: '2%', opacity: '1', transition: 'all .5s ease' });
        } else {
          $('.scrollToTop').css({ bottom: '-30%', opacity: '0', transition: 'all .5s ease' });
        }
      });
      // Click event to scroll to top
      $('.scrollToTop').on('click', () => {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
      });
    });

    // Isotope
    jQuery(window).on('load', () => {
      const $grid = $('.grid').isotope({
        itemSelector: '.product-item',
        masonry: {
          columnWidth: 0,
        },
      });
      // filter functions
      const filterFns = {
        // show if number is greater than 50
        numberGreaterThan50() {
          const number = $(this).find('.number').text();
          return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium() {
          const name = $(this).find('.name').text();
          return name.match(/ium$/);
        },
      };
      // bind filter button click
      $('.product-filter-name').on('click', 'li', function () {
        let filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({ filter: filterValue });
      });
      // change is-checked class on buttons
      $('.product-filter-name').each((i, buttonGroup) => {
        const $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'li', function () {
          $buttonGroup.find('.active').removeClass('active');
          $(this).addClass('active');
        });
      });
    });

    // Banner slider
    var swiper = new Swiper('.banner-slider', {
      slidesPerView: 1,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.banner-pagination',
        clickable: true,
      },
      loop: true,
    });

    // testi slider
    var swiper = new Swiper('.testi-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        420: {
          slidesPerView: 1,
        },
      },
      loop: true,
    });
    var swiper = new Swiper('.testi-slider-2', {
      slidesPerView: 1,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.testi-slider-next',
        prevEl: '.testi-slider-prev',
      },
      pagination: {
        el: '.testi-pagination',
        clickable: true,
      },
      loop: true,
    });

    // slider-product
    var swiper = new Swiper('.slider-product', {
      slidesPerView: 1,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.slider-product-pagination',
        clickable: true,
      },
      loop: true,
    });

    // sponsor slider
    var swiper = new Swiper('.sponsor-slider', {
      slidesPerView: 5,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        420: {
          slidesPerView: 1,
        },
      },
      loop: true,
    });

    // counterup js start here
    $('.count-number').each(function () {
      const size = $(this).text().split('.')[1] ? $(this).text().split('.')[1].length : 0;
      $(this)
        .prop('Counter', 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            step(func) {
              $(this).text(parseFloat(func).toFixed(size));
            },
          }
        );
    });

    // product view mode change js
    $(() => {
      $('.product-view-mode').on('click', 'a', function (e) {
        e.preventDefault();
        const shopProductWrap = $('.shop-product-wrap');
        const viewMode = $(this).data('target');
        $('.product-view-mode a').removeClass('active');
        $(this).addClass('active');
        shopProductWrap.removeClass('grids lists').addClass(viewMode);
      });
    });

    // shop cart + - start here
    const CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $('.qtybutton').on('click', function () {
      const $button = $(this);
      const oldValue = $button.parent().find('input').val();
      if ($button.text() === '+') {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find('input').val(newVal);
    });

    // sop single slider
    const galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
      },
    });
    const galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.shop-slider-next',
        prevEl: '.shop-slider-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
      loop: true,
    });

    // Review Tabs
    $('ul.review-nav').on('click', 'li', function (e) {
      e.preventDefault();
      const reviewContent = $('.review-content');
      const viewRev = $(this).data('target');
      $('ul.review-nav li').removeClass('active');
      $(this).addClass('active');
      reviewContent.removeClass('review-content-show description-show').addClass(viewRev);
    });

    // service single section start here
    $(() => {
      const tabWrapper = $('.service-single .section-wrapper');
      const tabMnu = tabWrapper.find('.tab-menu  li');
      const tabContent = tabWrapper.find('.tab-cont > .tab-pane');
      tabContent.not(':first-child').hide();
      tabMnu.each(function (i) {
        $(this).attr('data-tab', `tab${i}`);
      });
      tabContent.each(function (i) {
        $(this).attr('data-tab', `tab${i}`);
      });

      tabMnu.on('click', function () {
        const tabData = $(this).data('tab');
        tabWrapper.find(tabContent).hide();
        tabWrapper.find(tabContent).filter(`[data-tab=${tabData}]`).show();
      });

      $('.tab-menu > li').on('click', function () {
        const before = $('.tab-menu li.active');
        before.removeClass('active');
        $(this).addClass('active');
      });
    });

    // wow animation
    new WOW().init();
  });
})(jQuery);
