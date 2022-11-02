const contenedor = document.querySelector(".contenedor");

console.log("Conectado");

{/* <section style="background-image: url(./Recursos/kaguya-sama-love-is-war-caratula.jpg);" class="anime anime1">
    <div class="anime-info">
        <h1 class="anime-title">
            Kaguya-sama
        </h1>
        <p class="anime-text">
            Se trata de un anime con una trama de muy interesante con distintas tangentes que dan un gran
            transfondo desde unas sencillas pero divertidas hasta muy complejas y curiosas. Asi tambien se hace
            referencias a distintas situaciones de la vida real.
        </p>
    </div>
    <div class="button-container">
        <button><a href="">Capitulos</a></button>
    </div>
</section> */}

const animeList = [];

animeList.push({
    nombre: "Gotoubun no Hanayome",
    fondo: "background-image: url(./Recursos/Gotoubun_no_Hanayome.jpg)",
    informacion: "Un anime muy bueno al inicio pero conforme avanza pasa de algo ameno y divertido a algo no tan bueno ya que meten demasiado drama y seriedad demasiado rapido haciendolo algo muy pesado y entrando en lo ridiculamente cursi."
})

animeList.push ({
    nombre: "Kaguya-sama", 
    fondo: "background-image: url(./Recursos/kaguya-sama-love-is-war-caratula.jpg)",
    informacion: "Se trata de un anime con una trama de muy interesante con distintas tangentes que dan un gran transfondo desde unas sencillas pero divertidas hasta muy complejas y curiosas. Asi tambien se hace referencias a distintas situaciones de la vida real."
})

animeList.push ({
    nombre: "Karakai Jouzu no Takagi-san",
    fondo: "background-image: url(./Recursos/Karakai_Jouzu_no_Takagi-san.jpg)",
    informacion: "Un anime muy especial almenos para mi ya que por un buen tiempo se volvio una de mis razones de seguir, sin duda aun que luego de verlo varias veces se ah hecho algo repetitivo no quita las risas con las ingeniosas insinuasiones de Takagi-san."
})

animeList.push ({
    nombre: "Kono Subarashii Sekai ni Shukufuku wo!",
    fondo: "background-image: url(./Recursos/Kono_Subarashii_Sekai_ni_Shukufu_wo!.png)",
    informacion: "Un anime que almenos hasta ahora no ah perdido su gracia yendo de sencillas aventuras bien representadas de un nini en otro mundo que es relativamente capaz con un equipo relativamente supremo. Ya mero sale la tercera peli."
})

animeList.push ({
    nombre: "Kunoichi Tsubaki no Mune no Uchi",
    fondo: "background-image: url(./Recursos/Kunoichi_Tsubaki_no_Mune_no_Uchi.jpg)",
    informacion: "Un anime que se le puede dar el credito de ser muy entretenido al igual que los diseños de cada una de las personajes esta bastante genial al igual de sus pequeñas historias y su evolucion, asi tambien sus personalidades.En especial Takagi ninja"
})

animeList.push ({
    nombre: "Miss-Kobayashi-Dragon-Maid",
    fondo: "background-image: url(./Recursos/Miss-Kobayashi-Dragon-Maid.jpg)",
    informacion: "Un anime muy bueno que, al igual que otros, lastimosamente los capitulos finales comprimen mucho drama y una declaracion de Toru que en lugar de ser algo bonito es algo bastante incomodo."
})

animeList.push ({
    nombre: "Nagatoro san",
    fondo: " background-image: url(./Recursos/Nagatoro_san.jpg)",
    informacion: "Se necesita un gusto muy especial para disfrutar este anime ya que la personalidad de Nagatoro puede llegar a ser chocante para muchos sin embargo en lo personal me gusta por los celos que hay al final que hacen la relacion del... del wey mas especial."
})

for (anime of animeList) {
    const animeCard = document.createElement("section");
    animeCard.classList.add("animeCard");
    animeCard.style.cssText = anime.fondo;

    const animeInfo = document.createElement("div");
    animeInfo.classList.add("anime-info");

    const animeTitle = document.createElement("h1");
    animeTitle.classList.add("anime-title")
    animeTitle.innerText = anime.nombre;

    const animeText = document.createElement("p");
    animeText.classList.add("anime-text");
    animeText.innerText = anime.informacion;

    animeInfo.append(animeTitle, animeText);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const button = document.createElement("button");
    const enlace = document.createElement("a");
    enlace.innerText = "Capitulos";

    animeCard.append(animeInfo, buttonContainer);

    buttonContainer.append(button);
    button.appendChild(enlace);

    contenedor.appendChild(animeCard);
}