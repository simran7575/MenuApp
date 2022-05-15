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


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

  function DrawerNavigation(){
    return(
      <Drawer.Navigator>
        <Drawer.Screen name='MealsCategories' component={CategoriesScreen}/>
        <Drawer.Screen name='Favourites' component={FavouriteScreen}/>
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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#690821" },
          headerTitleStyle: { fontFamily: "semi-bold" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#806b6b" }
        }}
      >
        <Stack.Screen
          name='Drawer'
          component={DrawerNavigation}
          options={{
            title: "All Categories"
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

    </NavigationContainer>
  </>

}


