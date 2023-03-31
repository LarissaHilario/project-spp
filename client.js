import io from "socket.io-client";

const socket = io("http://3.133.107.127:4000");


socket.on('prescriptionalert', () => {
    socket.write('La receta ha sido enviada a farmacia');
    
});
socket.on('pharmacyalert', () => {
    socket.write('Farmacia ha autorizado la receta');
    
});

socket.on('snsAlert', () => {
    socket.write('Los datos han sido entregados al correo del paciente');
    
});

socket.on('error', () => {
    console.log('Ha ocurrido un error en el servidor');
    process.exit();
});
