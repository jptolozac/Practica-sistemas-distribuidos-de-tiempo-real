import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

const PORT = 3001
const serverName = 1

const packageDefinition = protoLoader.loadSync('../../service.proto')
const grpcObject = grpc.loadPackageDefinition(packageDefinition)
const saludoService = grpcObject.Saludo

const server = new grpc.Server()

server.addService(saludoService.service, {
    saludar: (call, callback) => {
        console.log(`Mensaje recibido: ${call.request.nombre}`);
        callback(null, {
            mensaje: `Hola, ${call.request.nombre}, te saluda el servidor ${serverName}`
        })
    }
})

server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log("Servidor gRPC escuchando en el puerto 3001")
    server.start()
})