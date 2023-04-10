import io from "socket.io-client";

const socket = io("http://3.145.157.237:9101");


const button = document.querySelector(button)

socket.on('prescriptionalert', () => {
    socket.write('La receta ha sido enviada a farmacia');
    alert('La receta ha sido enviada a farmacia')
    
});
socket.on('pharmacyalert', () => {
    socket.write('Farmacia ha autorizado la receta');
    alert('Farmacia ha autorizado la receta')
    
});

socket.on('snsAlert', () => {
    socket.write('Los datos han sido entregados al correo del paciente');
    alert('Los datos han sido entregados al correo del paciente')
    
});

socket.on('error', () => {
    console.log('Ha ocurrido un error en el servidor');
    alert('Ha ocurrido un error en el servidor')
    process.exit();
});
