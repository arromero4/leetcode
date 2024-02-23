public class EJERCCIO4
{
    //LA FUNCION BUSCAR PAIS RECIBE LA MATRIZ PAISES Y LA CADENA DE TEXTO A BUSCAR
    static void BuscarPais(char[][] paises, string paisAbuscar)
    {
        //EMPIEZAS A BUSCAR DESDE LA PRIMERA FILA Y COLUMNA
        int pocision = 0;
        //BANDERA PARA DETERMINAR SI EXISTE O NO EL PAIS
        bool encontrado = false;

        //COMIENZAS EL CICLO PARA BUSCAR DESDE LA PRIMERA POSICION
        for (int i = 0; i < paises.Length; i++)
        {
            //SI LA CADENA DE TEXTO ES IGUAL A ALGUNO DE LOS PAISES DE LA MATRIZ
            if (paisAbuscar == new string(paises[i]))
            {
                //LA POSICION ES IGUAL AL ELEMENTO EN EL QUE SE ENCUENTRA
                pocision = i;
                //BANDERA PASA A SER TRUE DEBIDO A QUE SI SE ENCONTRÓ EL PAIS
                encontrado = true;
            }

        }
        System.Console.WriteLine($" El pais esta en la posicion {pocision}");


    }

    //ESTA FUNCION RECIBE LA MATRIZ
    static void Mostrar(char[][] paises)
    {
    //REALIZA UN RECORRIDO POR CADA ELEMENTO DE LA MATRIZ PAISES
        System.Console.WriteLine();
        foreach (char[] pais in paises)
        {
            System.Console.WriteLine(pais);
        }
    }

    //ESTA FUNCION RECIBE LA MATRIZ
    static char [][] Ordenar(char[][] paises)
    {
        //CREAMOS UNA MATRIZ NUEVA DEL TAMAÑO DE LA MATRIZ PAISES
        char[][] paisesOrdenados = new char[paises.Length][];

        //CREAS UNA COPIA DE PAISES EN TU NUEVA MATRIZ
        Array.Copy(paises, paisesOrdenados, paises.Length);

        //RECORRES LAS COLUMNAS DE TU NUEVA MATRIZ
        for (int i = 0; i < paisesOrdenados.Length; i++)
        {
            //RECORRES LAS FILAS DE TU NUEVA MATRIZ
            for (int j = 0; j < paisesOrdenados.Length - 1 - i; j++)
            {
                //COMPARAS EL PAIS EN LA POSICION POR EJEMPLO
                //COLOMBIA Y BRASIL, SI SON IGUALES DEVUELVE 0 SI SON IGUALES, EN ESTE CASO NO, DEVUELVE 1               
                //1 ES MAYOR QUE CERO, DEVUELVE TRUE

                bool compararPais = (new string(paisesOrdenados[j])).CompareTo(new string(paisesOrdenados[j + 1]))
                                    > 0
                                    ? true
                                    : false;
                
                //A PARTIR DE AQUI COMIENZA UN ALGORITMO DE ORDENAMIENTO
                if (compararPais)
                {
                    char[] auxiliar = paisesOrdenados[j];
                    paisesOrdenados[j] = paisesOrdenados[j + 1];
                    paisesOrdenados[j + 1] = auxiliar;
                }
                // AUXILIAR = PAISORDENADO[J] = COLOMBIA ESTÁ EN LA POSICION O
                // PAISORDENADO[J] = PAISORDENADO[J+1] ES DECIR, LA PRIMERA ITERACION ES CERO, 0+1,  BRASIL ESTÁ EN LA POSICION 1
                // PAISORDENADO[J] = AUXILIAR AHORA SERIA COLOMBIA
                //AL FINAL SE INTERCAMBIAN QUEDANDO BRASIL, COLOMBIA
                //Y ASI SUCESIVAMENTE
            }


        }
        return paisesOrdenados;   
    }

        static ConsoleKeyInfo Menu()
        {
            //OPCIONES DEPENDIENDO DEL NUMERO INGRESADO
            System.Console.WriteLine("MENU DE OPERACIONES");
            System.Console.WriteLine(" 1 BUSCAR PAIS");
            System.Console.WriteLine(" 2 MOSTRAR ");
            System.Console.WriteLine(" 3 ORDENAR");
            System.Console.WriteLine(" 4 AÑADIR PREFIJO");
            System.Console.WriteLine(" ESC PARA SALIR");
            System.Console.Write("OPCION :");
            System.Console.WriteLine();
            return Console.ReadKey();
            ;

        }

        static void Main()
        {

            // Este es el programa princial
            Console.Clear();

            //creas una matriz
            //por la sintaxis y leyendo la documentacion creas 
            // una matriz paises que va a guardar 20 cadenas de texto
            char[][] paises = new char[20][];
            paises[0] = new char[] { 'C', 'O', 'L', 'O', 'M', 'B', 'I', 'A' };
            paises[1] = new char[] { 'B', 'R', 'A', 'S', 'I', 'L' };
            paises[2] = new char[] { 'C', 'A', 'N', 'A', 'D', 'A' };
            paises[3] = new char[] { 'E', 'S', 'P', 'A', 'Ñ', 'A' };
            paises[4] = new char[] { 'I', 'T', 'A', 'L', 'I', 'A' };
            paises[5] = new char[] { 'F', 'R', 'A', 'N', 'C', 'I', 'A' };
            paises[6] = new char[] { 'C', 'H', 'I', 'N', 'A' };
            paises[7] = new char[] { 'M', 'É', 'X', 'I', 'C', 'O' };
            paises[8] = new char[] { 'J', 'A', 'P', 'Ó', 'N' };
            paises[9] = new char[] { 'I', 'N', 'D', 'I', 'A' };
            paises[10] = new char[] { 'R', 'U', 'S', 'I', 'A' };
            paises[11] = new char[] { 'A', 'L', 'E', 'M', 'A', 'N', 'I', 'A' };
            paises[12] = new char[] { 'S', 'U', 'E', 'C', 'I', 'A' };
            paises[13] = new char[] { 'T', 'U', 'R', 'Q', 'U', 'Í', 'A' };
            paises[14] = new char[] { 'G', 'R', 'E', 'C', 'I', 'A' };
            paises[15] = new char[] { 'P', 'O', 'L', 'O', 'N', 'I', 'A' };
            paises[16] = new char[] { 'E', 'G', 'I', 'P', 'T', 'O' };
            paises[17] = new char[] { 'N', 'I', 'G', 'E', 'R', 'I', 'A' };
            paises[18] = new char[] { 'C', 'H', 'I', 'L', 'E' };
            paises[19] = new char[] { 'Q', 'A', 'T', 'A', 'R' };


            bool esESC;
            int opcionUsuario;

            do
            {
                //SE EJECUTA LA FUNCION MENU
                var opcion = Menu();
                esESC = opcion.Key == ConsoleKey.Escape;
                if (esESC)
                {
                    break;
                }
                else
                {
                    opcionUsuario = int.Parse(opcion.KeyChar.ToString());
                }
                //DEPENDIENDO DEL LA OPCION SELECCIONADA EN LA FUNCION MENU APARECEN LOS SIGUIENTES CASOS
                switch (opcionUsuario)
                {
                    case 1:
                    //ESCRIBES EL PAIS
                        System.Console.WriteLine("\n Ingresa el pais que deseas buscar");
                        string paisAbuscar = Console.ReadLine().ToUpper();
                    //EJECUTA LA FUNCION BUSCARPAIS    
                        BuscarPais(paises, paisAbuscar);

                        break;
                    case 2:
                    //MUESTRA LOS PAISES
                        Mostrar(paises);

                        break;

                    case 3:
                    //ORDENA LOS PAISES
                        paises =Ordenar(paises);
                        break;

                        //case 4:
                        //   AñadirPrefijo();
                }


            } while (!esESC);



        }
     }