document.addEventListener('DOMContentLoaded', (e) => {
    // Encapsulo elementos del dom para utilizarlos luego
    const hamburguesa = document.getElementById('hamburger');
    const menu_movil = document.getElementById('mobile-menu');
    const select = document.getElementById('condicion');
    const form = document.getElementById('form');

    // Agrego evento 'onClick' al boton de hamburguesa
    hamburguesa.addEventListener('click', (e) => {
        menu_movil.classList.toggle('hidden');
    });

    /**
     * Esta funcion se encarga de recorrer un arreglo e ir armando el selector del DOM
     */
    function armarSelect(options) {
        options.forEach(o => {
            const option = document.createElement('option');
            option.value = o.id;
            option.textContent = o.descripcion;
            select.appendChild(option);
        })
    }

    // Utilizo este metodo para llamar a mi archivo json
    fetch('/assets/opciones.json').then((res) => {
        if (!res) {
            return console.log('Error al cargar opciones del select');
        }
        return res.json();
    }).then((opciones) => {
        armarSelect(opciones.options); // Utilizo la funcion antes creada
    }).catch((error) => {
        console.log('Error al cargar opciones del select:', error);
    }
    );

    // Agrego una escucha al evento de tipo 'submit' para poder encapsular los valores del formulario y mostrarlos por consola
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // encapsulo los datos en un formato que pueda manipular
        const formulario = new FormData(form);

        // Variable auxiliar
        let formjson = {};

        // Por cada clave valor se la asigno a la variable auxiliar donde almacenare mis datos
        formulario.forEach((value, key) => {
            formjson[key] = value;
        });

        console.log(formjson)
    })
});