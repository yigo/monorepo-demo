## Monorepo demo 
mono repo made with yarn workspaces, react-create-app and typescript

## setup 

get the project
```
git clone git@github.com:yigo/monorepo-demo.git
cd monorepo-demo
```

install dependencies

```
yarn install
```

build local packages
```
yarn packages:build
```


## run
```
yarn start
```


## how it works

the demo is devided in 4 components

/apps
  /@monorepo-main : main app container, organice the components
  /@monorepo-page1: shows the value of a counter provided by @monorepo-counter
  /@monorepo-page1: increase, decrease a counter provided by @monorepo-counter
/common:
  /monorepo-counter: state provider of a counter


`@monorepo-main` wrapps the counter provider, page1 and page 2, when the user press increase or decreace on page 2 , then the counter on page 1 should be updated.

