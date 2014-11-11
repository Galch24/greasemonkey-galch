// ==UserScript==
// @name           Yandex Ad Remover Beta
// @description    Removes annoying yandex.ru animated and context adverts
// @author         Galchonok
// @include        http://mail.yandex.ru/*
// @include        https://mail.yandex.ru/*
// @version        0.1
// ==/UserScript==

//Yandex mail have no Parent Element To animated and context adverts
 
var removeYaAdverts = function(){
//Yandex Adverts
document.getElementById('js-main-rtb').style.visibility = 'hidden'; 
document.getElementById('js-main-rtb').style.display = 'none';
}; 

removeYaAdverts();