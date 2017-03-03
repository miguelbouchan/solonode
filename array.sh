#declare -A #servicio0=([nombre]='calificaburo' [direccion]='/test/other') servicio1=([nombre]='buscauser' [direccion]='/change/other') 
#declare -A servicio1=([nombre]='buscauser' [direccion]='/change/other!')

for id_service in ${!servicio@}; do
    declare -n servicio=$id_service
    echo "nombre: ${servicio[nombre]}"
    echo "direccion: ${servicio[direccion]}"
    sleep 5
done
sleep 5