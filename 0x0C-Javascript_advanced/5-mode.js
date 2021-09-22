function changeMode (size, weight, transform, background, color){
    document.documentElement.style['font-size'] = size;
    document.documentElement.style['font-weight'] = weight;
    document.documentElement.style['text-transform'] = transform;
    document.documentElement.style['background-color'] = background;
    document.documentElement.style.color = color;
}

    let spooky = function() { changeMode(9, 'bold', 'uppercase', 'pink', 'green');};
    let darkMode = function () {changeMode(12, 'bold', 'capitalize', 'black', 'white');};
    let screamMode = function () {changeMode(12, 'normal', 'lowercase', 'white', 'black',);};

    function main() {
        let body = document.body;
        let paragraph = document.createElement('p');
        body.appendChild(paragraph);

        let holbies = document.createTextNode('Welcome to Holberton!');
        let spbutton = document.createElement('button');
        let spbtn = document.createTextNode('Spooky');
        spbutton.setAttribute('onClick', 'spooky()');

        let dbutton = document.createElement('button');
        let dbtn = document.createTextNode('Dark mode');
        dbutton.setAttribute('onClick', 'darkMode()' );

        let screamBtn = document.createElement('button');
        let scbtn = document.createTextNode('Scream mode');
        screamBtn.setAttribute('onClick', 'screamMode()');


        


        paragraph.appendChild(holbies);
        body.appendChild(spbutton);
        body.appendChild(spbtn);
        body.appendChild(dbutton);
        body.appendChild(dbtn);
        body.appendChild(screamBtn);
        body.appendChild(scbtn);

    }

    main();