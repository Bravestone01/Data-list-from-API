import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  
  useEffect(() => {
    getApiData();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Data list from Api</Text>
      <ScrollView>
        {data.length ? 
          data.map((item) => (
            <View key={item.id} style={styles.list}>
              <Text style={styles.id}>ID: {item.id}</Text>
              <Text style={styles.title}>Title: {item.title}</Text>
              <Text style={styles.body}>Body: {item.body}</Text>
            </View>
          ))
          : null
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  txt: {
    fontSize: 30,
    marginLeft: 20,
    marginBottom: 10,
    
  },
  list: {
    padding: 10,
    borderBottomColor: "gray",
    borderWidth: 1,
  },
  id: {
    backgroundColor: "black",
    color: "white",
    fontSize: 20,
  },
  title: {
    backgroundColor: "gray",
    fontSize: 15,
    color: "yellow",
  },
});
