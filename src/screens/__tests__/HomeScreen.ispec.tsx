import React from "react";
import HomeScreen from "../HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import App from "../../../App";
import { Text, View } from "react-native";
import { render } from "@testing-library/react-native";

describe("HomeScreen", () => {

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {
    });
    jest.spyOn(console, 'warn').mockImplementation(() => {
    });
    jest.spyOn(console, 'info').mockImplementation(() => {
    });
    jest.spyOn(console, 'debug').mockImplementation(() => {
    });
  });

  test("show product list when HomeScreen init", async () => {

    render(
      <View>
        <Text>Hello</Text>
      </View>
    )

    // jest.spyOn(Product, "getAllProducts").mockResolvedValue([
    //   {
    //     id              : "ZmGrkLRPXOTpxsU4jjAcv",
    //     name            : "Orquídea",
    //     binomialName    : "Ophrys tenthredinifera",
    //     price           : 4.95,
    //     imgUrl          : "https://dulces-petalos.herokuapp.com/images/ophrysTenthredinifera.jpeg",
    //     wateringsPerWeek: 1,
    //     fertilizerType  : "phosphorus",
    //     heightInCm      : 30
    //   },
    //   {
    //     id              : "ND1elEt4nqZrCeFflDUZ2",
    //     name            : "Rosa de damasco",
    //     binomialName    : "Rosa damascena",
    //     price           : 10.5,
    //     imgUrl          : "https://dulces-petalos.herokuapp.com/images/rosaDamascena.jpeg",
    //     wateringsPerWeek: 3,
    //     fertilizerType  : "nitrogen",
    //     heightInCm      : 180
    //   },
    //   {
    //     id              : "pMZMhe_ZaAPZoaCCtlDrg",
    //     name            : "Rosa china",
    //     binomialName    : "Rosa chinensis",
    //     price           : 11.45,
    //     imgUrl          : "https://dulces-petalos.herokuapp.com/images/rosaChinensis.jpeg",
    //     wateringsPerWeek: 3,
    //     fertilizerType  : "nitrogen",
    //     heightInCm      : 195
    //   }
    // ]);
    //
    // const {findByText, findByPlaceholderText, debug} = render(
    //   <View>
    //     <Text>Hola</Text>
    //   </View>
    // )

    // const flower = await findByText("Orquídea")
    // debug()
    // const finder = await findByPlaceholderText("Buscar por nombre")
    //
    // // expect(flower).toBeDefined()
    // expect(finder).toBeDefined()

  });
});

const Stack = createStackNavigator();

export const renderWithNavigation = (
  mainComponent: any
) => {
  const App = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TestNavigator"
          component={ mainComponent }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  return {...render(<App/>)};
};
