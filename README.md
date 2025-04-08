# Multiplication Table Generator

## Description

This Node.js application, developed with TypeScript and the `yargs` library, generates multiplication tables and saves them as text files. It provides a flexible way to configure the base and limit of the table, with options to display the table in the console and customize the file name and destination folder.

## Features

- **Multiplication Table Generation**: Creates multiplication tables for any numeric base.
- **Configurable Limits**: Set the upper limit for multiplication. Default is 10.
- **Console Display**: Option to print the multiplication table in the console.
- **Text File Output**: Saves the generated table to a text file, with customizable file name and destination folder.
- **Input Validation**: Ensures the base number is greater than zero.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AlfonsoVidrio/note-ts-multiplication-app
    ```

2. Navigate to the project directory:
    ```bash
    cd note-ts-multiplication-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

- To run the application, use one of the following commands with the required parameters:
    ```bash
    npx ts-node src/app.ts --b <base> --l <limit> --s --d <destination> --n <name>

    npm run dev -- --b <base> --l <limit> --s --d <destination> --n <name>
    ```
## Parameters

- **--base or -b**: Sets the base number for the multiplication table. This parameter is required.

- **--limit or -l**: Sets the maximum multiplier. *Optional*, defaults to `10`.

- **--show or -s**: Indicates whether the table should be displayed in the console. *Optional*, defaults to `false`.

- **--name or -n**: Name of the output file where the table will be saved. *Optional*, defaults to `multiplication-table.txt`.

- **--destination or -d**: Output folder where the file will be saved. *Optional*, defaults to `outputs`.

## Example

To generate a multiplication table with base `10`, limit `4`, display it in the console, and save it in a file named `table.txt` inside the `outputs` folder, use the following command:

   ```bash
   ts-node src/app.ts -b 10 -l 4 -s -d outputs -n table.txt
   ```

#### In this example:

- The table base is `10`.  
- The multiplication limit is `4`.  
- The table will be displayed in the console (`-s`).  
- The file will be saved in the `outputs` folder with the name `tablas-multiplicar.txt`.

## Packaging for CLI Use

To package and use this application as a global command-line tool, follow these steps:

Make sure the `package.json` file has the `bin` field properly configured:

```json
"bin": {
  "multiplication-app": "dist/app.js"
}
```

This tells npm that the `multiplication-app` command should run the `dist/app.js` file.

### Compile the TypeScript code to JavaScript

Run the following command to transpile the code to JavaScript:

```bash
npm run build
```
Link the package globally:

First, unlink any previous global installation of the package:

```bash
npm unlink -g multiplication-app
```
Then, link the package locally for global use:

```bash
npm link
```
This will create a global symbolic link that allows you to run multiplication-app from anywhere in your terminal.

Run the command globally:

Now you can use the `multiplication-app` command anywhere on your system. For example:

```bash
multiplication-app --b 8 --l 10 --s --n table.txt --d outputs
```

This will generate a multiplication table with base `8`, limit `10`, display it in the console, and save the file in the specified or current location.

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
