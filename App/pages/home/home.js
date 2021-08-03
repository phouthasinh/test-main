import React, { Component } from "react";
import {
  View,
  ScrollView,
  LogBox,
  Text,
  ActivityIndicator,
} from "react-native";
import { styleGrid } from "../../core/style";
import { FlatGrid, SectionGrid } from "react-native-super-grid";
import { Image, Header, Button } from "react-native-elements";
import { Card, Paragraph, Caption } from "react-native-paper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetch_Data } from "../../redux/action";
const images = [
  "https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2021/06/21/coding-924920_1920jpg-20210621104244.jpg",
  "https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2021/06/21/coding-924920_1920jpg-20210621104244.jpg",
  "https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2021/06/21/coding-924920_1920jpg-20210621104244.jpg",
  "https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2021/06/21/coding-924920_1920jpg-20210621104244.jpg",
  "https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2021/06/21/coding-924920_1920jpg-20210621104244.jpg",
];

class HomePage extends Component {
  async componentDidMount() {
    // LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    await this.props.fetch_Data();
  }

  render() {
    const { data, isFetching } = this.props.dataReducer;
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: "#fd641e",
            justifyContent: "space-around",
          }}
          centerComponent={{ text: "Front-End Test", style: { color: "#fff" } }}
        />
        {isFetching ? (
          <ActionWaiting />
        ) : (
          <MainComponent data={data}></MainComponent>
        )}
      </View>
    );
  }
}

function MainComponent({ data }) {
  console.log(data);
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <HeaderContent data={data} title={"Popular"}></HeaderContent>
        <HeaderContent data={data} title={"Recommend"}></HeaderContent>
        <Paragraph>All Products</Paragraph>
        <FlatGrid
          itemDimension={130}
          style={styleGrid.gridView}
          data={data}
          spacing={10}
          renderItem={({ item, k }) => {
            return (
              <Card
                key={k}
                style={{ margin: 2, borderRadius: 5, overflow: "hidden" }}
              >
                <Image
                  source={{
                    uri: item.path.toString(),
                  }}
                  style={{
                    resizeMode: "stretch",
                    height: 80,
                  }}
                />
                <View style={{ alignSelf: "center", alignItems: "center" }}>
                  <Paragraph>{item.product_price} KIP</Paragraph>
                  <Caption>{item.product_name}</Caption>
                </View>
              </Card>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

function HeaderContent({ title, data }) {
  return (
    <View>
      <Paragraph>{title}</Paragraph>

      <ScrollView horizontal style={{ padding: 4 }}>
        {data.map((index, key) => {
          return (
            <Card
              key={key}
              style={{ margin: 2, borderRadius: 10, overflow: "hidden" }}
            >
              <Image
                source={{
                  uri: index.path,
                }}
                style={{
                  resizeMode: "stretch",
                  width: 200,
                  height: 100,

                  // marginTop: 4,
                }}
              />

              <View style={{ alignSelf: "center" }}>
                <Paragraph>{index.product_price} KIP</Paragraph>
                <Caption>{index.product_name}</Caption>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}

function ActionWaiting(params) {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <HeaderContentWait title={"Popular"} />
        <HeaderContentWait title={"Recommend"} />
        <Paragraph>All Products</Paragraph>
        <FlatGrid
          itemDimension={130}
          style={styleGrid.gridView}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          spacing={10}
          renderItem={({ item, k }) => {
            return (
              <Card style={{ margin: 2, borderRadius: 10, overflow: "hidden" }}>
                <View
                  style={{
                    resizeMode: "stretch",
                    width: 200,
                    height: 80,
                    backgroundColor: "#D5D8DC",
                  }}
                ></View>

                <View style={{ alignSelf: "center", margin: 5 }}>
                  <View
                    style={{
                      borderRadius: 10,
                      resizeMode: "stretch",
                      width: 150,
                      height: 20,
                      backgroundColor: "#D5D8DC",
                      margin: 5,
                    }}
                  ></View>
                  <View
                    style={{
                      borderRadius: 10,
                      resizeMode: "stretch",
                      width: 150,
                      height: 15,
                      backgroundColor: "#D5D8DC",
                      margin: 5,
                    }}
                  ></View>
                </View>
              </Card>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}
function HeaderContentWait({ title }) {
  return (
    <View>
      <Paragraph>{title}</Paragraph>
      <ScrollView horizontal style={{ padding: 4 }}>
        {Array.from({ length: 4 }, (index, key) => {
          return (
            <Card
              key={key}
              style={{ margin: 2, borderRadius: 10, overflow: "hidden" }}
            >
              <View
                style={{
                  resizeMode: "stretch",
                  width: 200,
                  height: 80,
                  backgroundColor: "#D5D8DC",
                }}
              ></View>

              <View style={{ alignSelf: "center", margin: 5 }}>
                <View
                  style={{
                    borderRadius: 10,
                    resizeMode: "stretch",
                    width: 150,
                    height: 20,
                    backgroundColor: "#D5D8DC",
                    margin: 5,
                  }}
                ></View>
                <View
                  style={{
                    borderRadius: 10,
                    resizeMode: "stretch",
                    width: 150,
                    height: 15,
                    backgroundColor: "#D5D8DC",
                    margin: 5,
                  }}
                ></View>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    dataReducer: state.dataReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetch_Data }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
