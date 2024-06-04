$(document).ready(function(){
     $('#header').html('<div class="rdHeaderMobile l_hidden"> <div class="container"> <div class="rdIdentity">República Dominicana</div></div></div><div class="ctn_header"> <div class="container"> <div class="nav_right"> <div class="boxSearch"> <div class="rdIdentity m_hidden"> República Dominicana </div><form action="http://www.ministeriodeeducacion.gob.do/busqueda" id="searchform" class="m_hidden" method="GET"> <input type="text" name="buscar" placeholder="¿Qué estás buscando?" required> <div class="btnSearch"> <input type="submit" id="searchsubmit" value="Buscar"> </div></form> <div class="navSupport"> <ul> <li> <a alt="Inicio" title="Inicio" href="http://www.ministeriodeeducacion.gob.do/"> <span class="icon Ic_gpw-18 l_hidden"></span><span class="m_hidden">Inicio</span> </a> </li><li class="middle"> <a alt="Mapa del sitio" title="Mapa del sitio" href="http://www.ministeriodeeducacion.gob.do/mapa-de-sitio"> <span class="icon Ic_gpw-33 l_hidden "></span><span class="m_hidden">Mapa del Sitio</span> </a> </li><li> <a alt="Contacto" title="Contacto" href="http://www.ministeriodeeducacion.gob.do/contactos"> <span class="icon Ic_gpw-98 l_hidden "></span><span class="m_hidden">Contactos</span> </a> </li></ul> </div></div></div><div class="nav_left"> <div class="logo"> <a href="http://www.ministeriodeeducacion.gob.do/"><img src="img/Logo-Ministerio-de-Educacion-Republica-Dominicana-MINERD.png" alt="Logo institucional del ministerio de educación de la República Dominicana" title="Logo institucional del ministerio de educación de la República Dominicana" ></a> </div></div><div class="nav_main"></div></div></div></div><div class="boxid_ nav m_hidden"> <div class="container"> <div class="grid_12"> <div class="primaryNav"> <ul> <li> <a>Inicio</a> </li><li id="sobre-nosotros" class="parent"> <a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/quienes-somos">Sobre nosotros</a> <div class="ctnChild_1"> <ul class="tabNav"> <li class="active"> <span class="icPrimaryNav icon Ic_gpw-28"></span> <a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/quienes-somos" id="quienes-somos" class="linkTabNav active" meta-tab="quienes-somos">¿Quiénes Somos?</a> </li><li> <span class="icPrimaryNav icon Ic_gpw-02"></span> <a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/historia">Historia</a> </li><li> <span class="icPrimaryNav icon Ic_gpw-33"></span> <a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/organigrama">Organigrama</a> </li><li> <span class="icPrimaryNav icon Ic_gpw-19"></span> <a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/dependencias" id="dependencias" class="linkTabNav" meta-tab="dependencias">Dependencias</a> </li><li> <span class="icPrimaryNav icon Ic_gpw-17"></span> <a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/despacho-del-ministro" id="despacho-ministro" class="linkTabNav" meta-tab="despacho-ministro"> Despacho del Ministro </a> </li><li> <span class="icPrimaryNav icon Ic_gpw-20"></span> <a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/marco-legal">Marco Legal</a> </li><li> <span class="icPrimaryNav icon Ic_gpw-15"></span> <a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/memorias">Memorias</a> </li><li> <span class="icPrimaryNav icon Ic_gpw-14"></span> <a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/plan-estrategico">Plan Estratégico</a> </li><li> <span class="icPrimaryNav icon Ic_gpw-34"></span> <a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/areas-institucionales" id="areas-administrativas" class="linkTabNav" meta-tab="areas-administrativas">Áreas Administrativas</a> </li></ul> </div></li><li> <a href="http://www.ministeriodeeducacion.gob.do/servicios">Servicios</a> </li><li> <a href="http://www.ministeriodeeducacion.gob.do/transparencia">Transparencia</a> </li><li> <a href="http://www.ministeriodeeducacion.gob.do/comunicaciones/noticias">Noticias</a> </li><li> <a href="http://www.ministeriodeeducacion.gob.do/contactos">Contactos</a> </li></ul> </div></div></div></div><div class="boxid_ navMobile l_hidden"> <div class="container"> <div class="grid_12"> <div class="barNav"> <div class="ctnSearchMobile"> <form action="http://www.ministeriodeeducacion.gob.do/busqueda" method="GET"> <div class="boxinput"> <input type="text" name="buscar" placeholder="¿Qué estás buscando?" required> </div></form> </div><div class="ctnBtnNavMobile"> <div class="btn_navMobile"> <svg x="0px" y="0px" width="100%" viewBox="0 0 96 96" class="gh-svg gh-svg-top" enable-background="new 63 169 245 1"> <rect width="100%" height="14" x="0%" y="18" class="gh-svg-rect gh-svg-rect-top"></rect> <rect width="100%" height="14" x="0%" y="54" class="gh-svg-rect gh-svg-rect-center"></rect> <rect width="100%" height="14" x="0%" y="90" class="gh-svg-rect gh-svg-rect-bottom"></rect> </svg> </div></div></div><div class="primaryNavMobile hidden"> <ul> <li><a href="http://www.ministeriodeeducacion.gob.do/">Inicio</a></li><li><a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/quienes-somos">Sobre nosotros</a></li><li><a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/dependencias">Dependencias</a></li><li><a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/despacho-del-ministro/biografia">Despacho del Ministro</a></li><li><a href="http://www.ministeriodeeducacion.gob.do/sobre-nosotros/marco-legal">Marco Legal</a></li><li><a href="http://www.ministeriodeeducacion.gob.do/servicios">Servicios</a></li><li><a href="http://www.ministeriodeeducacion.gob.do/transparencia">Transparencia</a></li><li><a href="http://www.ministeriodeeducacion.gob.do/terminos-de-uso">Términos de uso</a></li><li><a href="http://www.ministeriodeeducacion.gob.do/politicas-de-privacidad">Políticas de privacidad</a></li><li><a href="http://www.ministeriodeeducacion.gob.do/preguntas-frecuentes">Preguntas frecuentes</a></li></ul> </div></div></div>');
     $('#footer').html('<div class="container"> <div class="ctnFotterInfo"> <ul> <li> <a href="http://www.ministeriodeeducacion.gob.do/" target=""> <img class="ftLogoMinerd" src="img/img-escudo-republica-dominicana.png" alt="Escudo de la República Dominicana" title="Logo institucional del ministerio de educación de la República Dominicana" width="70" height="" style="width: 75px; margin-right: 20px; margin-top: -3px;"></a> <a href="http://www.ministeriodeeducacion.gob.do/" target=""> <img class="ftLogoMinerd" src="img/logo_minerd_grayscala.png" alt="Logo institucional del ministerio de educación de la República Dominicana" title="Logo institucional del ministerio de educación de la República Dominicana" width="160" height=""></a> </li></ul> <ul> <li>Ministerio de Educación de la República Dominicana</li><li class="l_hidden"><a href="http://www.ministeriodeeducacion.gob.do/">Inicio</a> | <a href="http://www.ministeriodeeducacion.gob.do/mapa-de-sitio">Mapa del Sitio</a> | <a href="http://www.ministeriodeeducacion.gob.do/contactos">Contacto</a></li><li class="l_hidden"><a href="#header">SUBIR</a></li><li class="m_hidden"><address>Avenida Máximo Gómez esquina Santiago, No.02 Gazcue, Distrito Nacional, República Dominicana.</address></li><li class="m_hidden">Tel.: 809.688.9700 | email: <a href="mailto:info@minerd.gob.do"> info@minerd.gob.do</a></li><li class="m_hidden">Horario: De 7:30 a.m. a 4:30 p.m. de Lunes a Viernes.</li><li class="l_hidden"> <a class="norticLinkMobile" href="http://optic.gob.do/nortic/index.php/certificaciones/instituciones-certificadas/item/oficina-presidencial-de-tecnologias-de-la-informacion-y-comunicacion-optic" target="_blank" >Medio web certificado bajo la NORTIC A2:2013 con el NIU 13001-02-A20D01</a> </li><li class="m_hidden"><a href="http://www.ministeriodeeducacion.gob.do/terminos-de-uso">Terminos de uso</a> | <a href="http://www.ministeriodeeducacion.gob.do/politicas-de-privacidad">Política de privacidad</a> | <a href="http://www.ministeriodeeducacion.gob.do/preguntas-frecuentes">Preguntas frecuentes</a></li><li>© 2022 MINISTERIO DE EDUCACIÓN | Todos los Derechos Reservados</li></ul> </div><div class="insigniasNORTIC m_hidden"> <div class="stamp-container"><div class="stamp-box"><div class="stamp"><a href="https://nortic.ogtic.gob.do/instituciones/MINERD" target="_blank" class="stamp stack-top" title="Norma sobre Accesibilidad Web del Estado Dominicano."></a><iframe src="https://be.nortic.ogtic.gob.do/stampprocesses/stamp/132" height="100" width="100" frameborder="0" scrolling="no" style="width: 99%;"></iframe></div></div></div></div></div>');    
});

