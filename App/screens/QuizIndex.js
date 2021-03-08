import React from "react";
import { ScrollView, StatusBar } from "react-native";

import { RowItem } from "../components/RowItem";

let categories = [
  { "value": "any", "name": "Any Category", "color": "#ca98ff" },
  { "value": "9", "name": "General Knowledge", "color": "#26d5d1" },
  { "value": "10", "name": "Entertainment: Books", "color": "#963c8c" },
  { "value": "11", "name": "Entertainment: Film", "color": "#1a70f0" },
  { "value": "12", "name": "Entertainment: Music", "color": "#c30dd4" },
  { "value": "13", "name": "Entertainment: Musicals & Theatres", "color": "#7077a0" },
  { "value": "14", "name": "Entertainment: Television", "color": "#ce7e31" },
  { "value": "15", "name": "Entertainment: Video Games", "color": "#75c84b" },
  { "value": "16", "name": "Entertainment: Board Games", "color": "#f8317c" },
  { "value": "17", "name": "Science & Nature", "color": "#b448eb" },
  { "value": "18", "name": "Science: Computers", "color": "#445ac7" },
  { "value": "19", "name": "Science: Mathematics", "color": "#8710f8" },
  { "value": "20", "name": "Mythology", "color": "#58824a" },
  { "value": "21", "name": "Sports", "color": "#9342e6" },
  { "value": "22", "name": "Geography", "color": "#d6c385" },
  { "value": "23", "name": "History", "color": "#dc149e" },
  { "value": "24", "name": "Politics", "color": "#62150e" },
  { "value": "25", "name": "Art", "color": "#aa33fb" },
  { "value": "26", "name": "Celebrities", "color": "#a02538" },
  { "value": "27", "name": "Animals", "color": "#21577e" },
  { "value": "28", "name": "Vehicles", "color": "#8599f3" },
  { "value": "29", "name": "Entertainment: Comics", "color": "#d4052a" },
  { "value": "30", "name": "Science: Gadgets", "color": "#f236d6" },
  { "value": "31", "name": "Entertainment: Japanese Anime & Manga", "color": "#545303" },
  { "value": "32", "name": "Entertainment: Cartoon & Animations", "color": "#438049" }
];




export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    {categories.map((item, key) => {
      return (
        <RowItem
          name={item.name}
          color={item.color}
          key={item.value}
          onPress={() =>
            navigation.navigate("Quiz", {
              title: item.name,
              questions: item.value,
              color: item.color
            })
          }
        />
      );
    })}
  </ScrollView>
);
