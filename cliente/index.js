import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

const SERVERNAME = 'localhost:3005'

const packageDefinition = protoLoader.loadSync('../service.proto')
const grpcObject = grpc.loadPackageDefinition(packageDefinition)
const saludoService = grpcObject.Saludo

const cliente = new saludoService(SERVERNAME, grpc.credentials.createInsecure())

cliente.saludar({
    nombre: "Nombre de testeo"
}, (err, res) => {
    if(!err)
        console.log("Respuesta: ", res.mensaje);
    else
        console.log("Error: ", err);
})