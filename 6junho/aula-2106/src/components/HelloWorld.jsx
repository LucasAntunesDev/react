import './estilo.css'

// se quiser definir o estilo pelo próprio javascript. é usado o formato de objeto da linguagem
/*const style = {
    color: 'red',
    background: 'blue'
}*/

//desestruturar o objeto [({name})], criar variáveis por meio de um objeto 
//(as propiedades do react são consideradas como objeto, pois não importa a ordem que colocamos ela no jsx, mas o nome sim)
const HelloWorld = ({name}) => {
    return <p className='hello-world'>Hello, {name}!</p>
    // # aplicando estilização pelo própio js
    // return <p style={style} className='hello-world' >Hello, World!</p>
}

export default HelloWorld