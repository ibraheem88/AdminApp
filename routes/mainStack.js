import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import main from '../screens/main';
import product from '../screens/product'
import employee from '../screens/employee'
import order from '../screens/order'

const screens={
    main: {
        screen: main,
        navigationOptions: {title: "Home",headerStyle: {backgroundColor: "#ff781f"}}
    },
    product: {
        screen: product,
        navigationOptions: {title: "Products",headerStyle: {backgroundColor: "#ff781f"}}
    },
    employee: {
        screen: employee,
        navigationOptions: {title: "Employees",headerStyle: {backgroundColor: "#ff781f"}}
    },
    order: {
        screen: order,
        navigationOptions: {title: "Orders",headerStyle: {backgroundColor: "#ff781f"}}
    },
}
const mainStack= createStackNavigator(screens);

export default createAppContainer(mainStack);
