# Bullet Madness
GitHub del Grupo 6 de Juegos en Red.

## **JUEGA A BULLET MADNESS EN ITCHIO**
https://litos-art.itch.io/bullet-madness

## **Nombre del juego:**
*Bullet Madness*

## **Descripción de la temática del juego:**
Bullet Madness es un videojuego del género *bullet hell* con opción cooperativa en el que los jugadores controlan una nave espacial y tienen la misión de defender su planeta destruyendo la invasión alienígena.

## **Integrantes:**
  * Carlos Rodríguez Sánchez Roldán - c.rodriguezs.2018@alumnos.urjc.es - [GitHub](https://github.com/litosart/)
  * José Fernando Medina Talavera - jf.medina.2018@alumnos.urjc.es - [GitHub](https://github.com/Kreithor)
  * Antonio Arian Silaghi - aa.silaghi.2018@alumnos.urjc.es - [GitHub](https://github.com/Anthonys-source)
  * Norman Peter Stankewitz - np.stankewitz.2018@alumnos.urjc.es - [GitHub](https://github.com/NormanSt98)
  
## **Video:**
[![Watch the video](https://img.youtube.com/vi/YLVlOnTlZvg/maxresdefault.jpg)](https://youtu.be/YLVlOnTlZvg)

## **[Trello](https://trello.com/b/0NaHNGy9/bullet-madness)**

## **Índice:**
  1. Capturas del juego
     * Username
     * MainMenu
     * SceneStory1
     * ShipSelection
     * Game
     * FinalScoreScreen
     * Credits
     * Leaderboard
  2. Diagrama de navegación
  3. Diagrama de clases
  4. Instrucciones para ejecutar la aplicación
  5. Implementación Websockets

## **1. Capturas del juego**

### **Username:**
![loading](/resources/caps/Cap_enterName.PNG)
* Pantalla donde el jugador pone su nombre de usuario.

### **MainMenu:**
![main menu](/resources/caps/Cap_mainMenu.PNG)
* Menú principal con el logo del juego. Tiene la opcion de jugar que te lleva a la pantalla de la historia del juego, una opción de créditos que te lleva a la pantalla de créditos y otra de récords que te muestra las puntuaciones más altas.

### **SceneStory1:**
![story 1](/resources/caps/Cap_story1.PNG)
* Muestra la historia resumida del primer nivel y tiene la opción de jugar para pasar a la pantalla de selección de naves.

### **ShipSelection:**
![ship selection](/resources/caps/Cap_selectShip.PNG)
* Pantalla donde el jugador puede seleccionar su nave y la nave del segundo jugador junto con el número de jugadores que van a jugar. Además se pueden ver las estadísticas de las naves y los controles.

### **Game:**
![game](/resources/caps/Cap_game.PNG)
* Pantalla donde tiene lugar el juego en sí. Arriba a la izquierda existe un contador con la puntuación actual y abajo aparece el número de vidas restantes de cada jugador. Las naves enemigas se generan en la parte superior y los jugadores empiezan en la parte inferior.

### **FinalScoreScreen:**
![final score](/resources/caps/Cap_finalScore.PNG)
* Escena que se muestra cuando el jugador acaba la partida. Muestra la puntuación final obtenida y el botón lleva al jugador al menú principal.

### **Credits:**
![credits](/resources/caps/Cap_credits.PNG)
* Muestra los créditos del juego y una opción para volver al menú principal.

### **Leaderboard:**
![credits](/resources/caps/Cap_records.PNG)
* Muestra las 10 puntuaciones más altas conseguidas hasta el momento.

## **2. Diagrama de navegación**
![diagrama](/resources/caps/diagrama.PNG)

## **3. Diagrama de clases**
![diagramaClases](/resources/caps/diagramaClases.jpeg)

## **4. Instrucciones para ejecutar la aplicación:**
* Paso 1: Descargar el servidor del juego que se encuentra subido en github.
* Paso 2: Tener descargado Spring Tool Suite.
* Paso 3: Importar el proyecto descargado en Spring.
* Paso 4: Ejecutar la aplicación BulletmadnessApplication.

* El cliente se conectará al servidor con la url: http://127.0.0.1:8080/
* El primer jugador que seleccione nave y se meta a la pantalla de juego sera el host de la partida
* Si el host se desconecta o muere la partida se terminara y se tendran que cerrar todos los clientes y volver a repetir los pasos de ejecucion.

## **5. Implementación Websockets:**
* Se han usado los siguientes websockets en el juego:
* Gameplay : Encargado de sincronizar la posicion de los jugadores entre todos los clientes.
* Beam : Encargado de sincronizar la posición de las balas de los jugadores.
* Enemies : Encargado de sincronizar la posición y estado de los enemigos.
* El host de la partida es el encargado de enviar la posiciÓn de los enemigos al resto de clientes
* Los clientes crean una "imagen" de los enemigos que se mueve acorde a los datos enviados por el host
* Este proceso en el que la funcionalidad real de los elementos esta en el host y lo que ve el cliente es una imagen de la consecuencia de esta funcionalidad se repite para todos los websockets.


