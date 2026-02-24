// CONFIGURACIÓN DE COMENTARIOS DISQUS
var disqus_config = function () {
    this.page.url = window.location.href;  
    this.page.identifier = 'blog-ecologia-2026'; 
};

(function() { 
    var d = document, s = d.createElement('script');
    
    // IMPORTANTE: 
    // 1. Ve a disqus.com y crea un sitio "Shortname"
    // 2. Reemplaza 'tu-sitio-eco' por el nombre que registres allá.
    s.src = 'https://tu-sitio-eco.disqus.com/embed.js'; 
    
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();