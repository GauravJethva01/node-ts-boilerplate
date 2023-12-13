# Node Boilerplate Using Typescript

Express Server built using typescript

#### Dependencies

```
yarn add express dotenv cors
```

#### Add Typescript dependencies

```
yarn add -D typescript @types/express @types/node ts-node
```

#### For use absolute imports

```
yarn add -D typescript-transform-paths
```

##### Other useful libraries

```
yarn add helmet i18n jsonwebtoken morgan multer nodemailer passport trim-request
```

#### Initialize with typescript

```
 npx tsc --init
```

#### Add outDir in tsconfig.json

```
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "baseUrl": "./",
    "paths": {
      "src/*": ["src/*"],
      "app/*": ["app/*"]
    },
    "plugins": [
      // Transform paths in output .js files
      { "transform": "typescript-transform-paths" }
    ]
  },
  "ts-node": {
    "transpileOnly": true,
    "esm": true,
    "require": ["typescript-transform-paths/register"]
  }
}
```

#### To run server in development

```
yarn dev
```

#### To run server in Production

```
yarn start
```

#### To build server

```
yarn build
```

#### Add following in script

```
  "dev": "nodemon",
  "start": "node build/index.js",
  "build": "npx tsc"
```

# VOILA Server READY!!!
