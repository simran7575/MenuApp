import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverview from './screens/MealsOverview';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import { Ionicons } from '@expo/vector-icons';
import CreateContextProvider from './store/context/favourites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

  function DrawerNavigation(){
    return(
      <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#690821" },
        headerTitleStyle: { fontFamily: "semi-bold", letterSpacing:1.5 },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#f5dada" },
        drawerStyle:{backgroundColor:"#690821"},
        drawerActiveBackgroundColor:"#f5dada",
        drawerActiveTintColor:"#690821",
        drawerInactiveTintColor:"#f5dada",
        drawerLabelStyle:{fontFamily: "semi-bold", fontSize:16, letterSpacing:0.9},
       

      }}>
        <Drawer.Screen 
          name='MealsCategories' 
          component={CategoriesScreen}
          options={{title:"All Categories",
        drawerIcon:({size, color})=><Ionicons name='list' size={size} color={color}/>}}
         />

        <Drawer.Screen 
          name='Favourites' 
          component={FavouriteScreen}
          options={{
            drawerIcon:({size, color})=><Ionicons name='star' size={size} color={color}/>
          }}
        />

      </Drawer.Navigator>
    )
  }

export default function App() {

  const [isLoaded] = useFonts({
    'normal': require('./assets/fonts/Walkway_Bold.ttf'),
    'semi-bold': require('./assets/fonts/Walkway_UltraBold.ttf'),
    'walkway-black': require('./assets/fonts/Walkway_Black.ttf'),
    'walkway-oblique-black': require('./assets/fonts/Walkway_Oblique_Black.ttf'),
    'walkway-oblique-bold': require('./assets/fonts/Walkway_Oblique_Bold.ttf'),
    'walkway-oblique-semibold': require('./assets/fonts/Walkway_Oblique_SemiBold.ttf'),
    'walkway-oblique-ultrabold': require('./assets/fonts/Walkway_Oblique_UltraBold.ttf'),
    'walkway-oblique': require('./assets/fonts/Walkway_Oblique.ttf'),
    'walkway-semibold': require('./assets/fonts/Walkway_SemiBold.ttf'),


  })

  if (!isLoaded) {
    return <AppLoading />
  }


  return <>
    <StatusBar style='light' />
    <CreateContextProvider>
      {/*< Provider store={store} >*/}
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#690821" },
          headerTitleStyle: { fontFamily: "semi-bold"},
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#f5dada" }
        }}
      >
        <Stack.Screen
          name='Drawer'
          component={DrawerNavigation}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen
          name="MealsOverview"
          component={MealsOverview}
        />

        <Stack.Screen
          name="MealDetails"
          component={MealDetailScreen} />
      </Stack.Navigator>
{/* </Provider> */}
    </NavigationContainer>
    </CreateContextProvider>
  </>

}


