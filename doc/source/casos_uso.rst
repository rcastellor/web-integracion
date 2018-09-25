Casos de Uso
************

CU-1 Crear Nuevo Sector
=======================

**Actor Principal:** Administrador.

**Personal involucrado e intereses:**

* Administrador: quiere definir la estructura y los datos del sector, sin
  errores y con facilidad para crear las estructuras.
* Salud: quiere mantener un mapa con la información de las integraciones
  desplegadas en cada sector.
* Rhapsody: Quiere recibir el menor número de llamadas a la api posibles para no
  aumentar la carga del sistema.
* Servicio de backend: Mantiene la persistencia en base de datos de la
  información del sistema, quiere recibir información consistente.

**Precondiciones:** El administrador se identifica y autentica. El sistema tiene
la lista de aplicaciones.

**Garantías de exito (Postcondiciones):** Se registra el nuevo sector. Se
registran los distintos nodos que forman el sector. Se registran los puntos de
comunicación que tiene el sector. Se registran los id de punto de comunicación
de cada nodo. Se registran los servidores de aplicaciones
que tiene el sector. Se registran los nodos de los servidores de aplicación. Se
registran las bases de datos que tiene el sector. Se registran los nodos de base
de datos que tiene el sector. Se registran los contactos y sus roles asociados
con el sector.

**Escenario principal de éxito (o Flujo Básico):**

1. El caso de uso comienza cuando el Administrador selecciona la opción de
   creación de nuevo sector.
2. El Administrador introduce los datos básicos del sector.
3. El Administrador introduce los datos básicos del nodo.
4. El sistema registra la línea de nodo.
5. El sistema consulta al servicio de backend por los puntos de comunicación del
   nodo.
6. El Administrador selecciona un punto de comunicación.
7. El sistema registra la línea de puntos de comunicación, muestra el
   identificador propio de rhapsody, el nombre y la ruta.

   *El Administrador repite los pasos 6 y 7 hasta que se indique.*

   *El Administrador repite los pasos 3, 4, 5, 6 y 7 hasta que se indique.*
8. El sistema registra el sector y envia la información al servicio de
   backend.

**Extensiones (o flujos alternativos):**

**Requisitos especiales:**

**Lista de tecnología y variaciones de datos:**

**Frecuencia:**

**Temas abiertos:**
