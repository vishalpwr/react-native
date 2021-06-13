# react-native

clone the module and add on any react-native or expo project. 
### use custom Button with icon, title and loading

### install required dependency
```
npm i react-native-paper react-native-vector-icons
link vector icons
react-native link react-native-vector-icons
```
Button usage:
```
import {Button, RoundButton} from './components/AppButton';

<Button colors={['#5be9aa', '#09949d']} loading={false} label="Press me" icon="home"
    style={{alignself: 'center'}} onPress={() => console.log('Pressed')}/>
```
#### Rounded button
```
<RoundButton bottom={80} onPress={() => console.log('Pressed')} />
<RoundButton colors={['#5be9aa', '#09949d']} iconColor="white" onPress={() => console.log('Pressed')} />
```

#### Rounded Button Screenshot
<div display="inline-block">
  <img src="/screenshots/rounded_button.png" width="150" height="180" />
</div>



