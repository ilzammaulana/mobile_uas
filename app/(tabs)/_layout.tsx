import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs 
            screenOptions={{ 
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#29252e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#29252e',
                },
            }}
        >
            <Tabs.Screen name="index" 
                options={{ 
                    title: 'Home', 
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />

            <Tabs.Screen name="search"
                options={{ 
                    title: 'Search',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'search-sharp' : 'search-outline'} color={color} size={24} />
                    )
                 }}
            />

            <Tabs.Screen name="about" 
                options={{
                    title: 'About', 
                    tabBarIcon: ({ color, focused}) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-outline'} color={color} size={24} />
                    ),
                }} 
            />
        </Tabs>
    );
}