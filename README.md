 GRACE HOPPER REACT
Repetir el ejercicio de Grace Hopper pero esta ocasión lo haremos con la librería React.

#Componentes

* El primer componente es el header donde estara el título (title.js), donde se importa el title.css donde se encuentran los estilos.

```
import React, { Component } from 'react';
import './title.css';
```

* El segudo componte es el contenido (main.js) donde los estilos estan en un objeto.

```
const options = {
  style: {
    width: '60%',
    float: 'left',
    marginLeft:'30px',
    marginRight:'50px',
    marginTop:'40px'
  }
};
```

* El tercer componente es la tabla (second.js), se importan los estilos(second.css) e imagen.
```
import React, { Component } from 'react';
import logo from './grace-hopper.jpg';
import './second.css';

```
## Desarrollado con ..
`React` `HTML5` `CSS3`




