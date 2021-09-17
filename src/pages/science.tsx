import * as React from "react";
import { Text, View, FlatList, TouchableOpacity, Linking } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../store";
import science from "../store/ducks/science";
import { scienceRequest } from "../store/ducks/science/actions";

const ScienceComponent = () => {
  const dispatch = useDispatch();

  const { data: science, loading: scienceLoading } = useSelector(
    (state: ApplicationState) => state.science
  );

  React.useEffect(() => {
    dispatch(scienceRequest());
  }, [dispatch]);

  return (
    <View style={{ flex: 1, backgroundColor: "#231f20" }}>
      <FlatList
        data={science.results}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 10, marginTop: 20 }}>
            <Card.Title title={item.section} subtitle={item.subsection} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.abstract}</Paragraph>
            </Card.Content>
            <TouchableOpacity
              style={{}}
              onPress={() => Linking.openURL(item.url)}
            >
              <Text
                style={{
                  color: "#f7b718",
                  fontSize: 20,
                  marginBottom: 10,
                  marginLeft: 10,
                }}
              >
                Saiba mais{" "}
              </Text>
            </TouchableOpacity>
          </Card>
        )}
      />
    </View>
  );
};

export default ScienceComponent;
