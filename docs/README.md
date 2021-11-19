# Getting started

### Instalation <!-- {docsify-ignore-all} -->
```shel
npm i react-utils-la
```

### Basic usage
```typescript
import { handlePromise } from 'react-utils-la/main'
const [result, error] = await handlePromise(new Promise((res, _) => res(true)))
```