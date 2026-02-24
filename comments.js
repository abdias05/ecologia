var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = 'blog-ecologia-2026';
};

(function() { 
    var d = document, s = d.createElement('script');

    // ⚠️ CAMBIA ESTO por tu shortname real de Disqus
    s.src = https://ecolologia.netlify.app/; 
    
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
