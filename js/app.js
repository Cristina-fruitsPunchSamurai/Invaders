//Créer un objet
const game = {
    styles: [
        'plain',
        'empty',
        'light',
        'highlight',
    ],
    currentColorState : 'empty',

    //On initialise notre jeu
    init() {
        //Création de l'input number
        const configuration = document.querySelector('.configuration');
        const input = document.createElement('input');
        input.id = 'gridSize';
        input.type = 'number';
        input.classList.add('input--number');
        input.placeholder = 'Taille de la grille';
        configuration.appendChild(input);

        //Création du bouton
        const btn = document.createElement('button');
        btn.textContent = ' Valider ';
        btn.classList.add('button--style');
        configuration.appendChild(btn);

        //Ajout de l'event sur le bouton qui déclenche mon jeu
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const userValue = Number(input.value);
            //Appel à la fonction grid création avec la valeur de l'input comme argument de ma fonction
            game.gridCreation(userValue);
        } )

        // Création de la palette
        const palette = document.querySelector('.palette');
        for(const color of game.styles){
            const pickColor = document.createElement('div');
            pickColor.classList.add('palette-color', color);
            palette.appendChild(pickColor);
        //Ajout de l'event à chaque color picker
            pickColor.addEventListener('click', () =>{
            game.currentColorState = color; // color fait référence à la variable que j'ai crée dans ma boucle

        })};
    game.gridCreation();
    },

    //Création de la grille
    gridCreation (gridSize = 8){ //taille 8 par défault
    const invader = document.querySelector('#invader');
    invader.textContent = '';
    invader.style.display = "grid";
    invader.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    invader.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    //Création du pixel
    game.numberofPixels = gridSize ** 2; //8*8 par default

    //Je boucle pour créer pixel par pixel
    for(let i = 0; i < game.numberofPixels; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add('default-color');
    invader.appendChild(pixel);
    //J'ajoute directement mon event à partir de la création de chaque pixel
    pixel.addEventListener('click', game.handleClickColor);
    }
    },

    //Fonction qui gere la couleur de chaque pixel
    handleClickColor (event){
        for(const color of game.styles){ //On evite de rentre chaque couleur du tableau
            event.target.classList.remove(color);
        }
            event.target.classList.add(game.currentColorState);
        },

    }


game.init();




















