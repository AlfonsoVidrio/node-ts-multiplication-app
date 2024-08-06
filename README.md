# Generador de Tablas de Multiplicar

## Descripción

Esta aplicación en Node.js, desarrollada con TypeScript y la biblioteca `yargs`, genera tablas de multiplicar y las guarda en archivos de texto. Ofrece una manera flexible de configurar la base y el límite de la tabla, así como opciones para mostrar la tabla en la consola y personalizar el nombre del archivo y la carpeta de destino.

## Funcionalidades

- **Generación de Tablas de Multiplicar**: Crea tablas de multiplicar para cualquier base numérica.
- **Límites Configurables**: Define hasta qué número se multiplicará la base. El límite por defecto es 10.
- **Visualización en Consola**: Opción para mostrar la tabla de multiplicar en la consola.
- **Salida en Archivos de Texto**: Guarda la tabla generada en un archivo de texto, con opciones para personalizar el nombre del archivo y la carpeta destino.
- **Validación de Entradas**: Verifica que la base de la tabla sea un número mayor que cero.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd tu-repositorio
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

- Para ejecutar la aplicación, utiliza cualquiera de los siguientes comandos con los parámetros necesarios:
    ```bash
    npx ts-node src/app.ts --b <base> --l <limit> --s --d <destination> --n <name>

    npm run dev -- --b <base> --l <limit> --s --d <destination> --n <name>
    ```
## Parámetros

- **-base o -b**: Define la base para la tabla de multiplicar. Este parámetro es obligatorio.

- **-limit o -l**: Establece el límite hasta el cual se multiplicará la base. Opcional, por defecto es 10.

- **-show o -s**: Indica si la tabla debe ser mostrada en la consola. Opcional, por defecto es false.

- **-name o -n**: Nombre del archivo donde se guardará la tabla. Opcional, por defecto es multiplication-table.txt

- **-destinarion o -d**: Carpeta destino donde se guardará el archivo. Opcional, por defecto es outputs.

## Ejemplo

- Para generar una tabla de multiplicar con base 10, límite 4, mostrarla en la consola, y guardarla en un archivo llamado tablas-multiplicar1.txt en la carpeta new-outputs, usa el siguiente comando:
    ```bash
    ts-node src/app.ts -b 10 -l 4 -s -d outputs -n table.txt
    ```

#### En este ejemplo:

La base de la tabla es 10.
El límite de multiplicación es 4.
La tabla se mostrará en la consola (-s).
El archivo se guardará en la carpeta outputs con el nombre tablas-multiplicar.txt.

Empaquetado para Usar como CLI
Para empaquetar y utilizar esta aplicación como una herramienta de línea de comandos global, sigue estos pasos:

Asegúrate de que package.json tenga el campo bin correctamente configurado:

```json
"bin": {
  "multiplication-app": "dist/app.js"
}
```

Esto indica a npm que el comando multiplication-app debe ejecutar el archivo dist/app.js.

Compila el código TypeScript a JavaScript:

Ejecuta el siguiente comando para transpilar el código a JavaScript:

```bash
npm run build
```
Vincula el paquete globalmente:

Primero, desvincula cualquier instalación previa del paquete:

```bash
npm unlink -g multiplication-app
```
Luego, vincula el paquete localmente para instalación global:

```bash
npm link
```
Esto creará un enlace simbólico global que te permitirá ejecutar multiplication-app desde cualquier lugar en tu terminal.

Ejecuta el comando globalmente:

Ahora puedes usar el comando multiplication-app en cualquier lugar de tu sistema. Por ejemplo:

```bash
multiplication-app --b 8 --l 10 --s --n table.txt --d outputs
```

Esto generará la tabla de multiplicar con base 8, límite 10, la mostrará en la consola, y guardará el archivo en la ubicación actual o especificada.

```
Server running...
8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80
```
