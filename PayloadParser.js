function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();
    Object.keys(jsonPayload).forEach(function(key){
        env.log(key,jsonPayload[key])
    })

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Procesar JSON de EZE GEN1 (hasta 200 registros por sensor por call)


    //----------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------


    // DEclaracion de variable para todos los endpoints
    if (jsonPayload.data !== null) {
        //variables STM ABAJO
        var propilenglico = device.endpoints.byAddress(2);
        var dietilpropilenglico = device.endpoints.byAddress(3);

        //----------------------------------------------------------

        //variables PAG ABAJO
        var aromatico = device.endpoints.byAddress(1);
        var aguarras1 = device.endpoints.byAddress(2);
        var aguarras2 = device.endpoints.byAddress(3);
        var recuperado = device.endpoints.byAddress(4);
        var soya = device.endpoints.byAddress(5);
        var xilol = device.endpoints.byAddress(6);

        //-----------------------------------------------------------

        //Variables LOE ABAJO
        var xileno = device.endpoints.byAddress(1);
        var tolueno = device.endpoints.byAddress(2);
        var aguarras3 = device.endpoints.byAddress(3);

        //----------------------------------------------------------
         /*   
        var tiempoUnix = jsonPayload.timestamp;
        var fecha = new Date(tiempoUnix * 1000);
        var timestamp = fecha.toISOString();
        env.log("LA FECHA ES ----->   ",timestamp);
                 */

        



       
        
       
     /*---------------------------------------------------------------------------------------------------------------------------------------------------------
      SCRIPT STM       SCRIPT STM     SCRIPT STM     SCRIPT STM     SCRIPT STM     SCRIPT STM     SCRIPT STM     SCRIPT STM     SCRIPT STM     SCRIPT STM     SCRIPT STM     SCRIPT STM  
      ---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



        
        // Sentencia para Payload deSensor de nivel - tanque tanque Propilenglico
    if (jsonPayload.pid == "E7 D0526 Propilenglicol")
        {
            const data = jsonPayload.data;
            var ultimo = "";
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    env.log("FECHA --> ",item.time);
                    env.log("VOL --> ",item.val);
                    //
                    soya.updateVolumeSensorStatus(item.val,item.time);
                    // DDM: agrego este "if" por si los datos vinieran desordenados
                    if (item.time > ultimo)
                    ultimo = item.time;
                    }
                env.log("Ultimo --> ", ultimo);

        // Resultado del método HTTP. Devolvemos un json con un campo "result", que
        // contiene el "time" más alto recibido, como se indica en la documentación.
        var httpResponse = new HttpResponse();
        httpResponse.statusCode = 200;
        httpResponse.contentType = "application/json";
        httpResponse.content.setAsJson({ result: ultimo });
        return httpResponse;
    }


/*

        // Sentencia para Payload de Sensor de nivel - dietilpropilenglico
    if (jsonPayload.inp == "E8 - D0521 inv")
        {
            const data = jsonPayload.data;
            var ultimo = "";
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    env.log("FECHA --> ",item.time);
                    env.log("VOL --> ",item.val);
                    dietilpropilenglico.updateVolumeSensorStatus(item.val,item.time);
                    // DDM: agrego este "if" por si los datos vinieran desordenados
                    if (item.time > ultimo)
                    ultimo = item.time;
                    }
                env.log("Ultimo --> ", ultimo);

        // Resultado del método HTTP. Devolvemos un json con un campo "result", que
        // contiene el "time" más alto recibido, como se indica en la documentación.
        var httpResponse = new HttpResponse();
        httpResponse.statusCode = 200;
        httpResponse.contentType = "application/json";
        httpResponse.content.setAsJson({ result: ultimo });
        return httpResponse;
    }




/*-------------------------------------------------------------------------------------------------------------------

SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG

-------------------------------------------------------------------------------------------------------------------*/
// Sentencia NODE-RED Para todos los endpoints

// Sentencia NODE-RED Para todos los endpoints

/*
if (jsonPayload.ser == "Node-RED"){
            const datos = jsonPayload;
            var data = jsonPayload.data;

            const datosSeparados = jsonPayload.data.split(',');
            datosSeparados.forEach(dato => {
            env.log(dato.trim());
            });
            for (let i = 0; i < datosSeparados.length; i++) {
                    env.log("Valor  --> ",datosSeparados[i]);
            }
            var dato3 =parseInt(datosSeparados[3]);
            env.log("Valor 3  --> ",dato3);
            env.log("Time  --> ",timestamp);

            aromatico.updateVolumeSensorStatus(dato3,timestamp);
            env.log("Valor  --> ",datosSeparados[3]);
            
            aguarras1.updateVolumeSensorStatus(datosSeparados[8],timestamp);
            env.log("Valor  --> ",datosSeparados[8]);

            aguarras2.updateVolumeSensorStatus(datosSeparados[13],timestamp);
            env.log("Valor  --> ",datosSeparados[13]);

            recuperado.updateVolumeSensorStatus(datosSeparados[18],timestamp);
            env.log("Valor  --> ",datosSeparados[18]);

            xilol.updateVolumeSensorStatus(datosSeparados[23],timestamp);
            env.log("Valor  --> ",datosSeparados[23]);

            soya.updateVolumeSensorStatus(datosSeparados[28],timestamp);
            env.log("Valor  --> ",datosSeparados[28]);
            
                             
                                                         
    }









// Sentencia para Payload de Sensor de nivel - Aromatico

        if (jsonPayload.pid == "E1 Aromatico")
        {
            const data = jsonPayload.data;
            var ultimo = "";
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    env.log("FECHA --> ",item.time);
                    env.log("VOL --> ",item.val);
                    aromatico.updateVolumeSensorStatus(item.val,item.time);
                    // DDM: agrego este "if" por si los datos vinieran desordenados
                    if (item.time > ultimo)
                    ultimo = item.time;
                    }
                env.log("Ultimo --> ", ultimo);

        // Resultado del método HTTP. Devolvemos un json con un campo "result", que
        // contiene el "time" más alto recibido, como se indica en la documentación.
        var httpResponse = new HttpResponse();
        httpResponse.statusCode = 200;
        httpResponse.contentType = "application/json";
        httpResponse.content.setAsJson({ result: ultimo });
        return httpResponse;
    }


        



        




        //  Sentencia Aguarras Mineral E2

        if (jsonPayload.pid == "E2 Aguarras")
        {
            const data = jsonPayload.data;
            var ultimo = "";
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    env.log("FECHA --> ",item.time);
                    env.log("VOL --> ",item.val);
                    aguarras1.updateVolumeSensorStatus(item.val,item.time);
                    // DDM: agrego este "if" por si los datos vinieran desordenados
                    if (item.time > ultimo)
                    ultimo = item.time;
                    }
                env.log("Ultimo --> ", ultimo);

        // Resultado del método HTTP. Devolvemos un json con un campo "result", que
        // contiene el "time" más alto recibido, como se indica en la documentación.
        var httpResponse = new HttpResponse();
        httpResponse.statusCode = 200;
        httpResponse.contentType = "application/json";
        httpResponse.content.setAsJson({ result: ultimo });
        return httpResponse;
        }


        //---------------------------------------------------------------------------------------


        if (jsonPayload.pid == "E3 Aguarras")
        {
            const data = jsonPayload.data;
            var ultimo = "";
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    env.log("FECHA --> ",item.time);
                    env.log("VOL --> ",item.val);
                    aguarras2.updateVolumeSensorStatus(item.val,item.time);
                    // DDM: agrego este "if" por si los datos vinieran desordenados
                    if (item.time > ultimo)
                    ultimo = item.time;
                    }
                env.log("Ultimo --> ", ultimo);

        // Resultado del método HTTP. Devolvemos un json con un campo "result", que
        // contiene el "time" más alto recibido, como se indica en la documentación.
        var httpResponse = new HttpResponse();
        httpResponse.statusCode = 200;
        httpResponse.contentType = "application/json";
        httpResponse.content.setAsJson({ result: ultimo });
        return httpResponse;
        }


        //--------------------------------------------------------------------------------------
        // REcuperado PAG   REcuperado PAG   REcuperado PAG   REcuperado PAG   REcuperado PAG  
        //---------------------------------------------------------------------------------------

        if (jsonPayload.pid == "E4 Recuperado")
        {
            const data = jsonPayload.data;
            var ultimo = "";
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    env.log("FECHA --> ",item.time);
                    env.log("VOL --> ",item.val);
                    recuperado.updateVolumeSensorStatus(item.val,item.time);
                    // DDM: agrego este "if" por si los datos vinieran desordenados
                    if (item.time > ultimo)
                    ultimo = item.time;
                    }
                env.log("Ultimo --> ", ultimo);

        // Resultado del método HTTP. Devolvemos un json con un campo "result", que
        // contiene el "time" más alto recibido, como se indica en la documentación.
        var httpResponse = new HttpResponse();
        httpResponse.statusCode = 200;
        httpResponse.contentType = "application/json";
        httpResponse.content.setAsJson({ result: ultimo });
        return httpResponse;
        }


        //--------------------------------------------------------------------------------------------------------
        // Xilol  PAG Xilol  PAG Xilol  PAG Xilol  PAG Xilol  PAG Xilol  PAG Xilol  PAG Xilol  PAG Xilol
        //--------------------------------------------------------------------------------------------------------
        if (jsonPayload.pid == "E6 Xilol")
        {
            const data = jsonPayload.data;
            var ultimo = "";
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    env.log("FECHA --> ",item.time);
                    env.log("VOL --> ",item.val);
                    xilol.updateVolumeSensorStatus(item.val,item.time);
                    // DDM: agrego este "if" por si los datos vinieran desordenados
                    if (item.time > ultimo)
                    ultimo = item.time;
                    }
                env.log("Ultimo --> ", ultimo);

        // Resultado del método HTTP. Devolvemos un json con un campo "result", que
        // contiene el "time" más alto recibido, como se indica en la documentación.
        var httpResponse = new HttpResponse();
        httpResponse.statusCode = 200;
        httpResponse.contentType = "application/json";
        httpResponse.content.setAsJson({ result: ultimo });
        return httpResponse;
        }





        /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE SCRIPT LOE 
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        ----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*

        // TANQUE XILENO
        if (jsonPayload.pid == "E1-D0470-xilol")
        {
            const data = jsonPayload.data;
            var ultimo = "";
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    env.log("FECHA --> ",item.time);
                    env.log("VOL --> ",item.val);
                    xileno.updateVolumeSensorStatus(item.val,item.time);
                    // DDM: agrego este "if" por si los datos vinieran desordenados
                    if (item.time > ultimo)
                    ultimo = item.time;
                    }
                env.log("Ultimo --> ", ultimo);

        // Resultado del método HTTP. Devolvemos un json con un campo "result", que
        // contiene el "time" más alto recibido, como se indica en la documentación.
        var httpResponse = new HttpResponse();
        httpResponse.statusCode = 200;
        httpResponse.contentType = "application/json";
        httpResponse.content.setAsJson({ result: ultimo });
        return httpResponse;
        }


        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------
        --------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        // Tolueno
/*
        if (jsonPayload.pid == "E2 Tolueno")
        {
            const data = jsonPayload.data;
            var ultimo = "";
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    env.log("FECHA --> ",item.time);
                    env.log("VOL --> ",item.val);
                    tolueno.updateVolumeSensorStatus(item.val,item.time);
                    // DDM: agrego este "if" por si los datos vinieran desordenados
                    if (item.time > ultimo)
                    ultimo = item.time;
                    }
                env.log("Ultimo --> ", ultimo);

        // Resultado del método HTTP. Devolvemos un json con un campo "result", que
        // contiene el "time" más alto recibido, como se indica en la documentación.
        var httpResponse = new HttpResponse();
        httpResponse.statusCode = 200;
        httpResponse.contentType = "application/json";
        httpResponse.content.setAsJson({ result: ultimo });
        return httpResponse;
        }


        //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


        // Aguarras Mineral
        
        if (jsonPayload.pid == "E3-D0462-aguarras")
        {
            const data = jsonPayload.data;
            var ultimo = "";
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    env.log("FECHA --> ",item.time);
                    env.log("VOL --> ",item.val);
                    aguarras3.updateVolumeSensorStatus(item.val,item.time);
                    // DDM: agrego este "if" por si los datos vinieran desordenados
                    if (item.time > ultimo)
                    ultimo = item.time;
                    }
                env.log("Ultimo --> ", ultimo);

        // Resultado del método HTTP. Devolvemos un json con un campo "result", que
        // contiene el "time" más alto recibido, como se indica en la documentación.
        var httpResponse = new HttpResponse();
        httpResponse.statusCode = 200;
        httpResponse.contentType = "application/json";
        httpResponse.content.setAsJson({ result: ultimo });
        return httpResponse;
    }


        

*/











    }  
    
    // Importante: si el script llega a este punto es que no se pudo parsear el json.
    // Como no estamos devolviendo nada, el motor de scripting devolverá el valor por
    // defecto, que consiste en:
    // - Status code 200
    // - Content type "text/plain"
    // - Body vacío (sin contenido)
}