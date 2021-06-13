# react-native

clone the module and add on any react-native or expo project.

#### install required dependencies
```
npm i react-native-paper react-native-vector-icons
link vector icons
react-native link react-native-vector-icons
```
#### ModalView
ModalView usage:
```
import ModalView from './components';


const [visible, setVisible] = useState(false);


<ModalView
    visible={visible}
    title="Title"
    onDismiss={() => setVisible(false)}
    onSubmit={() => {}}
    cancelable>
    <View/> 
</ModalView>
```
