let currentLocation = window.location.href;
let tmp_array = currentLocation.split('/');
const project_name = tmp_array[tmp_array.length - 1].split('.')[0];

$(document).ready(function(){

    function __createLang(obj){
        var colors = ["#3498DB", "#17A589", "#F1C40F", "#CB4335", "#8E44AD"];
        var res = $("<div></div>")
        var langs = obj.tool;
        for(let i = 0; i < langs.length; i++){
            var el = $(`<span class="lang" style="background:${colors[i]};" 
                data-aos="zoom-in" data-aos-delay="${500+(i*200)}">${langs[i]}</span>`);
            res.append(el);
        }
        return res;
    }

    const title = $(`<h1 class='title' data-aos='fade-down' data-aos-duration='1000'>${projects[project_name].title}</h1>`);
    const hr = $("<hr align='right' data-aos='flip-left' data-aos-duration='1000'>")
    const lang = __createLang(projects[project_name]);
    $(".project-main").append(title);
    $(".project-main").append(hr);
    $(".project-main").append(lang);
});