$(document).ready(function(){
              $(".ctnFotterInfo li").on("click",function (e){
                localStorage.setItem("mobile","1");
              });


 
                $(".linkTabNav").on("click",function (e){
                e.preventDefault();
 
                               var attr = $(this).attr("meta-tab");
                               var ctntab = '.'+ attr;
 
                               var target = ctntab,
                               $target = $(target);
 
                               if ($(this).hasClass("active")){
                                              
                                              
                               }else{
                                               $(".linkTabNav").parent().removeClass("active");
                                               $(".linkTabNav").removeClass("active");
                                               $(".itemTab").addClass("hidden");
                                               $(this).addClass("active");
                                               $(this).parent().addClass("active");
                                               $(target).removeClass("hidden");
                               }
    
                });
 
                $(".ctnBtnNavMobile").on("click",function (e){
                e.preventDefault();
 
                               if ($(".btn_navMobile").hasClass("active")){
                                               $(".btn_navMobile").removeClass("active");
                                              
                               }else{
                                               $(".btn_navMobile").addClass("active");
                               }
 
                               if ($(".primaryNavMobile ").hasClass("hidden")){
                                               $(".primaryNavMobile ").removeClass("hidden");
                                              
                               }else{
                                               $(".primaryNavMobile ").addClass("hidden");
                               }
    
                });
 
                $(".linkTabNavMobile").on("click",function (e){
                e.preventDefault();
 
                               var attr = $(this).attr("meta-tab");
                               var ctntab = '.'+ attr;
 
                               var target = ctntab,
                               $target = $(target);
 
                               if ($(this).hasClass("active")){
                                               $(".linkTabNavMobile").removeClass("active");
                                               $(".ctnChild_mobile").addClass("hidden_a");
                               }else {
                                               $(".linkTabNavMobile").removeClass("active");
                                               $(".ctnChild_mobile").addClass("hidden_a");
                                               $(this).addClass("active");
                                               $(target).removeClass("hidden_a");
                               }
    
                });


});


