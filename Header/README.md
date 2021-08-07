# react-native - Header Component

clone the module and add on any react-native or expo project. 

### Fully Customize header component - AppHeader

### install required dependencies
```
npm i react-native-paper react-native-vector-icons
link vector icons
react-native link react-native-vector-icons
```
Header usage:
```
<AppHeader
    title={"Home"}
    headerBg={"#60c5a8"}
    iconColor={"black"}
    menu //or back
    optionalBadge={5}
    navigation={props.navigation}
    right="more-vertical"
    rightFunction={() => console.log('right')}
    optionalIcon="bell"
    optionalFunc={() => console.log('optional')}
/>
```

#### AppHeader Screenshot
<div display="inline-block">
  <img src="/screenshots/header1.jpg" width="300" height="100" />
  <img src="/screenshots/header2.jpg" width="300" height="100" />
</div>

