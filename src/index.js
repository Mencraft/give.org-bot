import './styles.css';



document.addEventListener('DOMContentLoaded', function() {
  
  const page = document.body.getAttribute("data-page");

  switch (page) {
      case "home":
        import('./homePage.js').then(module => {
          module.default();
        });
        break;
      default:
        import('./fullPage.js').then(module => {
          module.default();
        });
        break;

  }


  });



