# 🚀 Composite TypeScript Boilerplate Config

This boilerplate provides a fullstack setup using TypeScript for both frontend 
and backend development. It includes configurations for `nodemon` to 
dynamically run different parts of the application (backend, frontend, and 
shared modules) with ease.  
The composite approach allows for modular development,  
making it easier to manage and scale your application by 
separating concerns into distinct modules.  


![Stack](https://skillicons.dev/icons?i=js,typescript,nodejs,pnpm)


# 🛠️ Tools Used
This boilerplate utilizes the following tools:
| Tool              | Purpose                                                                 |
|-------------------|-------------------------------------------------------------------------|
| TypeScript        | For static typing and modern JavaScript features.                       |
| Nodemon           | For automatically restarting the server during development.             |
| ts-node           | For running TypeScript directly without precompiling.                   |
| tsconfig-paths    | For resolving module paths based on tsconfig.json.                      |
| pnpm              | For fast, disk space-efficient package management.                      |

## 📦 Installation

To get started with this boilerplate, follow these steps:

### Clone the repository & install:
   ```sh
      ```sh
   # Installation 
   git clone <repository-url> <folder-location>
   cd fullstack-ts_composites
   pnpm install

   # Cleaning git info
   git remote remove origin
   rm -rf .git

   # Git init
   git init -y 
   git add .
   git commit -m "Initial commit"

   # Add repo to version control (here github)
   git remote add origin <new-repo-url>
   git push -u origin master

```

🛠️ Commands
Here is a list of available commands you can use to manage and run your project:

| Command             | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `pnpm build`        | Compiles the TypeScript code for both frontend and backend.                 |
| `pnpm clean`        | Cleans the build directories and node_modules.                              |
| `pnpm clean:packages` | Removes `node_modules` directories from backend, frontend, and root.      |
| `pnpm clean:build`  | Removes the build directory (`__build__`).                                  |
| `pnpm dev`          | Runs the development servers for all parts of the application recursively.  |
| `pnpm dev:backend`  | Runs the backend development server using `nodemon`.                        |
| `pnpm dev:frontend` | Runs the frontend development server using `nodemon`.                       |
| `pnpm dev:shared`   | Runs the shared module using `nodemon`.                                     |


Examples Usage
To clean the project:
```sh
pnpm clean
```

To run the backend server:
```sh
pnpm run dev:backend
```

To run the frontend server:
```sh
pnpm run dev:frontend
```

To run the shared module:
```sh
pnpm run dev:shared
```

To build all the project
```sh
pnpm run build
```