document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper(".mon-slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3000
        }
    });

    const lightbox = new SimpleLightbox('images');

    const options = {
        gutterPixels: 50,
    };
    
    const filterizr = new Filterizr('.portfolio-elements', options);

    let filtersList = document.querySelectorAll('.filters li');
    filtersList.forEach(function(filterItem){
        filterItem.addEventListener('click', function(){
            document.querySelector('.filters .active').classList.remove('active');
            this.classList.add('active');
        });
    });

    // Ajout du code pour la gestion des onglets
    let tabs = document.querySelectorAll('.tabs .tab');
    tabs.forEach(function(tab){
        tab.addEventListener('click', function(){
            changeTab(this);
        });
    });

    function changeTab(selectedTab, axe) {
        // Retirer la classe 'tab-active' de tous les onglets
        tabs.forEach(function (tab) {
            tab.classList.remove('tab-active');
        });
    
        // Ajouter la classe 'tab-active' à l'onglet sélectionné
        selectedTab.classList.add('tab-active');
    
        // Retirer la classe 'active' de tous les contenus
        document.querySelectorAll('.content').forEach(function (content) {
            content.classList.remove('active');
        });
    
        // Utiliser le paramètre 'axe' ou récupérer l'axe depuis le dataset
        let selectedAxe = axe || selectedTab.dataset.axe;
    
        // Ajouter la classe 'active' au contenu correspondant à l'axe
        document.querySelector(`.content.${selectedAxe}`).classList.add('active');
    
        // Mettre à jour le swiper après chaque changement d'onglet
        swiper.update();
    }
});
