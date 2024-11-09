const container = document.querySelector(".container")
fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((e) => {


            const box = document.createElement("div");
            const img = document.createElement("img");
            const pelt = document.createElement("p");
            const pel$ = document.createElement("p");



            box.className = "box";
            img.className = "img"
            pel$.className = "narx"
            pelt.className = "title"




            img.src = e.image
            pelt.innerHTML = e.title
            pel$.innerHTML = e.price + "$"



            box.appendChild(img);
            box.appendChild(pelt);
            box.appendChild(pel$);
            container.appendChild(box);



        });

    });

